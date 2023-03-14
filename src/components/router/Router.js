import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from '../common/Navbar';
import NoPage from '../error/NoPage';
import Home from '../common/Home'
import VirtualTryOn from '../closet/VirtualTryOn';
import { CLOTHING } from '../../static/helper/constant'
import { useState } from 'react'
import VirtualCloset from '../closet/VirtualCloset';


function RouterFunction() {
  const [currentClothing, updateCurrentClothing] = useState(CLOTHING);
  console.log(currentClothing)
  return (
    <Router>
      <Navbar></Navbar>
      <VirtualCloset currentClothing={currentClothing} />
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/virtual-try-on" element={<VirtualTryOn updateCurrentClothing={updateCurrentClothing} />} />
        <Route path="/virtual-closet" element={<VirtualCloset currentClothing={currentClothing} />} />
        <Route path="*" element={<NoPage />} />
      </Routes>
    </Router>

  );
}

export default RouterFunction;



