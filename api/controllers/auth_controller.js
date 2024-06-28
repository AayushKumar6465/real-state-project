import User from '../models/user_model.js'; // Import User model
import bcryptjs from 'bcryptjs'; // Import bcryptjs for password hashing
import { errorHandler } from '../utility/error_utility.js'; // Import error handler
import jwt from 'jsonwebtoken'; // Import JWT for token generation

// Function to sign up a new user
export const signup = async (req, res, next) => {

    const { username, email, password } = req.body; // Get user details from request body
    
    const hashedPassword = bcryptjs.hashSync(password, 10); // Hash the password
    
    const newUser = new User({ username, email, password: hashedPassword }); // Create a new user object
    
    try {
        await newUser.save(); // Save the new user to the database
        res.status(201).json('User created successfully!'); // Return success message
    } catch (error) {
        next(errorHandler(550, 'Error From The Function')); // Handle errors
    }
};

// Function to sign in an existing user
export const signin = async (req, res, next) => {
    const { email, password } = req.body; // Get user credentials from request body
    try {
        const validUser = await User.findOne({ email }); // Find the user in the database
        if (!validUser) return next(errorHandler(404, 'User Not Found!')); // Handle invalid user

        const validPassword = bcryptjs.compareSync(password, validUser.password); // Check if the password is valid
        if (!validPassword) return next(errorHandler(401, 'Wrong Credentials!')); // Handle invalid password
        
        const token = jwt.sign({ id: validUser._id }, process.env.JWT_SECRET); // Generate a JWT token
        
        res.cookie('access_token', token, { httpOnly: true }).status(200).json(validUser); // Set the token in a cookie and return the user details

    } catch (error) {
        next(error); // Handle errors
    }
};

export const google = async (req, res, next) => {
    try {
        const user = await User.findOne({email:req.body.email});
        if(user){
            const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);
            const { password: pass, ...rest } = user._doc;
            res.cookie('access_token', token, { httpOnly: true }).status(200).json(user);
        } else{
            const generatePassword = Math.random().toString(36).slice(-8);
            const hashedPassword = bcryptjs.hashSync(generatePassword, 10);
            const newUser = new User({username: req.body.name.split("").join("").toLowerCase() + Math.random().toString(36).slice(-4), email: req.body.email, password: hashedPassword, avatar: req.body.photo});
            await newUser.save();
            const token = jwt.sign({ id: newUser._id }, process.env.JWT_SECRET);
            const {password: pass, ...rest} = newUser._doc;
            res.cookie('access_token', token, { httpOnly: true }).status(200).json(rest);
        }
    } catch (error) {
        next(error);
    }
}