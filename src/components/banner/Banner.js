import React from 'react'
import DisplayPicture from '../../assets/images/banner/PROFILE.jpg'
import './banner.css'

const Banner = () => {
    return (
        <React.Fragment>
            <div className="container">
                <div className="banner">
                    <div className="display-picture-container">
                        <img className="display-picture" src={DisplayPicture} alt="" />
                    </div>
                </div>
                
            </div>
        </React.Fragment>
    )
}

export default Banner
