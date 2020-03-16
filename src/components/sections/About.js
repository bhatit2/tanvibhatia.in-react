import React, { Component } from 'react';
import '../../styles/components/about.scss';

const About = ({name, about}) => {
        return (
            <section id="about">
                <div className="card">
                    <div className="card-body">
                        <div className="row">
                            <div className="col-md-1 col-12"></div>
                            <div className="col-md-3 col-12">
                                <div className="myPic"></div>
                            </div>
                            <div className="col-md-6 col-12">
                                <h1 className="section-title">About me</h1>
                                <p className="desc">
                                    <i>Hello, I am {name.firstName}...</i>
                                    I am a <strong>{about.role}</strong> living in <strong>{about.city}</strong>, 
                                    <strong>{about.country}</strong>. 
                                    I currently work as a <strong>{about.designation}</strong> in 
                                    <strong>{about.company}</strong>. {about.intro}
                        </p>
                            </div>
                        </div>
                        <div className="separator"></div>
                        <div className="row">
                            <div className="col-md-4 col-12">
                                <div className="img-card">
                                    <div className="pic experience"></div>
                                    <label>7</label>
                                    <div className="subtext">Years of experience</div>
                                </div>
                            </div>
                            <div className="col-md-4 col-12">
                                <div className="img-card">
                                    <div className="pic loc"></div>
                                    <label>1,50,000</label>
                                    <div className="subtext">Lines of code</div>
                                </div>
                            </div>
                            <div className="col-md-4 col-12">
                                <div className="img-card">
                                    <div className="pic project"></div>
                                    <label>12</label>
                                    <div className="subtext">Projects completed</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }

export default About;