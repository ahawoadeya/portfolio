import React, { useState, useEffect } from 'react'
import { links, social } from './NavbarItems'
import './Navbar.css'

const Navbar = () => {
    const [click, setClick] = useState(false)
    const [overlay, setOverlay] = useState(false)
    const [name, setName] = useState("Ambrose Ahawo")

    const handleClick = () => {
        if (window.innerWidth < 960 ) {
            setClick(!click)
            setOverlay(!overlay)
        }
    }

    const handleResize = () => {
        if (window.innerWidth < 960){
            setName("Ambrose")
        }else{
            setName("Ambrose Ahawo")
        }
    }

    useEffect(() => {
        if (window.innerWidth < 960){
            setName("Ambrose")
        }else{
            setName("Ambrose Ahawo")
        }

        window.addEventListener('resize', handleResize)
        
        return () => {
            window.removeEventListener('resize', handleResize)
        }
    }, [])

    return (
        <React.Fragment>
            <nav className="navbar">
                <div className="menu-icon" onClick={handleClick}>
                    <i className={click ? 'lnr lnr-cross' : 'lnr lnr-menu'} ></i>
                </div>
                <div className="nav-center">
                    <div className="nav-header">
                        <div className="logo">
                            <a href="/">{name}</a>
                        </div>
                    </div>
                    <ul className={ click ? 'nav-menu mobile-nav' : 'nav-menu'} >
                        {links.map((link) => {
                            const { id, url, text } = link
                            return (
                                <li key={id} onClick={handleClick}>
                                    <a href={url}>{text}</a>
                                </li>
                            )
                        })}
                    </ul>
                    <ul className="social-icons">
                        {social.map((socialIcon) => {
                            const { id, url, icon, cName } = socialIcon
                            return(
                                <li key={id} className={cName}>
                                    <a target="_blank" rel="noreferrer" href={url}>{icon}</a>
                                </li>
                            )
                        })}
                    </ul>
                </div>
            </nav>
            <div id="overlay" className={overlay ? 'display-overlay': 'display-none'} onClick={handleClick}></div>
        </React.Fragment>
    )
}

export default Navbar
