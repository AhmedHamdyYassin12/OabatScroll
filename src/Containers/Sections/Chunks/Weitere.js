import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleUp } from "@fortawesome/free-solid-svg-icons";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";

const NoOptions = () => {
  return (
    <FontAwesomeIcon icon={faAngleRight} className="other"></FontAwesomeIcon>
  );
};

const Weitere = (props) => {
  return props.openingsOptions > 0 ? (
    <div>
      <span>+{props.openingsOptions} weitere </span>
      <FontAwesomeIcon
        icon={faAngleUp}
        className="other"
        onClick={props.onOtherOptions}
      ></FontAwesomeIcon>
    </div>
  ) : (
    <NoOptions />
  );
};
export default Weitere;
