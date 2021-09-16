import { FcSmartphoneTablet } from 'react-icons/fc'
import { BiCodeCurly } from 'react-icons/bi'
import { FiDatabase } from 'react-icons/fi'

export const frontendSkills = [
    {
        "id": 100,
        "visibilityClassName": "skills_open",
        "skillIcon": <FcSmartphoneTablet className="skills_icon"/>,
        "skillsTitle": "Frontend Developer",
        "skillsYears": 2,
        "skillsSet": [
            {
                "id": 111,
                "skillName": "HTML",
                "skillPercentage": 96,
            },
            {
                "id": 222,
                "skillName": "CSS",
                "skillPercentage": 76,
            },
            {
                "id": 333,
                "skillName": "JavaScript",
                "skillPercentage": 86,
            },
            {
                "id": 444,
                "skillName": "React",
                "skillPercentage": 79,
            },
        ]
    },
]

export const backendSkills = [
    {
        "id": 200,
        "skillIcon": <BiCodeCurly className="skills_icon"/>,
        "skillsTitle": "Backend Developer",
        "skillsYears": 1,
        "skillsSet": [
            {
                "id": 111,
                "skillName": "Nodejs",
                "skillPercentage": 75,
            },
            {
                "id": 222,
                "skillName": "Python",
                "skillPercentage": 82,
            },
            {
                "id": 333,
                "skillName": "SQL(Postgresql)",
                "skillPercentage": 70,
            },
            {
                "id": 444,
                "skillName": "MongoDb",
                "skillPercentage": 72,
            },
        ]
    }
]

export const scrapingSkills = [
    {
        "id": 300,
        "skillIcon": <FiDatabase className="skills_icon"/>,
        "skillsTitle": "Web Scraping Specialist",
        "skillsYears": 2,
        "skillsSet": [
            {
                "id": 111,
                "skillName": "Scrapy",
                "skillPercentage": 88,
            },
            {
                "id": 222,
                "skillName": "Selenium",
                "skillPercentage": 82,
            },
            {
                "id": 333,
                "skillName": "Data Cleaning",
                "skillPercentage": 90,
            },
        ]
    }
]