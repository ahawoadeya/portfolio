import React from 'react'
import { FiCalendar } from 'react-icons/fi'

export const QualificationOne = () => {
    return (
        <React.Fragment>
            <div className="qualification_data">
                <div>
                    <h3 className="qualification_title">Bachelor of Science in Informatics</h3>
                    <span className="qualification_subtitle">MOI University</span>
                    <div className="qualification_calendar">
                        <FiCalendar/>
                        2016 - 2021
                    </div>
                </div>

                <div>
                    <span className="qualification_rounder"></span>
                    <span className="qualification_line"></span>
                </div>
            </div>

            <div className="qualification_data">
                <div></div>

                <div>
                    <span className="qualification_rounder"></span>
                    {/* <span className="qualification_line"></span> */}
                </div>

                <div>
                    <h3 className="qualification_title">Python Developer</h3>
                    <span className="qualification_subtitle">JetBrains Academy</span>
                    <div className="qualification_calendar">
                        <FiCalendar/>
                        2020 - 2021
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export const QualificationTwo = () => {
    return (
        <React.Fragment>
            <div className="qualification_data">
                <div>
                    <h3 className="qualification_title">Python-Django Backend Developer</h3>
                    <span className="qualification_subtitle">Upwork - Freelance</span>
                    <div className="qualification_calendar">
                        <FiCalendar/>
                        2020 - Present
                    </div>
                </div>
                {/* <div>
                    <h3 className="qualification_title">Frontend Developer</h3>
                    <span className="qualification_subtitle">Libro Systems - Intern</span>
                    <div className="qualification_calendar">
                        <FiCalendar/>
                        2020 - 2021
                    </div>
                </div> */}

                <div>
                    <span className="qualification_rounder"></span>
                    <span className="qualification_line"></span>
                </div>
            </div>

            <div className="qualification_data">
                <div></div>

                <div>
                    <span className="qualification_rounder"></span>
                    <span className="qualification_line"></span>
                </div>

                <div>
                    <h3 className="qualification_title">Software Support</h3>
                    <span className="qualification_subtitle">Libro Systems - Intern</span>
                    <div className="qualification_calendar">
                        <FiCalendar/>
                        2020 - 2020
                    </div>
                </div>
            </div>

            <div className="qualification_data">
                <div>
                    <h3 className="qualification_title">Data Extraction/ETL</h3>
                    <span className="qualification_subtitle">Upwork - Freelance</span>
                    <div className="qualification_calendar">
                        <FiCalendar/>
                        2020 - 2021
                    </div>
                </div>
                <div>
                    <span className="qualification_rounder"></span>
                    <span className="qualification_line"></span>
                </div>
            </div>

            <div className="qualification_data">
                <div></div>

                <div>
                    <span className="qualification_rounder"></span>
                    {/* <span className="qualification_line"></span> */}
                </div>

                <div>
                    <h3 className="qualification_title">Software Support</h3>
                    <span className="qualification_subtitle">MOSCOM - Intern</span>
                    <div className="qualification_calendar">
                        <FiCalendar/>
                        2017 - 2018
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}
