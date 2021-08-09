import React from 'react'
import "./topbar.scss";
import { Person } from "@material-ui/icons";

const Topbar = () => {
    return (
        <div className="topbar">
            <div className="wrapper">
                <div className="left">
                    <a href="#intro" className="logo">genius.</a>
                </div>
                <div className="right">
                <div className="itemContainer">
                    <Person className="icon" />
                    <span>0420603110</span>
                </div>
                </div>
            </div>
        </div>
    )
}

export default Topbar
