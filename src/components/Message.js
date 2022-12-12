import React, { useContext, useEffect, useRef } from "react";
import "./style.css";
import { AuthContext } from "../context/AuthContext";
import { ChatContext } from "../context/ChatContext";

const Message = ({ message }) => {
  const { currentUser } = useContext(AuthContext);
  const { data } = useContext(ChatContext);
  const ref = useRef();

  useEffect(() => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  }, [message]);

  return (
    <div
      ref={ref}
      className={`message ${message.senderId === currentUser.uid && "owner"}`}
    >
      <div className="messageInfo">
        <img
          src={
            message.senderId === currentUser.uid
              ? currentUser.photoURL
              : data.user.photoURL
          }
          alt="profile"
        />
        <span className="justnow">just now</span>
      </div>

      <div className="messagecontent">
        {message.text && <p className="messagetext">{message.text}</p>}
        {message.img && <img src={message.img} alt="image" className="image"/>}
      </div>
    </div>
  );
};

export default Message;
