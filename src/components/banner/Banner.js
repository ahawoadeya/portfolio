import React from 'react'
import { BiSend } from 'react-icons/bi'
import { CgMouse } from 'react-icons/cg'
import { AiOutlineArrowDown } from 'react-icons/ai'
import DisplayPicture from '../../assets/images/displayImage.png'

const Banner = () => {
    return (
            <section className="home section" id="home">
                <div className="home_container container grid">
                    <div className="home_content grid">
                        <div className="home_social">
                            <a href="/" className="home_social-icon">
                                <i className="uil uit-house-user"></i>
                            </a>
                            <a href="/" className="home_social-icon">
                                <i className="uil uit-house-user"></i>
                            </a>
                            <a href="/" className="home_social-icon">
                                <i className="uil uit-house-user"></i>
                            </a>
                        </div>

                        <div className="home_img">
                            <svg className="home_blob" viewBox="0 0 200 187" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                                <mask id="mask0" mask-type="alpha">
                                    <path d="M190.312 36.4879C206.582 62.1187 201.309 102.826 182.328 134.186C163.346 165.547 
                                    130.807 187.559 100.226 186.353C69.6454 185.297 41.0228 161.023 21.7403 129.362C2.45775 
                                    97.8511 -7.48481 59.1033 6.67581 34.5279C20.9871 10.1032 59.7028 -0.149132 97.9666 
                                    0.00163737C136.23 0.303176 174.193 10.857 190.312 36.4879Z"/>
                                </mask>
                                <g mask="url(#mask0)">
                                    <path d="M190.312 36.4879C206.582 62.1187 201.309 102.826 182.328 134.186C163.346 
                                    165.547 130.807 187.559 100.226 186.353C69.6454 185.297 41.0228 161.023 21.7403 
                                    129.362C2.45775 97.8511 -7.48481 59.1033 6.67581 34.5279C20.9871 10.1032 59.7028 
                                    -0.149132 97.9666 0.00163737C136.23 0.303176 174.193 10.857 190.312 36.4879Z"/>
                                    <image className="home_blob-img" x="12" y="18" href={DisplayPicture}/>
                                </g>
                            </svg>
                        </div>

                        <div className="home_data">
                            <h1 className="home_title">Hi, I'm Ambrose</h1>
                            <h3 className="home_subtitle">Python - Django Backend Developer</h3>
                            <p className="home_description">
                                Are you looking for a Great Website functionality, Online Store, or Custom Web Solution?
                                I'm a freelance full stack developer with experience in backend development.
                                Specifically, implementing rest api architecture with django-rest-framework.
                            </p>
                            <a href="#contact" className="button button--flex">
                                Contact Me <BiSend className="button_icon"/>
                            </a>
                        </div>
                    </div>

                    <div className="home_scroll">
                        <a href="#about" className="home_scroll-button button--flex">
                            <CgMouse className="home_scroll-mouse"/>
                            <span className="home_scroll-name">Scroll down</span>
                            <AiOutlineArrowDown className="home_scroll-arrow"/>
                        </a>
                    </div>
                </div>
            </section>
    )
}

export default Banner
