import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import CreateOutfit from '../closet/CreateOutfit';
import CurrentCloset from '../closet/CurrentCloset';
import AddToVirtualCloset from '../closet/AddToVirtualCloset';
import Navbar from '../common/Navbar';
import NoPage from '../error/NoPage';
import Home from '../common/Home'

function RouterFunction() {
  return (
    <Router>
      <Navbar></Navbar>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/view" element={<CurrentCloset />} />
        <Route path="/create" element={<CreateOutfit outfit="Dress" />} />
        <Route path="/add" element={<AddToVirtualCloset />} />
        <Route path="*" element={<NoPage />} />
      </Routes>
    </Router>

  );
}

export default RouterFunction;



