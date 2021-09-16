import React from 'react'

const SkillData = ({ skillName, skillPercentage }) => {
    return (
        <div className="skills_data">
            <div className="skills_title">
                <h3 className="skills_name">{ skillName }</h3>
                <span className="skills_number">{ skillPercentage }%</span>
            </div>
            <div className="skills_bar">
                <span className="skills_percentage" style={{width: `${skillPercentage}%`}}></span>
            </div>
        </div>
    )
}

export default SkillData
