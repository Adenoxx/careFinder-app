import "../styles/Login.css";
// import { ReactComponent as HomeIcon } from '../../assets/svg/home.svg'
// import HomeIcon from '../../assets/svg/home.svg';
import { NavLink } from "react-router-dom";
import { auth } from "../firebase/firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      console.log("Login successful ");
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <>
      <div className="login-container">
        <form className="login-form" onSubmit={handleSubmit}>
          <h2>Login</h2>
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
          <button>Login</button>
          <p className="txt">
            Don't have an account yet? <NavLink to="/signUp">Sign Up</NavLink>
          </p>
        </form>
      </div>
    </>
  );
};

export default Login;
