import React from 'react'
import { AiOutlineCheckCircle } from 'react-icons/ai'

const ModalData = ({ modalItem }) => {
    return (
        <li className="services_modal-service">
            <AiOutlineCheckCircle className="services_modal-icon"/>
            <p>{ modalItem }</p>
        </li>
    )
}

export default ModalData
