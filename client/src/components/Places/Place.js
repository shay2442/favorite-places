import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

const Place = ({ places }) => {
  const [place, setPlace] = useState({});
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const p = places.find(p => p.id.toString() === id);
    setPlace(p);
  }, [id, places])

  return (
    <div style={{ marginLeft: "20px"}}>
        <p>Name: { place.name }</p>
        <p>Address: { place.address }</p>
        <p>Price: { place.price }</p>
        <p>Category: { place.category } </p>
        <p>Notes: { place.notes }</p>
      <img src={ place.image } alt=" place" height="300" width="350" />
      <button onClick={ () => navigate(`/places}`) }>Back to places</button>
    </div>
  )
}

export default Place