import React from 'react'
import { useEffect } from 'react';
import api from '../api'

const Home = () => {
  const getMovieData = async () => {
    const API_URL = '/movie/popular?language=ko-KR&page=1';
    const res = await api.get(API_URL);
    console.log(res.data);
    
  }

  const getTopRated  = async ()=>{
    const API_URL = '/movie/top_rated?language=ko-KR&page=1';
    const res = await api.get(API_URL);
    console.log(res.data);
  }

  const getUpComing = async()=>{
    const API_URL = 'movie/upcoming?language=ko-KR&page=1';
    const res = await api.get(API_URL);
    console.log(res.data);
    
  }

  useEffect(() => {
    getMovieData();
    getTopRated();
    getUpComing();
  }, [])

  return (
    <div>Home</div>
  )
}

export default Home