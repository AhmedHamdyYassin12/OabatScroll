import React, { useState } from "react";
import "./Item.css";
import ItemContainer from "./ItemContainer";
import BackImageLogo from "./Sections/BackImageLogo";
import InformationSection from "./Sections/InformationSection";
import Overlay from "./Sections/Overlay";
const Item = (props) => {
  const [clickable, setClickable] = useState(0);
  const onWeiterListner = (clickValue) => {
    console.log("click value is" + clickValue);
    setClickable(!clickable);
  };

  return (
    <ItemContainer>
      {clickable ? (
        <Overlay
          companyName={props.companyName}
          positionTitle={props.positionTitle}
        />
      ) : (
        ""
      )}
      <BackImageLogo
        backgroundPhoto={props.backgroundPhoto}
        companyLogo={props.companyLogo}
      />
      <InformationSection
        onClickWeiter={onWeiterListner}
        answer={props.answer}
        companyName={props.companyName}
        companyAddress={props.companyAddress}
        companyResponse={props.companyResponse}
        responseLimit={props.responseLimit}
        positionTitle={props.positionTitle}
        openingsOptions={props.openingsOptions}
        HRPhoto={props.HRPhoto}
        HRName={props.HRName}
      />
    </ItemContainer>
  );
};
export default Item;
