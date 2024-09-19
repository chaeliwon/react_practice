import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Join from './pages/Join';
import Login from './pages/Login';
import Content from './components/Content';
import Footer from './components/Footer';
import { useState } from 'react';

function App() {

  const [nick, setNick] = useState(null);

  return (
    <div className='App'>
      <Header nick={nick} setNick={setNick} />
      <Routes>
        <Route path='/' element={<Content />} />
        <Route path='/join' element={<Join />} />
        <Route path='/login' element={<Login setNick={setNick} />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
