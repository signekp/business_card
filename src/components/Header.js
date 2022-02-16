import React from 'react';
import Portrait from "../image/image-portrait.jpeg"

export default function Content() {
    return (
        <div>
            <img className="image" src={Portrait} alt="signe"></img>
            <div className="content">
                <h1>Signe K. Petersen</h1>
                <h3>Frontend developer</h3>
                <a href="https://signepetersen.dk/" target="_blank" rel="noreferrer">signepetersen.dk</a>
            </div>
            <div className="buttons">
                <a className="button-left" href="mailto:sign4080@gmail.com" target="_blank" rel="noreferrer"><i className="fa fa-envelope-o" aria-hidden="true"></i>Email</a>
                <a className="button-right" href="https://www.linkedin.com/in/signe-petersen-0b7452162/" target="_blank" rel="noreferrer"><i className="fab fa-linkedin"></i> LinkedIn</a>
            </div>
        </div>
    )
}
