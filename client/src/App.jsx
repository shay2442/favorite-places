
import './App.css';

import React, { useEffect, useState } from 'react';
import Navbar from './components/Navigation/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Static/Home';
import Signup from './components/Authentication/Signup';
import Login from './components/Authentication/Login';
import PlacesContainer from './components/Places/PlacesContainer';
import Place from './components/Places/Place'


function App() {
  const [currentUser, setCurrentUser] = useState({})
  const [places, setPlaces] = useState([])
  const [loggedIn, setLoggedIn] = useState(false)


  const loginUser = user => {
    setCurrentUser(user);
    setLoggedIn(true);
  }

  const logoutUser = () => {
    setCurrentUser({});
    setLoggedIn(false);
    localStorage.removeItem('jwt')
  }

  useEffect(() => {
    const token = localStorage.getItem('jwt')
    if(token && !loggedIn) {
      // fetch to rails backend
      fetch(baseUrl + '/get-current-user', {
        method: "GET",
        headers: {
          ...headers,
          ...getToken()
        }
      })
        .then(resp => resp.json())
        .then(user => loginUser(user))
    }

    if(loggedIn) {
      fetch(baseUrl + '/places', {
        headers: {
          ...headers,
          ...getToken()
        }
      })
        .then( resp => resp.json())
        .then( data => setPlaces( data ))
    }
  }, [loggedIn])


  return (
    <div className="App">
      <header className="App-header">
      My Places 
      </header>
      <Router>
        <Navbar loggedIn={ loggedIn } logoutUser={ logoutUser } currentUser={ currentUser} />
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/signup" element={<Signup loginUser={ loginUser } loggedIn={loggedIn} />}/>
          <Route path="/login" element={<Login loginUser={ loginUser } loggedIn={ loggedIn } />}/>
          <Route path="/places" element={<PlacesContainer loggedIn={ loggedIn } places={ places } />} />
          <Route path="/places/:id" element={<Place loggedIn={ loggedIn } places={ places } />} />
        </Routes>
      </Router>
      
    </div>
  );
}

export default App;
