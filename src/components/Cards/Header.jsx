import React from 'react'
import profile_img from '../../images/profile.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faEnvelope} from '@fortawesome/free-solid-svg-icons'

import '../../css/Cards/Header.css'

function Header() {
    return (
        <div className='header'>
            <div className='profile-img'>
                <img src={profile_img}></img>
            </div>
            <div className='profile'>
                <h1 className='profile-name'>Jamie Lai</h1>
                <h4 className='profile-job'>Job Title</h4>
                <p className='profile-web'>website link</p>
                <button className='profile-email-btn'><FontAwesomeIcon icon={faEnvelope} />Email</button>
            </div>
        </div>
    )
}

export default Header