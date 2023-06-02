import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const FavoritesPage = ({ favoriteAlbums }) => {
    return (
      <div>
        <h1>My Favorites</h1>
        {favoriteAlbums.length > 0 ? (
          favoriteAlbums.map((album) => (
            <Card key={album.id}>
              <Card.Body>
                <Card.Title>{album.title}</Card.Title>
                <Button>Remove from Favorites</Button>
              </Card.Body>
            </Card>
          ))
        ) : (
          <p>No favorite albums selected.</p>
        )}
        <Link to="/cataloguepage">Go back to Catalogue</Link>
      </div>
    );
  };
  
  export default FavoritesPage;
