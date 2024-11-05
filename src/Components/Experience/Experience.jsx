import React from 'react';
import "./Experience.scss";
import Althi from "../../Assets/Company/Althi.png";
import Tcare from "../../Assets/Company/Tcare.png"

const Experience = () => {

    const company = [
        {
            id: 1,
            companyName: "Althi Solutions Private Limited",
            duration: "Feb 2023 - Present",
            role: "Software Engineer at Althi Solutions",
            img: Althi,
            description: "Worked extensively with the Spring Boot and  MERN stack, gaining hands-on experience in backend development and application design. Additionally, I have experience with Google Cloud Platform (GCP), enhancing my knowledge of cloud services.Contributed to innovative projects that supported organizational growth, leveraging full stack web development skills.Enhanced technical proficiency in deploying and managing applications on GCP, integrating cloud services with backend systems.Demonstrated adaptability and problem- solving abilities by successfully navigating complex development challenges in a fast - paced environment"
        },
        {
            id: 2,
            companyName: "Tcare Inc",
            duration: "March 2022  - January 2023",
            role: "Intern at Tcare",
            img: Tcare,
            description: "Conducted manual web scraping and data analysis, gathering over 4,000 data points and transforming them into actionable insights using Google Sheets. Developed comprehensive reports that supported key business decisions by providing data- driven recommendations.Collaborated with cross - functional teams, demonstrating effective communication and teamwork to align insights with business goals.Showcased problem - solving abilities and adaptability by quickly addressing complex business inquiries and managing tasks efficiently in a fast - paced environment."
        }
    ]
    return (
        <div className='experience-container' id='experience'>
            <div className='expereince-content'>

                <div className='experience-title text-center'>
                    My <span className='font-bold experience-t '> Experience</span>
                </div>

                <div className='experience-content mt-5'>

                    {
                        company.map((company) => (
                            <div className='company-list p-4 cursor-pointer'>
                                <div className='company-header'>
                                    <div className='logo-role'>
                                        <div className='company-logo'>
                                            <img className='companyimg' src={company.img} alt='company -img' />
                                        </div>


                                        <span className='company-name'>{company.role}</span>
                                    </div>
                                    <span className='duration'>{company.duration}</span>
                                </div>
                                <div className='company-description mt-2'>
                                    <p>{company.description}</p>
                                </div>
                            </div>


                        ))
                    }

                </div>


            </div>
        </div >
    )
}

export default Experience