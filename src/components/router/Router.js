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
  const { getClosetClothes, getMarketClothes } = clothContext;
  useEffect(() => {
    getClosetClothes();
    getMarketClothes();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  //closet-cart doesn't resets its newClothingList when the its page is loaded. Need to figure out how to pass the data without getting reset.
  //for now we can add the component within virtual try on 
  return (
    <Router>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/virtual-try-on" element={<VirtualTryOn />} />
        <Route path="/virtual-closet" element={<VirtualCloset />} />
        <Route path="*" element={<NoPage />} />
      </Routes>
    </Router>
  );
}

export default RouterFunction;



