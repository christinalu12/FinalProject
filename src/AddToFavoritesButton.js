import React from 'react';
import { Button } from 'react-bootstrap';

const AddToFavoritesButton = ({ onClick }) => {
  return <Button onClick={onClick}>Add to Favorites</Button>;
};

export default AddToFavoritesButton;
