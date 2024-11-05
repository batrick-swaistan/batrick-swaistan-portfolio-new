import React from 'react';
import "./Hero.scss";
import Heroimg from "../../Assets/Banner/Banner.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedinIn, faThreads, faXTwitter } from '@fortawesome/free-brands-svg-icons';


const Hero = () => {
    return (
        <div className='hero-container'>
            <div className='hero-content flex align-items-center gap-4'>
                <div className='hero-text flex-1'>

                    <div className='hero-title-content'>
                        <div className='intro'>
                            Hello I'am <span className='font-bold'>Batrick Swaistan.</span>
                        </div>
                        <div className='s-e'>
                            Software <span className='text-outline'>Engineer</span>
                        </div>
                        <div className='location'>
                            Living In <span className='font-bold'>Kanyakumari</span>
                        </div>

                    </div>


                    <div className='profile-desc'>
                        <p>
                            I am a dedicated software engineer with a strong passion for creating innovative, high-quality solutions. Driven by a commitment to excellence, I focus on building efficient, user-centered applications that make a real impact. I thrive on tackling complex challenges and continuously refining my skills to deliver robust and scalable software that meets the evolving needs of users and organizations alike.
                        </p>

                    </div>

                    <div className='social-icons flex align-items-row gap-2'>

                        <span className='s-i'>
                            <FontAwesomeIcon icon={faLinkedinIn} />
                        </span>
                        <span className='s-i'>
                            <FontAwesomeIcon icon={faGithub} />
                        </span>
                        <span className='s-i'>
                            <FontAwesomeIcon icon={faXTwitter} />
                        </span>
                        <span className='s-i'>
                            <FontAwesomeIcon icon={faThreads} />
                        </span>

                    </div>

                </div>
                <div className='hero-img flex-1'>
                    <img className='hero' src={Heroimg} alt='her-image' />

                </div>

            </div>
        </div>
    )
}

export default Hero