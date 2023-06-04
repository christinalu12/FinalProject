import React from 'react';

const FavoriteList = ({ favoriteAlbums, onRemoveFavorite }) => {
  const handleRemove = (albumId) => {
    onRemoveFavorite(albumId);
  };

  return (
    <div>
      <h3>My Favorites</h3>
      {favoriteAlbums.length === 0 ? (
        <p className="LP">No favorites selected</p>
      ) : (
        <ul>
          {favoriteAlbums.map((album) => (
            <li className="li" key={album.id}>
              {album.title}
              <button className="removebutton" onClick={() => handleRemove(album.id)}>
                Remove
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default FavoriteList;

