import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { faLocationPin } from "@fortawesome/free-solid-svg-icons";
import { faAngleUp } from "@fortawesome/free-solid-svg-icons";
import { faCommentDots } from "@fortawesome/free-solid-svg-icons";
import "./InformationSection.css";
const InformationSection = (props) => {
  return (
    <div className="info">
      <div className="fav">
        <p className="favWord">merken</p>
        <FontAwesomeIcon icon={faHeart} className="bookmark"></FontAwesomeIcon>
      </div>
      <div class="text-container">
        <div class="address">
          <h3 class="company">{props.companyName}</h3>
          <div>
            <FontAwesomeIcon icon={faLocationPin}></FontAwesomeIcon>
            <span>{" " + props.companyAddress}</span>
          </div>
        </div>

        <div class="chat">
          <div class="chat-containt">
            <span>Zum Chat</span>
            <FontAwesomeIcon icon={faCommentDots}></FontAwesomeIcon>
          </div>
          <p class="response">Antwort in > {props.companyResponse}h</p>
        </div>

        <div class="ausbildung">
          <div class="ausbildung-containt">
            <span class="title">Ausbildung</span>
            <div>
              <span>+3 weitere </span>
              <FontAwesomeIcon
                icon={faAngleUp}
                className="other"
              ></FontAwesomeIcon>
            </div>
          </div>
          <p class="position">Pflegefachmann/-frau</p>
        </div>
      </div>
    </div>
  );
};
export default InformationSection;
