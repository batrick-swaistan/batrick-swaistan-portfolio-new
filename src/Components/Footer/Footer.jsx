import React from 'react';
import "./Footer.scss";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact, faSass } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
    return (
        <div className='footer-container' id='footer'>
            <div className='footer-content'>

                <div className='batrick-logo'>
                    <span className='logo'>Batrick Swaistan</span>
                </div>

                <div className='footer-side-content'>

                    <span>Made with</span>
                    <span><FontAwesomeIcon icon={faReact} /></span>
                    <span><FontAwesomeIcon icon={faSass} /></span>
                    <span><i className='pi pi-prime' /></span>


                </div>


            </div>
        </div>
    )
}

export default Footer