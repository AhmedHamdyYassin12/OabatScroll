import "./App.css";
import Wrapper from "./Containers/Wrapper";
import Item from "./Containers/Item";

import logo1 from "./images/klinikum_logo.webp";
import background1 from "./images/Klinikum.webp";
import HRPhoto1 from "./images/hober_HR.webp";

import logo2 from "./images/hober_logo.webp";
import background2 from "./images/hober_logo.webp";
import HRPhoto2 from "./images/hober_HR.webp";

function App() {
  const data = {
    item1: {
      logo: logo1,
      background: background1,
      name: "Klinikum Passau",
      address: "Innstraße 76, Passau",
      HRName: "Katrin Blumauer",
      HRPhoto: HRPhoto1,
      response: 2,
      responseAngle: true,
      positionTitle: "Pflegefachmann/-frau",
      openingsOptions: 1,
    },
    item2: {
      logo: logo2,
      background: background2,
      name: "ahmed yassin",
      address: "Hollanderstr, 15",
      HRName: "ahmed yassin",
      HRPhoto: HRPhoto2,
      response: 12,
      responseAngle: true,
      positionTitle: "Pflegefachmann/-frau",
      openings: 0,
    },
    item3: {
      logo: "",
      background: "",
      name: "",
      address: "",
      HRName: "",
      HRPhoto: "",
      responseAngle: true,
      response: 10,
      openings: "",
    },
    item4: {
      logo: "",
      background: "",
      name: "",
      address: "",
      HRName: "",
      HRPhoto: "",
      responseAngle: true,
      response: 10,
      openings: "",
    },
    item5: {
      logo: "",
      background: "",
      name: "",
      address: "",
      HRName: "",
      HRPhoto: "",
      responseAngle: true,
      response: 10,
      openings: "",
    },
    item6: {
      logo: "",
      background: "",
      name: "",
      address: "",
      HRName: "",
      HRPhoto: "",
      responseAngle: true,
      response: 10,
      openings: "",
    },
  };
  return (
    <Wrapper>
      <Item
        backgroundPhoto={data.item1.background}
        companyLogo={data.item1.logo}
        companyName={data.item1.name}
        companyAddress={data.item1.address}
        companyResponse={data.item1.response}
        responseLimit={data.item1.responseAngle}
        positionTitle={data.item1.positionTitle}
        openingsOptions={data.item1.openingsOptions}
        HRPhoto={data.item1.HRPhoto}
        HRName={data.item1.HRName}
      />

      <Item
        backgroundPhoto={data.item2.background}
        companyLogo={data.item2.logo}
        companyName={data.item2.name}
        companyAddress={data.item2.address}
        companyResponse={data.item2.response}
        responseLimit={data.item2.responseAngle}
        positionTitle={data.item2.positionTitle}
        openingsOptions={data.item2.openingsOptions}
        HRPhoto={data.item2.HRPhoto}
        HRName={data.item2.HRName}
      />

      <Item
        backgroundPhoto={data.item1.background}
        companyLogo={data.item1.logo}
        companyName={data.item1.name}
        companyAddress={data.item1.address}
        companyResponse={data.item1.response}
        responseLimit={data.item1.responseAngle}
        positionTitle={data.item1.positionTitle}
        openingsOptions={data.item1.openingsOptions}
        HRPhoto={data.item1.HRPhoto}
        HRName={data.item1.HRName}
      />

      <Item
        backgroundPhoto={data.item1.background}
        companyLogo={data.item1.logo}
        companyName={data.item1.name}
        companyAddress={data.item1.address}
        companyResponse={data.item1.response}
        responseLimit={data.item1.responseAngle}
        positionTitle={data.item1.positionTitle}
        openingsOptions={data.item1.openingsOptions}
        HRPhoto={data.item1.HRPhoto}
        HRName={data.item1.HRName}
      />

      <Item
        backgroundPhoto={data.item2.background}
        companyLogo={data.item2.logo}
        companyName={data.item2.name}
        companyAddress={data.item2.address}
        companyResponse={data.item2.response}
        responseLimit={data.item2.responseAngle}
        positionTitle={data.item2.positionTitle}
        openingsOptions={data.item2.openingsOptions}
        HRPhoto={data.item2.HRPhoto}
        HRName={data.item2.HRName}
      />
      {/* <Item
        answer={data.item1.response}
        backgroundPhoto={data.item1.background}
        companyLogo={data.item1.logo}
      />
      <Item
        answer={data.item1.response}
        backgroundPhoto={data.item1.background}
        companyLogo={data.item1.logo}
      />
      <Item
        answer={data.item1.response}
        backgroundPhoto={data.item1.background}
        companyLogo={data.item1.logo}
      />
      <Item
        answer={data.item1.response}
        backgroundPhoto={data.item1.background}
        companyLogo={data.item1.logo}
      />
      <Item
        answer={data.item1.response}
        backgroundPhoto={data.item1.background}
        companyLogo={data.item1.logo}
      /> */}
    </Wrapper>
  );
}

export default App;
