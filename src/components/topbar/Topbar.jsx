import React from 'react'
import "./topbar.scss";
import { Mail } from "@material-ui/icons";
import PhoneIcon from '@material-ui/icons/Phone';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import { Link } from 'react-router-dom'

const Topbar = ({ menuOpen, setMenuOpen }) => {
    return (
        <div className={"topbar " + (menuOpen && "active")} id="topbar">
            <div className="wrapper">
                <div className="left">
                    <a href="#intro" className="logo">Jae Choi</a>
                    <div className="itemContainer">
                        <PhoneIcon className="icon" />
                        <span>0420603110</span>
                    </div>
                    <div className="itemContainer">
                        <Mail className="icon" />
                        <span>ghjgjh0107@gmail.com</span>
                    </div>
                    <div className="itemContainer" id="linkedin">
                            <Link style={{ color: '#16181b' }} to={{ pathname: "https://www.linkedin.com/in/jae-choi-11422a185/" }} target="_blank" >
                                <LinkedInIcon />
                            </Link>
                    </div>
                    <div className="itemContainer" id="github">
                        <Link style={{ color: '#16181b' }} to={{ pathname: "https://github.com/jae0107" }} target="_blank" >
                            <GitHubIcon className="icon" />
                        </Link>
                    </div>
                    <div className="itemContainer" id="resume">
                        <Link style={{ color: '#16181b' }} to="/assets/Jae_Resume.docx" target="_blank" download>Resume (CV)</Link>
                    </div>
                </div>
                <div className="right">
                    <div className="hamburger" onClick={()=>setMenuOpen(!menuOpen)}>
                        <span className="line1"></span>
                        <span className="line2"></span>
                        <span className="line3"></span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Topbar
