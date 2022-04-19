import "./App.css";
import Wrapper from "./Containers/Wrapper";
import Item from "./Containers/Item";

import logo1 from "./images/klinikum_logo.webp";
import background1 from "./images/Klinikum.webp";
import HRPhoto1 from "./images/hober_HR.webp";

import logo2 from "./images/hober_logo.webp";
import background2 from "./images/hober.webp";
import HRPhoto2 from "./images/hober_HR.webp";

function App() {
  const data = [
    {
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
    {
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
    {
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
    {
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
    {
      logo: logo1,
      background: background1,
      name: "Klinikum Passau",
      address: "Innstraße 76, Passau",
      HRName: "Katrin Blumauer",
      HRPhoto: HRPhoto1,
      response: 2,
      responseAngle: true,
      positionTitle: "Pflegefachmann/-frau",
      openingsOptions: 2,
    },
    {
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
  ];
  return (
    <Wrapper>
      {data.map((item) => {
        return (
          <Item
            backgroundPhoto={item.background}
            companyLogo={item.logo}
            companyName={item.name}
            companyAddress={item.address}
            companyResponse={item.response}
            responseLimit={item.responseAngle}
            positionTitle={item.positionTitle}
            openingsOptions={item.openingsOptions}
            HRPhoto={item.HRPhoto}
            HRName={item.HRName}
          />
        );
      })}
    </Wrapper>
  );
}

export default App;
