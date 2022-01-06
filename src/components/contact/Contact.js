import React, { useState } from 'react'
import { BiPhoneCall } from 'react-icons/bi'
import { AiOutlineMail } from 'react-icons/ai'
import { GoLocation } from 'react-icons/go'
import { BiSend } from 'react-icons/bi'

import emailjs from 'emailjs-com'

const Contact = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [project, setProject] = useState('')
    const [message, setMessage] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        
        // console.log(`{name: ${name}, email: ${email}, project: ${project}, message: ${message}}`)

        emailjs.sendForm("service_k0j319g", "template_d8mtdwq", 
                            e.target, "user_K1wTYowLAry1bkz90fgpT")
                            // .then(res =>{
                            //     console.log(res)
                            // }).catch(err => console.log(err))
        
        setName('')
        setEmail('')
        setProject('')
        setMessage('')
    }

    return (
        <section className="contact section" id="contact">
            <h2 className="section_title">Contact Me</h2>
            <span className="section_subtitle">Get in touch</span>

            <div className="contact_container container grid">
                <div>
                    <div className="contact_information">
                        <BiPhoneCall className="contact_icon"/>

                        <div>
                            <h3 className="contact_title">Call Me</h3>
                            <span className="contact_subtitle">254-729-097-858</span>
                        </div>
                    </div>
                    <div className="contact_information">
                        <AiOutlineMail className="contact_icon"/>

                        <div>
                            <h3 className="contact_title">Email</h3>
                            <span className="contact_subtitle">ahawoadeya995@gmail.com</span>
                        </div>
                    </div>
                    <div className="contact_information">
                        <GoLocation className="contact_icon"/>

                        <div>
                            <h3 className="contact_title">Location</h3>
                            <span className="contact_subtitle">Nairobi - Kenya</span>
                        </div>
                    </div>
                </div>

                <form action="" className="contact_form grid" onSubmit={handleSubmit}>
                    <div className="contact_inputs grid">
                        <div className="contact_content">
                            <label htmlFor="" className="contact_label">Name</label>
                            <input required type="text" className="contact_input" name="name"
                                    value={name} onChange={(e) => setName(e.target.value)} />
                        </div>
                            {/* <span>*value needed</span> */}
                        <div className="contact_content">
                            <label htmlFor="" className="contact_label">Email</label>
                            <input required type="email" className="contact_input" name="email"
                                    value={email} onChange={(e) => setEmail(e.target.value)} />
                        </div>
                            {/* <span>*value needed</span> */}
                    </div>
                    <div className="contact_content">
                        <label htmlFor="" className="contact_label">Project</label>
                        <input required type="text" className="contact_input" name="project"
                                value={project} onChange={(e) => setProject(e.target.value)} />
                    </div>
                        {/* <span>*value needed</span> */}
                    <div className="contact_content">
                        <label htmlFor="" className="contact_label">Message</label>
                        <textarea required name="message" id="" cols="0" rows="7" className="contact_input"
                                    value={message} onChange={(e) => setMessage(e.target.value)} />
                    </div>
                        {/* <span>*value needed</span> */}
                    <div>
                        <button type="submit" className="button button--flex">
                            Send Message
                            <BiSend className="button_icon"/>
                        </button>
                    </div>
                </form>
            </div>
        </section>
    )
}

export default Contact
