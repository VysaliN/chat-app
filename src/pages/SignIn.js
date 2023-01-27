import React, { useState } from "react";
import "./SignIn.css";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";
const SignIn = () => {
  const [err, setErr] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const email = e.target[0].value;
    const password = e.target[1].value;

    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate("/home");
    } catch (err) {
      setErr(true);
    }
  };
  return (
    <div className="signincontainer">
      <div className="signin">
        <h2>Sign In</h2>
        <form onSubmit={handleSubmit}>
          <input type="email" placeholder="Email" className="signininput" />
          <input
            type="password"
            placeholder="Password"
            className="signininput"
          />
          <button className="signinbtn">Signin</button>
        </form>
        <span className="account">
          Don't have an account?
          <Link to="/">SignUp</Link>
        </span>
        {err && <span className="error">Something went wrong</span>}
      </div>
    </div>
  );
};

export default SignIn;
