//  import React from "react";
import { NavLink } from "react-router-dom";
import "../styles/SignUp.css";
import { auth } from "../firebase/firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";

const SignUp = () => {
  // const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      console.log("Account Created");
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <>
      <div className="signUp-container">
        <form className="signUp-form" onSubmit={handleSubmit}>
          <h2>Sign Up</h2>
          <div>
            <input type="text" placeholder="Enter your full name" />
          </div>

          <div>
            <input
              type="email"
              placeholder="Enter your email address"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div>
            <input
              type="password"
              placeholder="Create your password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div>
            <input type="password" placeholder="Confirm your password" />
          </div>

          <button>Sign Up</button>
          <p className="txt">
            Already have an account? <NavLink to="/login">Login</NavLink>
          </p>
        </form>
      </div>
    </>
  );
};

export default SignUp;
