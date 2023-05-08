import React from 'react'
import '../../css/TravelJournal/Container.css'
import data from '../../Data/TravelJournalData'
import Spot from './Spot'

function Container() {
    console.log(data)
    const spots = data.map((spot) => {
        return (
            <Spot 
                key={spot.id}
                title={spot.title}
                location={spot.location}
                map={spot.map}
                description={spot.description}
                dateStart={spot.dateStart}
                dateEnd={spot.dateEnd}
                img={spot.img}
            />
        )
    })
    return (
        <div className='container'>
            {spots}
        </div>
    )
}

export default Container