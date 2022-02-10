import React from 'react';

export default function Content() {
    return (
        <div>
            <div className="content">
                <h1>Signe K. Petersen</h1>
                <h3>Frontend developer</h3>
                <a href="https://signepetersen.dk/" target="_blank">signepetersen.dk</a>
            </div>
            <div className="buttons">
                <a className="button-left" href="mailto:sign4080@gmail.com" target="_blank"><i className="fa fa-envelope-o" aria-hidden="true"></i>Email</a>
                <a className="button-right" href="https://www.linkedin.com/in/signe-petersen-0b7452162/" target="_blank"><i className="fab fa-linkedin"></i> LinkedIn</a>
            </div>
            <div className="main-text">
                <h3>About: </h3>
                <p>Name is Signe Petersen and i am 27 years old. I study web development at Cph Business, and i really like to code, especially when it works :)</p>
                <h3>Interests:</h3>
                <p>Food expert. Music scholar. Reader. Internet fanatic. Bacon buff. Entrepreneur. Travel geek. Pop culture ninja. Coffee fanatic.</p>
            </div>
        </div>
    )
}
