import React from 'react'
import { ServicesData } from './data'
import Service from './Service'

const Services = () => {
    return (
        <section className="services section" id="services">
            <h2 className="section_title">Services</h2>
            <span className="section_subtitle">What I offer</span>

            <div className="services_container container grid">
                {
                    ServicesData.map((service) => {
                        const { id, serviceTitle, serviceIcon, servicesSet } = service
                        return(
                            <Service key={id} serviceTitle={serviceTitle} serviceIcon={serviceIcon} servicesSet={servicesSet}/>
                        )
                    })
                }
            </div>
        </section>
    )
}

export default Services
