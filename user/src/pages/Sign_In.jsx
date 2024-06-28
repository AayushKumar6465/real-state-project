import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  signInStart,
  signInSuccess,
  SignInFailure,
} from "../redux/users/userSlice";

// Functional component for Sign In
function Sign_In() {
  const [formData, setformData] = useState({}); // State to hold form data
  const { loading, error } = useSelector((state) => state.user); // State to show loading state
  const navigate = useNavigate(); // Navigation hook
  const dispatch = useDispatch();
  // Function to handle form input change
  const handleChange = (e) => {
    setformData({ ...formData, [e.target.id]: e.target.value }); // Update formData state with new value
  };

  // Function to handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      dispatch(signInStart());

      // Make a POST request to signin API
      const res = await fetch("/api/auth/signin", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const data = await res.json(); // Parse response as JSON

      // If signin fails, show error message and return
      if (data.success === false) {
        dispatch(SignInFailure(data.message));  
        return;
      }

      dispatch(signInSuccess());
      navigate("/");
    } catch (error) {
      dispatch(SignInFailure(error.message));
    }
  };

  // Render the Sign In form
  return (
    <div className="p-3 max-w-lg mx-auto">
      <h1 className="text-3xl text-center font-semibold my-7">Sign In</h1>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <input
          type="email"
          placeholder="email"
          className="border p-3 rounded-lg"
          id="email"
          onChange={handleChange}
        />
        <input
          type="password"
          placeholder="password"
          className="border p-3 rounded-lg"
          id="password"
          onChange={handleChange}
        />
        <button
          disabled={loading}
          className="bg-slate-700 text-white p-3 rounded-lg uppercase hover:opacity-95 disabled:opacity-80"
        >
          {loading ? "loading..." : "Sign In"}
        </button>
      </form>
      <div className="flex gap-2 mt-5">
        <p>Dont have an account?</p>
        <Link to={"/sign-up"}>
          <span className="text-blue-700">Sign Up</span>
        </Link>
      </div>
      {error && <p className="text-red-500">{error}</p>}
    </div>
  );
}

export default Sign_In;
