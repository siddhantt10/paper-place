import React from "react";
import "./Outcome.css";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse } from "@fortawesome/free-solid-svg-icons";

function Outcome(err) {
  const { errmsg } = useParams();
  return (
    <div className="outcome">
      {errmsg === "success" ? (
        <div className="error">
          <h1>Oops!</h1>
          <h3>Somthing went Wrong!</h3>
          <p>
            Sorry for the inconvenience, Please try again later or contact the
            developers from about page.
          </p>
        </div>
      ) : (
        <div className="success">
          <h1>Yay!</h1>
          <h3>Your action was Successfull!</h3>
          <p>
            Thank you for your contribution! if you have any issues related to
            your request, Contact any one of us from about page.
          </p>
        </div>
      )}
      <Link to="/" className="home-out-btn">
        <p>
          <FontAwesomeIcon className="outIcon" icon={faHouse} />
          Go to home page{" "}
        </p>
      </Link>
    </div>
  );
}

export default Outcome;
