import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import MovieCard from './MovieCard';

const MovieSlide = ({ popularMovies, topRatedMovies, upcomingMovies, genreList }) => {
  const responsive = {
    desktop: { breakpoint: { max: 3000, min: 1024 }, items: 7 },
    tablet: { breakpoint: { max: 1024, min: 464 }, items: 2 },
    mobile: { breakpoint: { max: 464, min: 0 }, items: 1 }
  };

  const renderMovies = (movies) => {
    return movies.map(movie => (
      <MovieCard key={movie.id} movie={movie} genreList={genreList} />
    ));
  };

  return (
    <div>
      <h1 style={{ color: 'white' }}>Popular Movies</h1>
      <Carousel responsive={responsive}>
        {popularMovies.length > 0 && renderMovies(popularMovies)}
      </Carousel>

      <h1 style={{ color: 'white' }}>Top Rated Movies</h1>
      <Carousel responsive={responsive}>
        {topRatedMovies.length > 0 && renderMovies(topRatedMovies)}
      </Carousel>

      <h1 style={{ color: 'white' }}>Upcoming Movies</h1>
      <Carousel responsive={responsive}>
        {upcomingMovies.length > 0 && renderMovies(upcomingMovies)}
      </Carousel>
    </div>
  );
};

export default MovieSlide;
