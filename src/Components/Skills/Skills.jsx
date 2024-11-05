import { faReact } from '@fortawesome/free-brands-svg-icons';
import React from 'react';
import "./Skills.scss";
import Javascript from "../../Assets/Skills/javascript.png";
import Reactjs from "../../Assets/Skills/reactjs.png";
import Sass from "../../Assets/Skills/sass.png";
import Nodejs from "../../Assets/Skills/nodejs.png";
import Expressjs from "../../Assets/Skills/expressjs.png";
import Git from "../../Assets/Skills/git.png";
import Java from "../../Assets/Skills/java.png";
import Springboot from "../../Assets/Skills/springboot.png";
import Socketio from "../../Assets/Skills/socketio.png";
import Gcp from "../../Assets/Skills/gcp.png";
import Firebase from "../../Assets/Skills/firebase.png";
import Figma from "../../Assets/Skills/figma.png";


const Skills = () => {
    const skills = [
        {
            id: 1,
            label: "Javascript",
            img: Javascript
        }
        , {
            id: 2,
            label: "Reactjs",
            img: Reactjs
        },
        {
            id: 3,
            label: "Sass",
            img: Sass
        },
        {
            id: 4,
            label: "nodeJs",
            img: Nodejs
        },
        {
            id: 5,
            label: "Expressjs",
            img: Expressjs
        },
        {
            id: 6,
            label: "Git",
            img: Git
        },
        {
            id: 7,
            label: "Java",
            img: Java
        },
        {
            id: 8,
            label: "Springboot",
            img: Springboot
        },
        {
            id: 9,
            label: "Socket.io",
            img: Socketio
        },
        {
            id: 10,
            label: "GCP",
            img: Gcp
        },
        {
            id: 11,
            label: "Firebase",
            img: Firebase
        },
        {
            id: 12,
            label: "Figma",
            img: Figma
        }
    ]
    return (
        <div className='skills-container'>
            <div className='skills-content'>

                <div className='myskills-title text-center'>
                    My   <span className='font-bold skills-t '> Skills</span>
                </div>

                <div className='skills-list mt-4'>
                    {
                        skills.map((item) =>
                            <div className='list-item  ' key={item.id}>
                                <img src={item.img} alt={item.label} className='skill-img' />
                                <span className='font-bold label'>{item.label}</span>
                            </div>)
                    }
                </div>

            </div>
        </div>
    )
}

export default Skills