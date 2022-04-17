import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCommentDots } from "@fortawesome/free-solid-svg-icons";
import "./Chat.css";
const NoHR = () => {
  return <span className="zumChat">Zum Chat</span>;
};

const Chat = (props) => {
  console.log("" + props.HRName);
  return (
    <div className="chat-containt">
      {props.HRPhoto ? (
        <img src={props.HRPhoto} className="hrLogo" alt="HRPhoto" />
      ) : (
        <NoHR />
      )}

      {!props.HRPname ? <p className="hrName">{props.HRName}</p> : ""}

      <FontAwesomeIcon
        icon={faCommentDots}
        className="chatIcon"
      ></FontAwesomeIcon>
    </div>
  );
};

export default Chat;
