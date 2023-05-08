import React from 'react'
import Header from '../components/TravelJournal/Header'
import Container from '../components/TravelJournal/Container'
import '../css/TravelJournal/TravelJournal.css'
import { Link } from "react-router-dom"

function TravelJournal() {

  return (
    <div className="TravelJournal">
        <Header />
        <Container />
        <div className='links-home'>
          <Link to="/">home</Link>
        </div>
        
    </div>
  )
}

export default TravelJournal
