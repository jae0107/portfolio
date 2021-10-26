import React from 'react'
import "./menu.scss";

const Menu = ({ menuOpen, setMenuOpen }) => {
    return (
        <div className={"menu "+(menuOpen && "active")} id="menu">
            <ul>
                <li id="intro" className="first" onClick={()=>setMenuOpen(false)}>
                    <a href="#intro">Home</a>
                </li>
                <li id="skills" onClick={()=>setMenuOpen(false)}>
                    <a href="#skills">Skills</a>
                </li>
                <li id="portfolio" onClick={()=>setMenuOpen(false)}>
                    <a href="#portfolio">Portfolio</a>
                </li>
                <li id="projects" onClick={()=>setMenuOpen(false)}>
                    <a href="#projects">Projects</a>
                </li>
                <li id="contact" onClick={()=>setMenuOpen(false)}>
                    <a href="#contact">Contact</a>
                </li>
            </ul>
        </div>
    )
}

export default Menu
