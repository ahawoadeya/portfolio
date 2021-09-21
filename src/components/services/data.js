import { FcSmartphoneTablet } from "react-icons/fc"
import { BiCodeCurly } from "react-icons/bi"
import { GiExtraTime } from "react-icons/gi"
import { AiOutlineApi } from "react-icons/ai"

export const ServicesData = [
    {
        "id": 1,
        "serviceIcon": <FcSmartphoneTablet className="services_icon"/>,
        "serviceTitle": "Frontend Development",
        "servicesSet": [
            {
                "id": 11,
                "modalItem": "Develop responsive user interface"
            },
            {
                "id": 12,
                "modalItem": "Enhance user experience"
            },
            {
                "id": 13,
                "modalItem": "Maintain brand consistency"
            },
        ]
    },
    {
        "id": 2,
        "serviceIcon": <AiOutlineApi className="services_icon"/>,
        "serviceTitle": "RESTful APIs",
        "servicesSet": [
            {
                "id": 11,
                "modalItem": "Design RESTful APIs"
            },
            {
                "id": 12,
                "modalItem": "Develop RESTful APIs"
            },
            {
                "id": 13,
                "modalItem": "Implement, oversee, adapt APIs"
            },
        ]
    },
    {
        "id": 3,
        "serviceIcon": <BiCodeCurly className="services_icon"/>,
        "serviceTitle": "Backend Development",
        "servicesSet": [
            {
                "id": 11,
                "modalItem": "Define and maintain central database"
            },
            {
                "id": 12,
                "modalItem": "Develop server-side logic"
            },
            {
                "id": 13,
                "modalItem": "Ensure scalability"
            },
        ]
    },
    {
        "id": 4,
        "serviceIcon": <GiExtraTime className="services_icon"/>,
        "serviceTitle": "Web Scraping",
        "servicesSet": [
            {
                "id": 11,
                "modalItem": "Extract data from websites"
            },
            {
                "id": 12,
                "modalItem": "Data cleaning"
            },
            {
                "id": 13,
                "modalItem": "Data storage"
            },
        ]
    },
]