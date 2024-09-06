import React, { useEffect } from 'react';
import api from '../api';
import { useDispatch, useSelector } from 'react-redux';
import { initData, setGenreList } from '../redux/reducers/movieSlice';
import Banner from '../components/Banner';
import MovieSlide from '../components/MovieSlide';

const Home = () => {
  const dispatch = useDispatch();

  const getMovieData = async () => {
    const API_URL = '/movie/popular?language=ko-KR&page=1';
    const res = await api.get(API_URL);
    return res.data.results;
  };

  const getTopRated = async () => {
    const API_URL = '/movie/top_rated?language=ko-KR&page=1';
    const res = await api.get(API_URL);
    return res.data.results;
  };

  const getUpComing = async () => {
    const API_URL = '/movie/upcoming?language=ko-KR&page=1';
    const res = await api.get(API_URL);
    return res.data.results;
  };

  const getGenres = async () => {
    const API_URL = '/genre/movie/list?language=ko';
    const res = await api.get(API_URL);
    return res.data.genres; 
  };

  const fetchData = async () => {
    const popularMovies = await getMovieData();
    const topRatedMovies = await getTopRated();
    const upcomingMovies = await getUpComing();
    const genres = await getGenres();

    dispatch(initData({
      popularMovies,
      topRatedMovies,
      upcomingMovies
    }));

    dispatch(setGenreList(genres)); // 장르 목록도 dispatch
  };

  useEffect(() => {
    fetchData();
  }, [dispatch]);

  const popularMovies = useSelector(state => state.movie.popularMovies);
  const topRatedMovies = useSelector(state => state.movie.topRatedMovies);
  const upcomingMovies = useSelector(state => state.movie.upcomingMovies);
  const genreList = useSelector(state => state.movie.genreList); 

  return (
    <div style={{ backgroundColor: 'black', }}>
      <Banner movie={popularMovies} />
      <MovieSlide 
        popularMovies={popularMovies} 
        topRatedMovies={topRatedMovies} 
        upcomingMovies={upcomingMovies} 
        genreList={genreList} // genreList 전달
      />
    </div>
  );
};

export default Home;
