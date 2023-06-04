import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import Navbar from './Navbar';
import HomePage from './HomePage'; // Corrected import
import CataloguePage from './CataloguePage';
import ContactUs from './ContactUs';

const App = () => {
  const [favoriteAlbums, setFavoriteAlbums] = useState([]);
  const [albums, setAlbums] = useState([]);

  useEffect(() => {
    fetchAlbums()
      .then((data) => setAlbums(data))
      .catch((error) => console.log(error.message));
  }, []);

  const fetchAlbums = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/albums');
    if (!response.ok) {
      throw new Error('Failed to fetch albums');
    }
    const data = await response.json();
    return data;
  };

  const handleAddToFavorites = (albumId) => {
    const albumToAdd = albums.find((album) => album.id === albumId);

    const isAlreadyInFavorites = favoriteAlbums.some((album) => album.id === albumId);

    if (albumToAdd && !isAlreadyInFavorites) {
      setFavoriteAlbums((prevFavorites) => [...prevFavorites, albumToAdd]);
      console.log('Album added to favorites:', albumId);
    } else {
      console.log('Album is already in favorites or not found:', albumId);
    }
  };

  return (
    <Router>
      <Navbar />
      <Container>
        <Switch>
          <Route path="/HomePage" component={HomePage} />
          <Route path="/cataloguepage">
            <CataloguePage albums={albums} handleAddToFavorites={handleAddToFavorites} />
          </Route>
          <Route path="/contactus" component={ContactUs} />
        </Switch>
      </Container>
    </Router>
  );
};

export default App;











