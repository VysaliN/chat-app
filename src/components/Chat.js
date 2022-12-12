import React, { useContext } from "react";
import "./style.css";
import { HiOutlineVideoCamera } from "react-icons/hi";
import { TiUserAdd } from "react-icons/ti";
import { MdMoreHoriz } from "react-icons/md";
import Messages from "./Messages";
import Input from "./Input";
import { ChatContext } from "../context/ChatContext";

const Chat = () => {
  const { data } = useContext(ChatContext);

  return (
    <div className="chat">
      <div className="chatinfo">
        <span className="userchatname">{data.user.displayName}</span>
        <div className="chaticons">
          <HiOutlineVideoCamera />
          <TiUserAdd />
          <MdMoreHoriz />
        </div>
      </div>
      <div>
        <Messages />
        <Input />
      </div>
    </div>
  );
};

export default Chat;
