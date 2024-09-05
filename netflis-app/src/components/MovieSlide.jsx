import React from 'react';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css"; // Carousel 스타일 import
import MovieCard from './MovieCard'; // MovieCard 컴포넌트 import

// MovieSlide 컴포넌트
const MovieSlide = ({ popularMovies, topRatedMovies, upcomingMovies }) => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  // renderMovies 함수에서 MovieCard 컴포넌트를 사용
  const renderMovies = (movies) => {
    return movies.map((movie) => (
      <MovieCard key={movie.id} movie={movie} />
    ));
  };

  return (
    <div>
      <div>
        <h1>Popular Movies</h1>
        <Carousel responsive={responsive}>
          {popularMovies.length > 0 && renderMovies(popularMovies)}
        </Carousel>
      </div>

      <div>
        <h1>Top Rated Movies</h1>
        <Carousel responsive={responsive}>
          {topRatedMovies.length > 0 && renderMovies(topRatedMovies)}
        </Carousel>
      </div>

      <div>
        <h1>Upcoming Movies</h1>
        <Carousel responsive={responsive}>
          {upcomingMovies.length > 0 && renderMovies(upcomingMovies)}
        </Carousel>
      </div>
    </div>
  );
};

export default MovieSlide;
