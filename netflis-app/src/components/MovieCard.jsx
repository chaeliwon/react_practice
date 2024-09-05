import React, { useState } from 'react';
import { Badge } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';  // useNavigate 사용
import 'bootstrap/dist/css/bootstrap.min.css';

const MovieCard = ({ movie, genreList }) => {
  const [hover, setHover] = useState(false);
  const navigate = useNavigate();  // navigate 함수 사용

  const getGenreNames = (genreIds) => {
    return genreIds.map(id => {
      const genre = genreList.find(g => g.id === id);
      return genre ? genre.name : 'Unknown';
    });
  };

  const handleClick = () => {
    navigate(`/movies/${movie.id}`);  // 영화 상세 페이지로 이동
  };

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
      onClick={handleClick}  // 클릭 시 상세 페이지로 이동
    >
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
          transition: 'opacity 0.3s ease',
          padding: '10px',
        }}
      >
        <h4>{movie.title}</h4>
        <div>
          {getGenreNames(movie.genre_ids).map((name, index) => (
            <Badge key={index} pill bg="danger" style={{ marginRight: '5px' }}>
              {name}
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
