import React from "react";
import image from "../images/Sokka.png"
import "./Info.css"

export default function() {
    return (
        <div className="info">
            <img src={image} className='info--image'/>
            <p className="info--name">Sahil Yadav</p>
            <p className="info--pos">Web Developer</p>
            <div className="info--buttons">
                <button className="button--email">Email</button>
                <button className="button--linkedin">LinkedIn</button>
            </div>
        </div>
    )
}