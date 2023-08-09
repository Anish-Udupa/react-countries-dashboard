import './App.css';
import Home from './components/home/Home';
import Header from './components/header/Header';
import { Route, Routes } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import CountryFull from './components/country-full/CountryFull';

function App() {
  return (
    <div id="app">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/country" element={<CountryFull />} />
        </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
