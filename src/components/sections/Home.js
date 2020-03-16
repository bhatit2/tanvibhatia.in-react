import React, { Component } from 'react';
import Typed from 'react-typed';
import '../../styles/components/home.scss';

const Home = ({ name, headline }) => {
    return (
        <section id="home">
            <div className="row">
                <div className="col-10 image-container"></div>
            </div>
            <div className="row">
                <div className="col-11">
                    <h2>hello</h2>
                    <h3>I'm {name.firstName},</h3>
                    <div className="main-intro">
                        <Typed
                            strings={headline.options}
                            typeSpeed={80}
                            backSpeed={30}
                            backDelay={1100}
                            loop
                            autoInsertCss
                        >
                        <span className="element"></span>
                        </Typed>
                    </div>
                </div>
            </div>

        </section>
    )
}

export default Home;