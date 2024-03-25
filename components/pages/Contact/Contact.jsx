import { useState } from "react";
import { TextField, dividerClasses } from "@mui/material";
import { Button, MenuItem } from "@mui/material";
import Stack from "@mui/material/Stack";
import "./Contact.css";

export default function Contact() {
    return (
        <>
            <div>
                <h1>Contact Info</h1>
                <p>
                    <a href="cnastro@icloud.com">Send Email</a>
                </p>
            </div>
        </>
    )
}