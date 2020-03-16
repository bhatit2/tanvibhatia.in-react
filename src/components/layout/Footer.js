import React from 'react';
import '../../styles/layout/footer.scss';

const Footer = () => {
    return (
        <footer>
        <div className="social-network-links">
            <ul>
                <li>
                    <a href="#" target="_blank">
                        <span className="sm-icon github"></span>
                    </a>
                </li>

                <li>
                    <a href="#" className="twitter" target="_blank">
                        <span className="sm-icon twitter"></span>
                    </a>
                </li>
                <li>
                    <a href="#" className="gmail" target="_blank">
                        <span className="sm-icon gmail"></span>

                    </a>
                </li>
                <li>
                    <a href="#" target="_blank">
                        <span className="sm-icon linkedin"></span>
                    </a>
                </li>
            </ul>
        </div>
        <div className="footer-text">
            Designed and Developed by Tanvi Bhatia © 2019
        </div>
    </footer>
    )
}

export default Footer;