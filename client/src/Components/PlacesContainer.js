import React from 'react';
import {useEffect, useState} from 'react'

function PlacesContainer() {

    const [places, setPlaces] = useState([])

    useEffect(() => {
        fetch('http://localhost:3000/places')
        .then(r => r.json())
        .then(data => setPlaces(data))
    })

    return(
        <div className="card-container">
            {places.map((place) => <PlaceCard key={place.id} place={place}/>)}
        </div>
    )
}








export default PlacesContainer;