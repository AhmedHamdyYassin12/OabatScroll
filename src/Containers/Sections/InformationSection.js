import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { faLocationPin } from "@fortawesome/free-solid-svg-icons";
import { faHeartCircleCheck } from "@fortawesome/free-solid-svg-icons";
import React, { useState } from "react";
import Weitere from "./Chunks/Weitere";
import Chat from "./Chunks/Chat";
import "./InformationSection.css";

const InformationSection = (props) => {
  const [favOrNot, setFav] = useState(false);
  const onfavListener = () => {
    console.log("" + favOrNot);
    setFav(!favOrNot);
  };
  return (
    <div className="info">
      <div className="fav">
        <p className="favWord">merken</p>
        <div className="iconFav" onClick={onfavListener}>
          {favOrNot ? (
            <FontAwesomeIcon
              icon={faHeartCircleCheck}
              className="bookmark"
              onClick={onfavListener}
            ></FontAwesomeIcon>
          ) : (
            <FontAwesomeIcon
              icon={faHeart}
              className="bookmark"
              onClick={onfavListener}
            ></FontAwesomeIcon>
          )}
        </div>
      </div>
      <div className="text-container">
        <div className="address">
          <h3 className="company">{props.companyName}</h3>
          <div>
            <FontAwesomeIcon icon={faLocationPin}></FontAwesomeIcon>
            <span>{" " + props.companyAddress}</span>
          </div>
        </div>

        <div className="chat">
          <Chat HRPhoto={props.HRPhoto} HRName={props.HRName} />
          <p
            className="response"
            style={
              props.companyResponse <= 4
                ? { color: "green" }
                : { color: "orange" }
            }
          >
            Antwort in {props.responseLimit ? ">" : "<"} {props.companyResponse}
            h
          </p>
        </div>

        <div className="ausbildung">
          <div className="ausbildung-containt">
            <span className="title">Ausbildung</span>
            <Weitere openingsOptions={props.openingsOptions} />
          </div>
          <p className="position">{props.positionTitle}</p>
        </div>
      </div>
    </div>
  );
};
export default InformationSection;
