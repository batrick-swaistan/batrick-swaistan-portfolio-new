import React from 'react';
import "./Projects.scss";
import BookNook from "../../Assets/Projects/BookNook.png";
import Lumina from "../../Assets/Projects/Lumina.png";
import Franky from "../../Assets/Projects/Franky.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShare } from '@fortawesome/free-solid-svg-icons';

const Projects = () => {

    return (
        <div className='project-container'>
            <div className='project-container'>

                <div className='project-title text-center'>
                    My <span className='font-bold project-t '> projects</span>
                </div>

                <div className='projects mt-6'>

                    <div className='lumina  w-12'>
                        <div className='lumina-img w-5'>
                            <img src={Lumina} alt='lumina-img' className='lumina' />
                        </div>

                        <div className='lumina-content w-5'>
                            <span className='s-no font-bold'>01</span>
                            <div className='lumina-title'>
                                <span className='font-bold lumina-name'>Lumina - Collaborative Blogging Platform</span>
                            </div>

                            <div className='lumina-description'>
                                <p>Lumina is a dynamic blogging platform designed to empower users to create, share, and engage with content in a collaborative environment. Built to support a wide range of content creators, from bloggers to journalists, Lumina allows users to publish and manage their posts while fostering interactions with other readers and writers. By combining a rich feature set with a responsive and intuitive design, Lumina aims to be an inclusive platform for sharing ideas and building community.</p>
                            </div>

                            <span className='share-icon cursor-pointer'>
                                <FontAwesomeIcon icon={faShare} />
                            </span>
                        </div>

                    </div>

                    <div className='booknook mt-5 w-12'>
                        <div className='booknook-content w-5'>
                            <span className='s-no font-bold'>02</span>

                            <div className='booknook-title'>
                                <span className=' font-boldbooknook-name'>BookNook - Digital Library Platform</span>
                            </div>

                            <div className='booknook-description'>
                                <p> BookNook is a digital library platform that brings an extensive collection of e-books and audiobooks to users in one convenient application. Designed to offer a smooth reading and listening experience, BookNook allows users to browse, purchase, and enjoy a wide variety of titles from different genres and authors. Whether users prefer fiction, non-fiction, educational content, or self-help, BookNook aims to make quality content accessible and engaging.</p>
                            </div>
                        </div>

                        <div className='booknook-img w-5'>
                            <img src={BookNook} alt='booknook-img' />
                        </div>
                    </div>

                    <div className='franky mt-5 w-12'>
                        <div className='franky-img w-5'>
                            <img src={Franky} alt='franky-img' />
                        </div>

                        <div className='franky-content w-5'>
                            <span className='s-no font-bold'>03</span>

                            <div className='franky-title'>
                                <span className='franky-name'>Franky</span>
                            </div>

                            <div className='franky-description'>
                                <p>Franky is an engaging crash course crafted to teach the fundamentals of UX design through hands-on, practical projects in Figma. Tailored for beginners, Franky covers everything from design basics to advanced techniques, empowering learners to create visually appealing, user-centered designs. With step-by-step modules, practical examples, and real-world projects, Franky is designed to make UX design accessible, interactive, and immediately applicable.</p>
                            </div>
                            <span className='share-icon cursor-pointer'>
                                <FontAwesomeIcon icon={faShare} />
                            </span>
                        </div>

                    </div>

                </div>

            </div>

        </div>
    )
}

export default Projects