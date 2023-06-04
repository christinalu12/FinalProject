import React, { useState, useEffect } from 'react';
import { Card } from 'react-bootstrap';
import FavoritesList from './FavoritesList';

const CataloguePage = ({ handleAddToFavorites }) => {
  const [albums, setAlbums] = useState([]);
  const [favoriteAlbums, setFavoriteAlbums] = useState([]);

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

  const addToFavorites = (album) => {
    handleAddToFavorites(album.id);
    setFavoriteAlbums((prevFavorites) => [...prevFavorites, album]);
  };

  const handleRemoveFavorite = (albumId) => {
    setFavoriteAlbums((prevFavorites) =>
      prevFavorites.filter((album) => album.id !== albumId)
    );
  };

  return (
    <div>
      <h1>Catalogue</h1>
      <FavoritesList favoriteAlbums={favoriteAlbums} onRemoveFavorite={handleRemoveFavorite} />
      {albums.map(({ id, title }) => (
        <Card key={id}>
          <Card.Body>
            <Card.Title>{title}</Card.Title>
            <button onClick={() => addToFavorites({ id, title })}>
              Add to Favorites
            </button>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
};

export default CataloguePage;












