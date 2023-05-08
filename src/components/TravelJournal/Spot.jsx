import React from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faLocationDot} from '@fortawesome/free-solid-svg-icons'

export default function Spot(props) {

    return (
        <div className="spot-wrapper">
            <div className="spot">
                <img src={props.img} className="spot-image" />
                <div className="spot-details">
                    <div className="spot-stats">
                        <FontAwesomeIcon icon={faLocationDot} style={{color: "#f55a5a"}} size="xs"/>
                        <span className="spot-location">{props.location}</span>
                        <a href={props.map} className="spot-map">View on Google Maps</a>
                    </div>
                    <h2>{props.title}</h2>
                    <p className="spot-date">{props.dateStart} - {props.dateEnd}</p>
                    <p className="spot-description">{props.description}</p>
                </div>
            
            </div>
            <hr/>
        </div>
        
    )
}