import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import PdfResume from "../../../assets/ResumeChrisNastro.pdf";
import "./Resume.css";

export default function Resume() {
  return (
    <Box>
      <div>
        <a
          href={PdfResume}
          download="Resume Chris Nastro"
          target="_blank"
          style={{
            display: "flex",
            justifyContent: "center",
            paddingTop: "25px",
          }}
          rel="noreferrer"
        >
          <Button id="resume-button" className="pop-on-hover">
            Click Here to Download Resume
          </Button>
        </a>
        <h2
          style={{
            display: "flex",
            justifyContent: "center",
            textDecoration: "underline",
          }}
        >
          Front-end Proficiencies
        </h2>
        <p
          style={{
            display: "flex",
            justifyContent: "center",
            paddingRight: "100px",
          }}
        >
          - HTML
          <br></br>- CSS
          <br></br>- JavaScript
          <br></br>- JQuery
          <br></br>- Responsive Design
          <br></br>- React
          <br></br>- Bootstrap
          <br></br>- Material UI
        </p>
        <h2
          style={{
            display: "flex",
            justifyContent: "center",
            textDecoration: "underline",
          }}
        >
          Back-end Proficiencies
        </h2>
        <p
          style={{
            display: "flex",
            justifyContent: "center",
            paddingRight: "80px",
          }}
        >
          - HTML
          <br></br>- API's
          <br></br>- Node
          <br></br>- Express
          <br></br>- MySQL, Sequelize
          <br></br>- MongoDB, Mongoose
          <br></br>- Bootstrap
          <br></br>- REST
          <br></br>- GraphQL
        </p>
      </div>
    </Box>
  )
}