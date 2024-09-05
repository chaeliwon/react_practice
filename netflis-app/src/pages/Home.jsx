import React from 'react'
import { useEffect } from 'react';
import api from '../api'
import { useDispatch } from 'react-redux';
import { initData } from '../redux/reducers/movieSlice';

const Home = () => {
  const dispatch = useDispatch();

  const getMovieData = async () => {
    const API_URL = '/movie/popular?language=ko-KR&page=1';
    const res = await api.get(API_URL);
    console.log(res.data);
    return res.data.results;  // 데이터를 반환
  }

  const getTopRated = async () => {
    const API_URL = '/movie/top_rated?language=ko-KR&page=1';
    const res = await api.get(API_URL);
    console.log(res.data);
    return res.data.results;  // 데이터를 반환
  }

  const getUpComing = async () => {
    const API_URL = '/movie/upcoming?language=ko-KR&page=1';
    const res = await api.get(API_URL);
    console.log(res.data);
    return res.data.results;  // 데이터를 반환
  }

  const fetchData = async () => {
    try {
      // 각 함수에서 데이터를 받아옵니다.
      const popularMovies = await getMovieData();
      const topRatedMovies = await getTopRated();
      const upcomingMovies = await getUpComing();

      // 받은 데이터를 dispatch로 전달합니다.
      dispatch(initData({
        popularMovies,
        topRatedMovies,
        upcomingMovies
      }));

    } catch (error) {
      console.error('Error fetching movie data:', error);
    }
  };

  useEffect(() => {
    fetchData();
  }, [dispatch]);

  return (
    <div>Home</div>
  )
}

export default Home