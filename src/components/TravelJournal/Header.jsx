import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faEarthAmericas} from '@fortawesome/free-solid-svg-icons'

import '../../css/TravelJournal/Header.css'

function Header() {
    return (
        <div className='travel_header'>
            <FontAwesomeIcon icon={faEarthAmericas} style={{color: "#ffffff",}} />
            <p className='travel_title'>my travel journal.</p>
        </div>
    )
}

export default Header