import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCommentDots } from "@fortawesome/free-solid-svg-icons";
import "./Chat.css";
// const NoHR = () => {
//   return <span className="zumChat">Zum Chat</span>;
// };

const Chat = (props) => {
  if (props.HRName) {
    const name_letters = props.HRName.split(" ");
    var first_letter = name_letters[0][0];
    var second_letter = name_letters[1][0];
    console.log(first_letter);
  }
  const NO_Photo_Name = <span className="zumChat">Zum Chat</span>;
  const NO_photo_only = (
    <span className="hrLettersLogo">
      {first_letter}
      {second_letter}
    </span>
  );

  return (
    <div className="chat-containt">
      {props.HRPhoto && props.HRName ? (
        <img src={props.HRPhoto} className="hrLogo" alt="HRPhoto" />
      ) : props.HRName ? (
        NO_photo_only
      ) : (
        NO_Photo_Name
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
