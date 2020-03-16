import React, { Component } from 'react';
import EasyPieChart from '../layout/EasyPieChart';
import '../../styles/components/skills.scss';

const Skills = ({ skills }) => {
    return (
        <section id="skills">
            <div className="card">
                <div className="card-body">
                    <h1 className="section-title">Skills</h1>
                    <div className="row skills-block">
                        <div className="col-1"></div>
                        <div className="col-10 col-md-12">
                            <div className="row">
                                {skills.map((skill, index) => {
                                    return (<EasyPieChart key={index} skill={skill} />)
                                })
                                }
                            </div>
                        </div>
                        <div className="col-1"></div>
                    </div>
                    <div className="download">
                        <label>Download my Resume</label>
                        <div className="anime-container"></div>
                        <a href="/src/assets/files/Tanvi_Bhatia_Resume.pdf" className="download-btn" download hidden></a>
                    </div>

                </div>
            </div>

        </section>)
}

export default Skills;