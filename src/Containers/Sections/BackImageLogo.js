import "./BackImageLogo.css";
const BackImageLogo = (props) => {
  return (
    <div className="imgContainer">
      <img
        src={props.backgroundPhoto}
        alt="backgroundImage"
        className="picture-section"
      />
      <div className="logo">
        <img src={props.companyLogo} alt="logo" />
      </div>
    </div>
  );
};
export default BackImageLogo;
