import React from "react";
import "./About.css";
import Profile from "./component/Profile";

function About() {
  return (
    <div className="about">
      <div className="about__title">
        <h1 className="about-head">The Team</h1>
        <p className="about-text">
          Feel free to contact any of us through the social links.
        </p>
      </div>

      <div className="about-profiles">
        <Profile
          pfp="https://media.licdn.com/dms/image/D4D03AQGzV5wA3UI3Rg/profile-displayphoto-shrink_400_400/0/1669476406186?e=1680739200&v=beta&t=oNIr6iyAjpJ6IR1yD11o5XXpI0CWASKxnWWWlnQfuEo"
          name="Siddhant Patel"
          reg_no="21BCE10511"
          linkedIn="https://www.linkedin.com/in/siddhantt10/"
          gitHub="https://github.com/siddhantt10"
          gmail="https://mail.google.com/mail/?view=cm&to=siddhant.patel2021@vitbhopal.ac.in"
        />
        <Profile
          pfp="https://media.licdn.com/dms/image/D4D03AQF4FxskpUOzXw/profile-displayphoto-shrink_400_400/0/1647508250094?e=1680739200&v=beta&t=NZw1EMU9oA4_kwCvPYwR2Ug5nf6IuRk3BRaRpmfAjfY"
          name="Shashwat Malewar"
          reg_no="21BCE10320"
          linkedIn="https://www.linkedin.com/in/shashwat-malewar-081b0322b"
          gitHub="https://github.com/shashwatM33"
          gmail="https://mail.google.com/mail/?view=cm&to=shashwat.malewar2021@vitbhopal.ac.in"
        />
        <Profile
          pfp="https://media.licdn.com/dms/image/C5603AQFz5JjzUlFMfQ/profile-displayphoto-shrink_400_400/0/1632371381836?e=1680739200&v=beta&t=7ceGf1vFrOGMS0gTDV6bhJDpoxKp9tIjMQRIz_7yWTw"
          name="Sonu Alex Antony"
          reg_no="21BCE10221"
          linkedIn="https://www.linkedin.com/in/sonu-antony-b737b821b"
          gitHub="https://github.com/SonuAlex"
          gmail="https://mail.google.com/mail/?view=cm&to=sonu.antony2021@vitbhopal.ac.in"
        />
        <Profile
          pfp="https://i.pinimg.com/564x/1c/b4/1d/1cb41dab341635e803f2fa202b034303.jpg"
          name="Akash Sinha"
          reg_no="21BCE10271"
          linkedIn="https://www.linkedin.com/in/akash-sinha-7512a6252"
          gitHub="https://github.com/Aka-ash"
          gmail="https://mail.google.com/mail/?view=cm&to=akash.sinha0720@gmail.com"
        />
      </div>
    </div>
  );
}

export default About;
