import React, { useState } from "react";
import "./Overlay.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
const Overlay = (props) => {
  const [clickable, setClickable] = useState(false);
  const closeOverlayListener = () => {
    setClickable(!clickable);
    // props.onOverlay(clickable);
  };
  return (
    <span className={`overlayOptions ${clickable ? "close" : ""}`}>
      <p className="companyName">{props.companyName}</p>
      <FontAwesomeIcon
        icon={faXmark}
        className="CloseOverlay"
        onClick={closeOverlayListener}
      ></FontAwesomeIcon>
      <div>
        {props.positionTitle.map((position, index) => {
          return (
            <p key={index} className="positionTitle">
              {position}
            </p>
          );
        })}
      </div>
    </span>
  );
};

export default Overlay;
