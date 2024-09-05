import React from 'react';

const Banner = ({ movie }) => {

  const backgroundImageUrl = `https://image.tmdb.org/t/p/w1920_and_h800_multi_faces${movie?.backdrop_path}`;

  return (
    <div
      style={{
        backgroundImage: `url(${backgroundImageUrl})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '500px',
        position: 'relative',
        color: 'white',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <div style={{
        position: 'absolute',
        bottom: '20px',
        left: '20px',
        maxWidth: '600px',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',  // 텍스트 가독성을 위한 반투명 배경
        padding: '20px',
        borderRadius: '10px',
      }}>
        <h1 style={{ fontSize: '2.5rem', marginBottom: '10px' }}>{movie?.title}</h1>
        <p style={{ fontSize: '1.2rem', lineHeight: '1.5' }}>{movie?.overview}</p>
      </div>
    </div>
  );
};

export default Banner;
