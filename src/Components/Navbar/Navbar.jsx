import React from 'react';
import "./Navbar.scss";

const Navbar = () => {

    const handleScrollTo = (id) => {
        const headerOffset = 80;
        const element = document.getElementById(id);
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.scrollY - headerOffset;

        window.scrollTo({
            top: offsetPosition,
            behavior: "smooth"
        });
    }


    return (
        <div className='navbar-container'>
            <div className='navbar-content flex align-items-center justify-content-between'>

                <div className='batrick-logo'>
                    <span className='logo' onClick={() => { handleScrollTo('hero') }}>Batrick Swaistan</span>
                </div>

                <div className='menu-items flex align-items-center gap-5'>


                    <span className='item-list' onClick={() => { handleScrollTo('aboutme') }}>About Me</span>

                    <span className='item-list' onClick={() => { handleScrollTo('skills') }}>Skills</span>
                    <span className='item-list' onClick={() => { handleScrollTo('projects') }}>Project</span>
                    <span className='item-list' onClick={() => { handleScrollTo('connectme') }}>Contact Me</span>
                </div>


                <div className='resume'>
                    <a href='/Batrick-Swaistan.pdf' target='_blank'>
                        <span className='download-button'>
                            Resume
                            <i className='pi pi-download ml-2' ></i>
                        </span>

                    </a>


                </div>

            </div>
        </div>
    )
}

export default Navbar