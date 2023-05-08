
import React from 'react'
import Header from '../components/Cards/Header'
import Content from '../components/Cards/Content'
import Footer from '../components/Cards/Footer'
import '../css/Cards/Cards.css'
import { Link } from "react-router-dom"

function BusinessCards() {

  return (
    <div className="Cards">
        <Header />
        <Content />
        <Footer />
        <div className='links-home'>
          <Link to="/">home</Link>
        </div>
    </div>
  )
}

export default BusinessCards
