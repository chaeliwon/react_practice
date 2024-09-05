import React, { useEffect } from 'react';
import api from '../api';
import { useDispatch, useSelector } from 'react-redux';
import { initData } from '../redux/reducers/movieSlice';
import Banner from '../components/Banner';
import MovieSlide from '../components/MovieSlide';

const Home = () => {
  const dispatch = useDispatch();

  const getMovieData = async () => {
    const API_URL = '/movie/popular?language=ko-KR&page=1';
    const res = await api.get(API_URL);
    console.log(res.data);
    return res.data.results; // 결과 반환
  };

  const getTopRated = async () => {
    const API_URL = '/movie/top_rated?language=ko-KR&page=1';
    const res = await api.get(API_URL);
    console.log(res.data);
    return res.data.results; // 결과 반환
  };

  const getUpComing = async () => {
    const API_URL = '/movie/upcoming?language=ko-KR&page=1';
    const res = await api.get(API_URL);
    console.log(res.data);
    return res.data.results; // 결과 반환
  };

  const fetchData = async () => {
    // 에러가 발생해도 따로 처리하지 않음
    const popularMovies = await getMovieData();
    const topRatedMovies = await getTopRated();
    const upcomingMovies = await getUpComing();

    // 받아온 데이터를 dispatch를 통해 리덕스 스토어에 전달
    dispatch(initData({
      popularMovies,
      topRatedMovies,
      upcomingMovies
    }));
  };

  useEffect(() => {
    fetchData();
  }, [dispatch]);

  const popularMovies = useSelector(state=> state.movie.popularMovies);
  const topRatedMovies = useSelector(state=> state.movie.topRatedMovies);
  const upcomingMovies = useSelector(state=> state.movie.upcomingMovies);


  return (
    <div>
      <Banner movie={popularMovies}/>
      <MovieSlide popularMovies={popularMovies} topRatedMovies={topRatedMovies} upcomingMovies={upcomingMovies} />
    </div>
  );
};

export default Home;
