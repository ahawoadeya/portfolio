import React from 'react'
import { IoDownloadOutline } from 'react-icons/io5'
import CVFile from '../../assets/pdf/AmbroseAhawoResume.pdf'
import AboutImg from '../../assets/images/PROFILE.jpg'

const About = () => {
    return (
        <section className="about section" id="about">
            <h2 className="section_title">About Me</h2>
            <span className="section_subtitle">My Introduction</span>

            <div className="about_container container grid">
                <img src={ AboutImg } alt="" className="about_img"/>

                <div className="about_data">
                    <p style={{textAlign: "left"}} className="about_description">I have experience in supporting and fixing bugs in existing projects, correcting and optimizing other developers' code.
                                                        My working process includes a clear understanding of business details and implementing them into code.
                                                        I believe in 100% client satisfaction and long-term relation.
                                                        Make me part of your team, and let's create the next big thing...
                    </p>
                        
                    <div className="about_info">
                        <div>
                            <span className="about_info-title">03+</span>
                            <span className="about_info-name">Years <br /> experience</span>
                        </div>
                        <div>
                            <span className="about_info-title">05+</span>
                            <span className="about_info-name">Completed <br /> projects</span>
                        </div>
                        <div>
                            <span className="about_info-title">04+</span>
                            <span className="about_info-name">Companies <br /> worked</span>
                        </div>
                    </div>

                    <div className="about_buttons">
                        <a download="" href={ CVFile } className="button button--flex">
                            Download CV <IoDownloadOutline className="button_icon"/>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About
