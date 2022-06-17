import React from "react";
import ProfileImg from "../images/pp.PNG"
import EmailIcon from "../images/Mail.png"
export default function Info(){
    return(
        <div className="info">
            <img className="profile--img" src={ProfileImg}alt="pp"></img>
            <h2>Marinkie Thupi</h2>
            <p>Frontend Developer</p>
            <a href="https://github.com/Marinkiet"><p>marinkiet.github.io</p></a>
            <div className="info--btns">
                <button><img className="email--icon" src={EmailIcon} alt="emailicon"></img>tmarinkie12@gmail.com</button>
            </div>
        </div>
    )
}