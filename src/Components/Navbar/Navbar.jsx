import React from 'react';
import "./Navbar.scss";

const Navbar = () => {
    return (
        <div className='navbar-container'>
            <div className='navbar-content flex align-items-center justify-content-between'>

                <div className='batrick-logo'>
                    <span className='logo'>Batrick Swaistan</span>
                </div>

                <div className='menu-items flex align-items-center gap-5'>
                    <span className='item-list'>About Me</span>
                    <span className='item-list'>Skills</span>
                    <span className='item-list'>Project</span>
                    <span className='item-list'>Contact Me</span>
                </div>

                <div className='resume'>

                    <span className='download-button'>

                        Resume
                        <i className='pi pi-download ml-2' ></i>

                    </span>

                </div>

            </div>
        </div>
    )
}

export default Navbar