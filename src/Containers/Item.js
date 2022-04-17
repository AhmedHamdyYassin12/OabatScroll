import React from "react";

import "./Item.css";
import ItemContainer from "./ItemContainer";
import BackImageLogo from "./Sections/BackImageLogo";
import InformationSection from "./Sections/InformationSection";
const Item = (props) => {
  return (
    <ItemContainer>
      <BackImageLogo
        backgroundPhoto={props.backgroundPhoto}
        companyLogo={props.companyLogo}
      />
      <InformationSection
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
