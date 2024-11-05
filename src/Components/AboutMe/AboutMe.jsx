import React from 'react';
import "./AboutMe.scss";
import Bannerimg from "../../Assets/About/About.png"

const AboutMe = () => {
    return (
        <div className='aboutme-container'>
            <div className='aboutme-content'>

                <div className='banner-img '>
                    <img src={Bannerimg} alt='banner' className='banner' />

                </div>
                <div className='aboutme-text flex-1'>
                    <div className='aboutme-title '>
                        About   <span className='font-bold skills-t '> Me</span>
                    </div>

                    <div className='aboutme-desc'>
                        <p className='about-me-desc-text'>

                            I am a dedicated software engineer with a passion for crafting efficient, user-centered applications through a seamless blend of UI and API development. At Althi Solutions, I am responsible for designing and implementing both frontend and backend components, focusing on creating intuitive interfaces that prioritize user experience while ensuring backend systems are scalable, secure, and reliable. My role has allowed me to gain in-depth experience in building full-stack applications, from data handling and API integration to delivering responsive and visually appealing interfaces. I thrive in collaborative environments where cross-functional teamwork drives innovation and efficiency
                        </p>
                        <p className='about-me-desc-text'>
                            In addition to my development work, I leverage cloud platforms like Google Cloud Platform (GCP) to streamline application deployment and performance. My experience with GCP includes deploying applications on App Engine, managing services with Cloud Run, and optimizing data storage with Cloud SQL. This technical foundation allows me to build applications that not only perform well but are also resilient and scalable. Known for my adaptability and problem-solving skills, I approach each project with a commitment to learning and delivering impactful solutions that align with current technological trends and business needs, particularly in fast-paced, evolving environments.</p>

                    </div>

                </div>

            </div>
        </div>
    )
}

export default AboutMe