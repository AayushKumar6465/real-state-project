import express from 'express';
import { updateUser, test, deleteUser, getUserListings } from '../controllers/user_controller.js';
import { verifyToken } from '../utility/verifyUser.js';

const router = express.Router();

router.get('/test', test);  
router.post('/update-user/:id', verifyToken, updateUser);
router.delete('/delete-user/:id', verifyToken, deleteUser);
router.get('/listings/:id', verifyToken, getUserListings);

export default router;