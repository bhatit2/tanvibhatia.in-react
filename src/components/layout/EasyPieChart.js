import React, {Component} from 'react';
import '../../styles/components/skills.scss';

const EasyPieChart = ({skill}) => {
    console.log(skill);
    return (
        <div className="col-lg-2 col-md-3 col-12 progress-circle">
            <div className="percentage">{skill.percentage}%</div>
                <svg viewBox="0 0 36 36" className="circular-chart">
                    <path className="circle" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831
                    a 15.9155 15.9155 0 0 1 0 -31.831" strokeDasharray={skill.stroke} />
                </svg>
                <label>{skill.name}</label>
            </div>

    )
}

export default EasyPieChart;