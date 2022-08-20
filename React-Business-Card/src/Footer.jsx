import React from "react";
import Twitter_Icon from "./images/Twitter_Icon.svg"
import Facebook_Icon from "./images/Facebook_Icon.svg"
import Instagram_Icon from "./images/Instagram_Icon.svg"
import GitHub_Icon from "./images/GitHub_Icon.svg"

export default function Footer() {
    return (
        <div className="icons">
            <img src={Twitter_Icon} alt="" />
            <img src={Facebook_Icon} alt="" />
            <img src={Instagram_Icon} alt="" />
            <img src={GitHub_Icon} alt="" />
        </div>
    )
}