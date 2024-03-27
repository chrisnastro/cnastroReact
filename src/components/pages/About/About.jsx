import "./About.css";
import CardMedia from "@mui/material/CardMedia";
import hero from "../../../images/hero.jpeg";


export default function About() {
    return (
        <>
            <div style={{ width: "70%", margin: "0 auto" }}>
                <h1 id="about-me-title">About</h1>
                <div className="image-container">
                    <CardMedia
                        component="img"
                        className="color-img"
                        style={{
                            height: "auto",
                            width: "50%",
                            margin: "0 auto",
                            paddingTop: "20px",
                            borderRadius: "50px"
                        }}
                        image={hero}
                        alt="About Me" />
                </div>
                <p id="p-about">
                    Chris Nastro is a full stack web developer with a diverse background in sales, pro-hockey operations, and the service industry. Enthusiastic, efficient, hardworking and experienced individual with a versatile skill set. An innovative problem solver with a passion for teamwork complimented by several years of experience in sales, event planning, and media interaction performing and managing across all levels.
                </p>
            </div>
            <p id="p-about">
                In his free time Chris enjoys watching hockey, playing video games, and spending time with his family.
            </p>
        </>
    )
}