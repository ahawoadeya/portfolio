import React, { useState } from 'react'
import { FaAngleDoubleRight } from 'react-icons/fa'
import { experienceList } from './data'
import './resume.css'

const Resume = () => {

    const [value, setValue] = useState(0)

    const { company, dates, duties, title } = experienceList[value]

    return (
        <React.Fragment>
            <section className="section">
                <div className="title">
                    <button className="btn exp-btn">Experience</button>
                    <button className="btn edu-btn">Education</button>
                </div>
                <div className="jobs-center">
                    <div className="btn-container">
                        {experienceList.map((item, index) => {
                            
                            return (
                                <button key={item.id} onClick={() => setValue(index)}
                                    className={`job-btn ${index === value && 'active-btn'}`}>
                                        {item.company}
                                </button>
                        )
                        })}
                    </div>

                    <article className="job-info">
                        <h3>{title}</h3>
                        <h4>{company}</h4>
                        <p className="job-date">{dates}</p>
                        { duties.map((duty, index) => {
                            return(
                                <div className="job-desc" key={index}>
                                    <FaAngleDoubleRight className="job-icon" />
                                    <p>{duty}</p>
                                </div>
                            )
                        })}
                    </article>
                </div>
                
            </section>
        </React.Fragment>
    )
}

export default Resume
