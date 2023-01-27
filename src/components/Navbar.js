import React, { useContext } from "react";
import "./style.css";
import { signOut } from "firebase/auth";
import { auth } from "../firebase";
import { AuthContext } from "../context/AuthContext";
const Navbar = () => {
  const { currentUser } = useContext(AuthContext);
  return (
    <div className="navbar">
      <span className="appname">Chat App</span>
      <div className="user">
        <img src={currentUser.photoURL} alt="profile" />
        <span className="profilename">{currentUser.displayName}</span>
        <button className="signoutbtn" onClick={() => signOut(auth)}>
          Signout
        </button>
      </div>
    </div>
  );
};

export default Navbar;
