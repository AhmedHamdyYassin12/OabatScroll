import React, { useState } from "react";
import "./Overlay.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
const Overlay = (props) => {
  const [clickable, setClickable] = useState(false);
  const closeOverlayListener = () => {
    setClickable(!clickable);
    console.log("i am closing now" + clickable);
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
        <p className="positionTitle">{props.positionTitle}</p>
      </div>
    </span>
  );
};

export default Overlay;
