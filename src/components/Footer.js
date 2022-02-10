import React from 'react';
import Facebook from '../image/facebook.svg'
import Twitter from '../image/twitter.svg'
import Instagram from '../image/instagram.svg'
import Github from '../image/github.svg'



export default function Footer() {
    return (
        <div className="footer-content">
            <a href="https://twitter.com/" target="_blank"><img src={Twitter}></img></a>
            <a href="https://www.facebook.com/" target="_blank"><img src={Facebook}></img></a>
            <a href="https://www.instagram.com/" target="_blank"><img src={Instagram}></img></a>
            <a href="https://github.com/signekp" target="_blank"><img src={Github}></img></a>
        </div>
    )
}

