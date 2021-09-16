import React, { useState } from 'react'
import { FcGraduationCap }from 'react-icons/fc'
import { CgWorkAlt } from 'react-icons/cg'
import { QualificationOne, QualificationTwo } from './QualificationData'

const Qualifications = () => {
    const [component, setComponent] = useState(<QualificationTwo />)
    const [eduClick, setEduClick] = useState(false)
    const [workClick, setWorkClick] = useState(true)

    const educationTabClick = () => {
        setWorkClick(false)
        setEduClick(true)
        setComponent(QualificationOne)
    }

    const workTabClick = () => {
        setEduClick(false)
        setWorkClick(true)
        setComponent(QualificationTwo)
    }

    return (
        <section className="qualification section" id="qualification">
            <h2 className="section_title">Qualification</h2>
            <span className="section_subtitle">My Professional Journey</span>

            <div className="qualification_container container">
                <div className="qualification_tabs">
                    <div className={ eduClick ? "qualification_button button--flex qualification_active" : "qualification_button button--flex" } onClick={ educationTabClick }>
                        <FcGraduationCap className="qualification_icon"/>
                        Education
                    </div>
                    <div className={ workClick ? "qualification_button button--flex qualification_active" : "qualification_button button--flex" } onClick={ workTabClick }>
                        <CgWorkAlt className="qualification_icon"/>
                        Work
                    </div>
                </div>

                <div className="qualification_sections">
                    <div className="qualification_content qualification_active" data-content id="education">
                        { component }
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Qualifications
