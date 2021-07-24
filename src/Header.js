import React from 'react';
import './Header.scss';

function Header() {
    return (
        <header>
            <div className="square">

            </div>
            <div className="header__nav">
                <div><a href="#home">Home</a></div>
                <div><a href="#about">About</a></div>
                <div><a href="#projects">Projects</a></div>
                <div><a href="#contact">Contact</a></div>
            </div>
        </header>
    )
}

export default Header
