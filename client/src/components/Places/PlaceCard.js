import React from 'react'
import { useNavigate } from 'react-router-dom'

const PlaceCard = ({ place }) => {
  const navigate = useNavigate();

  return (
    <div>
        <p>Name: { place.name }</p>
        <p>Address: { place.address }</p>
        <p>Price: { place.price }</p>
        <p>Category: { place.category } </p>
        <p>Notes: { place.notes }</p>
      <img src={ place.image } alt="place" height="300" width="350" />
      <button onClick={ () => navigate(`/places/${place.id}`) }>View Place</button>
    </div>
  )
}


export default PlaceCard