import React, { Component } from 'react';
import '../../styles/layout/header.scss';

const Header = ({brand}) => {
        return (
            <div>
                <nav className="navbar-b navbar-trans navbar-expand-md sticky-top" id="mainNav">
                    <a className="navbar-brand" href="#">
                        {brand}
                        <span>.in</span>
                    </a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <a className="nav-link about js-scroll" href="#about">About</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link skills js-scroll" href="#skills">Skills</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link blog js-scroll" href="#blog">Blog</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link contact js-scroll" href="#contact">Contact</a>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        )
}

export default Header;