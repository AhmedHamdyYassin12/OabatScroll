import "./App.css";
import Wrapper from "./Containers/Wrapper";
import Item from "./Containers/Item";

import logo1 from "./images/klinikum_logo.webp";
import background1 from "./images/Klinikum.webp";
import HRPhoto1 from "./images/hober_HR.webp";

import logo2 from "./images/hober_logo.webp";
import background2 from "./images/hober.webp";
import HRPhoto2 from "./images/DummyHR.webp";

import logo3 from "./images/beutlhauser_logo.webp";
import background3 from "./images/beutlhauser.webp";

import logo4 from "./images/mymuseli_logo.webp";
import background4 from "./images/mymuesli.webp";

import logo5 from "./images/nikola_logo.webp";
import background5 from "./images/nikola.webp";

import logo6 from "./images/zweirad_logo.webp";
import background6 from "./images/zweirad.webp";

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
      positionTitle: ["Pflegefachmann/-frau", "Ahmed"],
      openingsOptions: 2,
    },
    {
      logo: logo2,
      background: background2,
      name: "Ahmed Yassin",
      address: "Innstraße 76, Passau",
      HRName: "Ahmed Yassin",
      HRPhoto: HRPhoto2,
      response: 12,
      responseAngle: true,
      positionTitle: ["Pflegefachmann/-frau"],
      openings: 0,
    },
    {
      logo: logo3,
      background: background3,
      name: "Beutlhauser",
      address: "Innstraße 76, Passau",
      HRName: "Ahmed Yassin",
      HRPhoto: HRPhoto1,
      response: 20,
      responseAngle: true,
      positionTitle: ["Pflegefachmann/-frau", "ahmed", "mohamed"],
      openingsOptions: 3,
    },
    {
      logo: logo4,
      background: background4,
      name: "Mymuseli",
      address: "Innstraße 76, Passau",
      HRName: "Ahmed Yassin",
      HRPhoto: HRPhoto2,
      response: 12,
      responseAngle: false,
      positionTitle: ["Pflegefachmann/-frau"],
      openings: 0,
    },
    {
      logo: logo5,
      background: background5,
      name: "Nikola",
      address: "Innstraße 76, Passau",
      HRName: "Ahmed Yassin",
      HRPhoto: HRPhoto1,
      response: 2,
      responseAngle: true,
      positionTitle: ["Pflegefachmann/-frau", "Pflegehelfer/-frau"],
      openingsOptions: 2,
    },
    {
      logo: logo6,
      background: background6,
      name: "Zweirad",
      address: "Innstraße 76, Passau",
      HRName: "",
      HRPhoto: "",
      response: 12,
      responseAngle: true,
      positionTitle: ["Pflegefachmann/-frau"],
      openings: 0,
    },
  ];
  return (
    <Wrapper>
      {data.map((item, index) => {
        return (
          <Item
            key={index}
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
