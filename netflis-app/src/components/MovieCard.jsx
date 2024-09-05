import React, { useState } from 'react';
import { Badge } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'; // Bootstrap 스타일 import

// 장르 ID를 장르 이름으로 변환하는 함수
const getGenreName = (id) => {
  const genres = {
    28: 'Action',
    12: 'Adventure',
    16: 'Animation',
    // 장르 ID에 따른 추가 장르 매핑
    // 예: 35: 'Comedy', 18: 'Drama', ...
  };
  return genres[id] || 'Unknown';
};

// MovieCard 컴포넌트
const MovieCard = ({ movie }) => {
  const [hover, setHover] = useState(false);

  return (
    <div
      style={{
        position: 'relative',
        backgroundImage: `url(https://image.tmdb.org/t/p/w500${movie.poster_path})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '300px',
        borderRadius: '10px',
        display: 'flex',
        alignItems: 'flex-end',
        justifyContent: 'center',
        overflow: 'hidden',
        color: 'white',
        cursor: 'pointer',
      }}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      {/* Hover 시 나타날 정보 */}
      <div
        style={{
          position: 'absolute',
          bottom: '0',
          backgroundColor: hover ? 'rgba(0, 0, 0, 0.7)' : 'transparent',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'white',
          opacity: hover ? 1 : 0,
          transition: 'opacity 0.3s ease, background-color 0.3s ease',
          padding: '10px',
          textAlign: 'center',
        }}
      >
        <h4>{movie.title}</h4>
        <div>
          {movie.genre_ids.map((id) => (
            <Badge key={id} pill bg="danger" style={{ marginRight: '5px' }}>
              {getGenreName(id)}
            </Badge>
          ))}
        </div>
        <p>평점: {movie.vote_average}점 | 청소년 {movie.adult ? '불가' : '가능'}</p>
        <p>인기: {movie.popularity}</p>
      </div>
    </div>
  );
};

export default MovieCard;
