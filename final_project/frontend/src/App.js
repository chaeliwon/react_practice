import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Join from './pages/Join';
import Login from './pages/Login';
import Content from './components/Content';
import Footer from './components/Footer';

function App() {
  return (
    <div className='App'>
      <Header />
      <Routes>
        <Route path='/' element={<Content />} />
        <Route path='/join' element={<Join />} />
        <Route path='/login' element={<Login />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
