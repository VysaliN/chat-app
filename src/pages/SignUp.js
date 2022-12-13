import React, { useState } from "react";
import "./SignUp.css";
import { MdImage } from "react-icons/md";
import { Link } from "react-router-dom";
import { auth, storage, db } from "../firebase";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { doc, setDoc } from "firebase/firestore";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const [err, setErr] = useState(false);
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const displayName = e.target[0].value;
    const email = e.target[1].value;
    const password = e.target[2].value;
    const file = e.target[3].files[0];
      try {
        const res = await createUserWithEmailAndPassword(auth, email, password);

        const storageRef = ref(storage, displayName);

        const uploadTask = uploadBytesResumable(storageRef, file);

        uploadTask.on(
          (error) => {
            setErr(true);
          },
          () => {
            getDownloadURL(uploadTask.snapshot.ref).then(
              async (downloadURL) => {
                await updateProfile(res.user, {
                  displayName,
                  photoURL: downloadURL,
                });
                await setDoc(doc(db, "users", res.user.uid), {
                  uid: res.user.uid,
                  displayName,
                  email,
                  photoURL: downloadURL,
                });
                await setDoc(doc(db, "userChats", res.user.uid), {});
                navigate("/home");
              }
            );
          }
        );
      } catch (err) {
        setErr(true);
      }
  };

  return (
    <div className="signupcontainer">
      <div className="signup">
        <h2>Sign Up</h2>
        <form onSubmit={handleSubmit}>
          <input type="text" placeholder="Name" className="signupinput" required />
          <input type="email" placeholder="Email" className="signupinput"  required/>
          <input
            type="password"
            placeholder="Password"
            className="signupinput"
            pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
            title="Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters"
            required
          />

          <input type="file" id="file" style={{ display: "none" }}  required/>
          <label htmlFor="file" className="mdimage">
            <MdImage />
            <span className="profiletext">Add An Avatar</span>
          </label>
          <button className="signupbtn">Signup</button>
        </form>
        <span className="account">
          Already have an account?
          <Link to="/signin">SignIn</Link>
        </span>
        {err && <span className="error">Something went wrong</span>}
      </div>
    </div>
  );
};

export default SignUp;
