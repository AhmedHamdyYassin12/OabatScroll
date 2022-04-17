import "./App.css";
import Wrapper from "./Containers/Wrapper";
import Item from "./Containers/Item";
import logo1 from "./images/klinikum_logo.webp";
import background1 from "./images/Klinikum.webp";

function App() {
  const data = {
    item1: {
      logo: logo1,
      background: background1,
      name: "Klinikum Passau",
      address: "Innstraße 76, Passau",
      HRName: "",
      HRPhoto: "",
      response: 24,
      responseAngle: true,
      openings: "",
    },
    item2: {
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
