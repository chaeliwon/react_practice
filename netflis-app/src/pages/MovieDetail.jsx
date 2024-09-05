import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import api from '../api';
import { Badge } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const MovieDetail = () => {
  const { id } = useParams();  // URL에서 영화 ID 가져오기
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    const fetchMovie = async () => {
      const res = await api.get(`/movie/${id}?language=ko-KR`);
      setMovie(res.data);  // 영화 데이터 설정
    };

    fetchMovie();
  }, [id]);

  if (!movie) return <p>Loading...</p>;

  return (
    <div style={{ color: 'white', backgroundColor: 'black', padding: '20px' }}>
      <div className="d-flex">
        <img
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          alt={movie.title}
          style={{ borderRadius: '10px', marginRight: '20px' }}
        />
        <div>
          <h1>{movie.title}</h1>
          <div>
            {movie.genres.map((genre) => (
              <Badge key={genre.id} pill bg="danger" style={{ marginRight: '5px' }}>
                {genre.name}
              </Badge>
            ))}
          </div>
          <p>평점: {movie.vote_average}</p>
          <p>청소년 관람: {movie.adult ? '불가' : '가능'}</p>
          <p>{movie.overview}</p>
          <p>개봉일: {movie.release_date}</p>
        </div>
      </div>
    </div>
  );
};

export default MovieDetail;
