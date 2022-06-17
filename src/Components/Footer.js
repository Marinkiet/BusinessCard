import React from "react";
import TwitterIcon from "../images/Twitter.png";
import FacebooKIcon from "../images/Facebook.png";
import InstagramIcon from "../images/Instagram.png";
import GithubIcon from "../images/GitHub.png";
export default function Footer(){
    return(
           <footer>
            <img src={TwitterIcon} alt="twitter-icon"></img>
            <img src={FacebooKIcon} alt="facebook-icon"></img>
            <img src={InstagramIcon} alt="instagram-icon"></img>
            <a href="https://github.com/Marinkiet"><img src={GithubIcon} alt="github-icon"></img></a>
           </footer>
    )
}