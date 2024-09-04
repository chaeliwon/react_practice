import './App.css';
import { useEffect } from 'react';
import api from './api'

function App() {

  const getMovieData =async ()=>{
    const API_URL = '/movie/popular?language=ko-KR&page=1';
    const res = await api.get(API_URL)

    console.log(res.data);
    
  }

  useEffect(()=>{
    getMovieData()
  },[])

  return (
    <div>
      
    </div>
  );
}

export default App;
