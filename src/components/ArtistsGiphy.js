import React from 'react';
import "./ArtistsGiphy.css";

function ArtistsGiphys({giphy}) {
  return (
    <div className="artist-giphy">
      <img src={giphy.images.downsized.url} alt={giphy.title}/>
    </div>
  )
}

export default ArtistsGiphys