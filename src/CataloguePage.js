import React, { useState, useEffect } from 'react';
import { Card, Button } from 'react-bootstrap';

const CataloguePage = () => {
  const [albums, setAlbums] = useState([]);

  useEffect(() => {
    fetchAlbums()
      .then((data) => setAlbums(data))
      .catch((error) => console.log(error.message)); // Handle the error here
  }, []);

  const fetchAlbums = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/albums');
    if (!response.ok) {
      throw new Error('Failed to fetch albums');
    }
    const data = await response.json();
    return data;
  };

  return (
    <div>
      <h1>Catalogue</h1>
      {albums.map(({ id, title }) => (
        <Card key={id}>
          <Card.Body>
            <Card.Title>{title}</Card.Title>
            <Button>Add to Favorites</Button>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
};

export default CataloguePage;
