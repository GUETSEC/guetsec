import React, { useState } from 'react';

const AlbumPage = () => {
  const [photos, setPhotos] = useState([
    { id: 1, url: 'https://example.com/photo1.jpg', caption: 'Beautiful sunset' },
    { id: 2, url: 'https://example.com/photo2.jpg', caption: 'Cute puppy' },
    { id: 3, url: 'https://example.com/photo3.jpg', caption: 'Amazing landscape' },
  ]);

  return (
    <div>
      <h1>My Album</h1>
      <div className="photo-grid">
        {photos.map(photo => (
          <div key={photo.id} className="photo-card">
            <img src={photo.url} alt={photo.caption} />
            <p>{photo.caption}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AlbumPage;
