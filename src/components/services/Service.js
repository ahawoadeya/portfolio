import React, { useState } from 'react'
import { AiOutlineArrowRight, AiOutlineCloseCircle } from 'react-icons/ai'
import ModalData from './ModalData'

const Service = ({ serviceTitle, serviceIcon, servicesSet}) => {
    const [modalOpen, setModalOpen] = useState(false)

    const handleClick = () => {
        setModalOpen(!modalOpen)
    }

    return (
       <div className="services_content">
            <div>
                { serviceIcon }
                <i className="uil uit-web-grid services_icon"></i>
                <h3 className="services_title">{ serviceTitle }</h3>
            </div>

            <span className={ modalOpen ? "button button--flex button--small button--link services_button active-modal" : "button button--flex button--small button--link services_button" } onClick={handleClick}>
                View more
                <AiOutlineArrowRight className="button_icon"/>
            </span>

            <div className={ modalOpen ? "services_modal active-modal" : "services_modal"}>
                <div className="services_modal-content">
                    <h4 className="services_modal-title">{ serviceTitle }</h4>
                    <AiOutlineCloseCircle className="services_modal-close" onClick={handleClick}/>

                    <ul className="services_modal-services grid">
                        {
                            servicesSet.map((item) => {
                                const { id, modalItem } = item
                                return(
                                    <ModalData key={id} modalItem={modalItem}/>
                                )
                            })
                        }
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Service
