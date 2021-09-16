import React from 'react'
import SkillData from './SkillData'
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from 'react-icons/md'

const Skill = ({ skillIcon, skillsTitle, skillsYears, skillsSet, handleOnClick, dropdownState }) => {

    return (
        <div className={ dropdownState ? "skills_content skills_open" : "skills_content skills_close"} onClick={ handleOnClick }>
            <div className="skills_header">
                { skillIcon }

                <div>
                    <h1 className="skills_title">{ skillsTitle }</h1>
                    <span className="skills_subtitle">More than { skillsYears } 
                        { skillsYears > 1 ? " years ": " year" }
                    </span>
                </div>
                {
                    dropdownState ?
                        <MdKeyboardArrowUp className="skills_arrow" />
                    :   <MdKeyboardArrowDown className="skills_arrow" />
                }
            </div>

            <div className="skills_list grid">
                {
                    skillsSet.map((skill) => {
                        const { id, skillName, skillPercentage } = skill
                        return(
                            <SkillData key={id} skillName={ skillName } skillPercentage={ skillPercentage }/>
                        )
                    })
                }
            </div>
        </div>
    )
}

Skill.defaultProps = {
    "visibilityClassName": "skills_close"
}
export default Skill
