import React from 'react';
import "./ConnectMe.scss";

const ConnectMe = () => {
    return (
        <div className='connectme-conatiner' id='connectme'>
            <div className='connectme-content'>
                <div className='header font-bold'>
                    Let's <span className='outline-text'>talk</span> for
                    Something special
                </div>

                <p className='description'>
                    I seek to push the limits of creativity to create high-engaging, user-friendly, and memorable interactive experiences.
                </p>

                <div className='email-phone'>

                    <span className='font-bold flex align-items-center justify-content-center'><i className='flex align-items-center justify-content-center mr-3 pi pi-envelope
'/> swaistan.b@gmail.com</span>


                </div>
            </div>
        </div>
    )
}

export default ConnectMe