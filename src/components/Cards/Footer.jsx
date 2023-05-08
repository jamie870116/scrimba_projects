import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitterSquare, faFacebookSquare, faInstagramSquare, faGithubSquare, faLinkedin } from '@fortawesome/free-brands-svg-icons'
// import { faGithubSquare } from '@fortawesome/free-brands-svg-icons'
import '../../css/Cards/Footer.css'
function Footer() {
    return (
        <footer className='footer'>
            <a><FontAwesomeIcon className="footer-icons" icon={faTwitterSquare}/></a>
            <a><FontAwesomeIcon className="footer-icons" icon={faFacebookSquare} /></a>
            <a><FontAwesomeIcon className="footer-icons" icon={faInstagramSquare} /></a>
            <a><FontAwesomeIcon className="footer-icons" icon={faGithubSquare} /></a>
            <a><FontAwesomeIcon className="footer-icons" icon={faLinkedin} /></a>
        </footer>
    )
}
export default Footer