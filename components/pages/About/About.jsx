import React from "react";
import "./About.css";
import CardMedia from "@mui/material/CardMedia";

export default function About() {
    return(
    <>
    <div className="image-container">
        <CardMedia
        component="img"
        className="color-img"
        style={{
            height: "auto",
            width: "50%",
            margin: "0 auto",
            paddingTop: "20px",
        }}
        image={hero}
        alt="About Me" />
        </div>
        
        <div style={{ width: "70%", margin: "0 auto" }}>
            <h1 id="about-me-title">About Me</h1>
            <p id="p-about">
                hello im chris
            </p>
            <p id="p-about">
                hello im chris 2nd paragraph
            </p>
            <p id="p-about">
                hello im chris 3rd paragraph
            </p>
            </div>
        </>
    )
}