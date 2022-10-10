import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
          <Routes>
            <Route path='/' element={ <Home /> } />
            <Route path='/Home' element={ <Home /> } />
          </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
