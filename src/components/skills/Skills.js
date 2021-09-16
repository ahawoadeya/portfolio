import React, { useState } from 'react'
import Skill from './Skill'
import { frontendSkills, backendSkills, scrapingSkills } from './data'

const Skills = () => {
    const [frontendDropdown, setFrontendDropdown] = useState(true)
    const [backendDropdown, setBackendDropdown] = useState(false)
    const [scrapingDropdown, setScrapingDropdown] = useState(false)

    const handleFrontendClick = () => {
        setBackendDropdown(false)
        setScrapingDropdown(false)
        setFrontendDropdown(!frontendDropdown)
    }

    const handleBackendClick = () => {
        setFrontendDropdown(false)
        setScrapingDropdown(false)
        setBackendDropdown(!backendDropdown)
    }

    const handleScrapingClick = () => {
        setBackendDropdown(false)
        setFrontendDropdown(false)
        setScrapingDropdown(!scrapingDropdown)
    }

    return (
        <section className="skills section" id="skills">
            <h2 className="section_title">Skills</h2>
            <span className="section_subtitle">My Technical Expertise</span>

            <div className="skills_container container grid">
                <div>
                    {
                        frontendSkills.map((skill) => {
                            const { id, visibilityClassName, skillIcon, skillsTitle, skillsYears, skillsSet } = skill
                            return(
                                <Skill key={ id }
                                        visibilityClassName={ visibilityClassName }
                                        skillIcon={ skillIcon }
                                        skillsTitle={ skillsTitle }
                                        skillsYears={ skillsYears }
                                        skillsSet={ skillsSet }
                                        handleOnClick={ handleFrontendClick }
                                        dropdownState={ frontendDropdown }
                                />
                            )
                        })
                    }
                    {
                        backendSkills.map((skill) => {
                            const { id, skillIcon, skillsTitle, skillsYears, skillsSet } = skill
                            return(
                                <Skill key={ id }
                                        skillIcon={ skillIcon }
                                        skillsTitle={ skillsTitle }
                                        skillsYears={ skillsYears }
                                        skillsSet={ skillsSet }
                                        handleOnClick={ handleBackendClick }
                                        dropdownState={ backendDropdown }
                                />
                            )
                        })
                    }
                </div>
                <div>
                    {
                        scrapingSkills.map((skill) => {
                            const { id, skillIcon, skillsTitle, skillsYears, skillsSet } = skill
                            return(
                                <Skill key={ id }
                                        skillIcon={ skillIcon }
                                        skillsTitle={ skillsTitle }
                                        skillsYears={ skillsYears }
                                        skillsSet={ skillsSet }
                                        handleOnClick={ handleScrapingClick }
                                        dropdownState={ scrapingDropdown }
                                />
                            )
                        })
                    }
                </div>
            </div>
        </section>
    )
}

export default Skills
