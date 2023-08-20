import './App.css';
import Home from './components/home/Home';
import Header from './components/header/Header';
import { Route, Routes } from 'react-router';
import CountryFull from './components/country-full/CountryFull';

function App() {
  return (
    <div id="app">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/country" element={<CountryFull />} />
          <Route path="/abc" element={<Error1 />} />
        </Routes>
    </div>
  );
}

export default App;
