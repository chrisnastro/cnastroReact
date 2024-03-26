// import React from "react";
import Grid from "@mui/material/Grid";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import EmailIcon from "@mui/icons-material/Email";
import TwitterIcon from "@mui/icons-material/Twitter";
import "./Footer.css";

const Footer = () => {
  return (
    <div style={{ paddingTop: "30px", paddingBottom: "30px" }}>
      <Grid
        style={{ display: "flex", justifyContent: "center" }}
        container
        sx={{ color: "text.primary" }}
      >
        <Grid
          style={{ display: "flex", justifyContent: "space-evenly" }}
          item
          xs={4}
        >
          <LinkedInIcon
            id="icon"
            className="pop-on-hover"
            sx={{ fontSize: 50 }}
            onClick={() =>
            (window.location.href =
              "https://www.linkedin.com/in/chrisnastro/")
            }
          />
          <GitHubIcon
            id="icon"
            className="pop-on-hover"
            sx={{ fontSize: 50 }}
            onClick={() =>
              (window.location.href = "https://github.com/chrisnastro")
            }
          />
          <TwitterIcon
            id="icon"
            className="pop-on-hover"
            sx={{ fontSize: 50 }}
            onClick={() =>
              (window.location.href = "https://twitter.com/chrisnastro")
            }
          />
          <EmailIcon
            id="icon"
            className="pop-on-hover"
            sx={{ fontSize: 50 }}
            onClick={() =>
              (window.location.href = "mailto:cnastro@icloud.com")
            }
          />
        </Grid>
      </Grid>
    </div>
  );
};

// Export
export default Footer;