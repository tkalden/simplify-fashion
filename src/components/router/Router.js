import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from '../common/Navbar';
import NoPage from '../error/NoPage';
import Home from '../common/Home'
import VirtualCloset from '../closet/VirtualCloset';
import VirtualTryOn from '../closet/VirtualTryOn';
import ClothContext from '../../context/clothContext';
import { useEffect, useContext } from 'react';




function RouterFunction() {
  const clothContext = useContext(ClothContext);
  const { marketClothes, closetClothes, getClosetClothes, getMarketClothes, loading } = clothContext;
  useEffect(() => {
    getClosetClothes();
    getMarketClothes();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  useEffect(() => {
  }, [closetClothes])

  return (
    <Router>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/virtual-try-on" element={<VirtualTryOn marketClothes={marketClothes} loading={loading} />} />
        <Route path="/virtual-closet" element={<VirtualCloset closetClothes={closetClothes} loading={loading} />} />
        <Route path="*" element={<NoPage />} />
      </Routes>
    </Router>

  );
}

export default RouterFunction;



