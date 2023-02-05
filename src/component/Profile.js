import React from "react";
import "./Profile.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faLinkedin,
  faGoogle,
} from "@fortawesome/free-brands-svg-icons";

function Profile({ pfp, name, reg_no, linkedIn, gitHub, gmail }) {
  return (
    <div className="profile">
      <div className="profile-lft">
        <img className="profile__img" src={pfp} alt="pfp" />
      </div>

      <div className="profile-rgt">
        <h1 className="profile__name">{name}</h1>
        <h3 className="profile__reg">{reg_no}</h3>

        <div className="profile-icons">
          <a className="anch" rel="noopener noreferrer" target="_blank" href={linkedIn}>
            <FontAwesomeIcon icon={faLinkedin} className="footer-icons" />
          </a>

          <a className="anch" rel="noopener noreferrer" target="_blank" href={gitHub}>
            <FontAwesomeIcon icon={faGithub} className="footer-icons" />
          </a>

          <a className="anch" rel="noopener noreferrer" target="_blank" href={gmail}>
            <FontAwesomeIcon icon={faGoogle} className="footer-icons" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Profile;
