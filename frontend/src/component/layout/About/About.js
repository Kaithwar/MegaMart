import React from "react";
import "./aboutSection.css";
import { Button, Typography, Avatar } from "@material-ui/core";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from "@material-ui/icons/Instagram";
import GithubIcon from "@material-ui/icons/GitHub";
const About = () => {
  const visitGithub = () => {
    window.location = "https://github.com/Kaithwar";
  };
  return (
    <div className="aboutSection">
      <div></div>
      <div className="aboutSectionGradient"></div>
      <div className="aboutSectionContainer">
        <Typography component="h1">About Us</Typography>

        <div>
          <div>
            <Avatar
              style={{ width: "10vmax", height: "10vmax", margin: "2vmax 0" }}
              src="/arpit.jpg"
              alt="Founder"
            />
            <Typography>Arpit Kaithwar</Typography>
            <Button onClick={visitGithub} color="primary">
              <GithubIcon/>
            </Button>
            <span>
              This is a Full MERN Stack Project made by me which is based on Ecomerece Website.
            </span>
          </div>
          <div className="aboutSectionContainer2">
            <Typography component="h2">Connect With Me</Typography>
            <a
              href="http://www.linkedin.com/in/arpit-kaithwar-ak83035"
              target="blank"
            >
              <LinkedInIcon/>
            </a>

            <a href="https://www.instagram.com/arpit_kaithwar_/" target="blank">
              <InstagramIcon className="instagramSvgIcon" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
