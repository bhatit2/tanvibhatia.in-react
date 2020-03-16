import React from 'react';

const Card = ({ blog }) => {
    const { link, imgSrc, title } = blog;
    const cardStyles = {
        backgroundImage: `url(${imgSrc})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        padding: 15 + 'px',
        borderRadius: 10 + 'px',
        margin: 10 + 'px',
        minHeight : 20 + 'rem'
    }
    return (
        <a href={link} target="_blank">
            <div className="card" style={cardStyles}></div>
        </a>
    )
}

export default Card