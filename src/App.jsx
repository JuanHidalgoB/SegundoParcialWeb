import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css'

const PhotoList = () => {
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    axios
      .get('https://jsonplaceholder.typicode.com/photos')
      .then(response => {
        setPhotos(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  return (
    <div className="photo-list">
      {photos.map(photo => (
        <div key={photo.id} className="photo">
          <img src={photo.thumbnailUrl} alt={photo.title} />
          <h2>{photo.title}</h2>
        </div>
      ))}
    </div>
  );
};

export default PhotoList;
