import React from "react";
import './Footer.css'
import facebook from '../icons/facebook-icon.png'
import twitter from '../icons/twitter-icon.png'
import insta from '../icons/insta-icon.png'
import git from '../icons/github-icon.png'

export default function Footer() {
    return (
        <footer className="footer">
            <img src={twitter} className='icon'/>
            <img src={facebook} className='icon'/>
            <img src={insta} className='icon'/>
            <img src={git} className='icon'/>
        </footer>
    )
}