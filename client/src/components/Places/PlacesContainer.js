import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import PlaceCard from './PlaceCard';

const PlacesContainer = ({ loggedIn, places }) => {
  const navigate = useNavigate();

  useEffect(() => {
    if( !loggedIn ) {
      navigate('/login');
    }
  }, [loggedIn, navigate])

  const PlaceCards = places.map(place => <PlaceCard key={ place.id } place={ place } />)

  return (
    <div>
      <h1>Places</h1>
      { PlaceCards }
    </div>
  )
}

export default PlacesContainer;