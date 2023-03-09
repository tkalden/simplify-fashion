import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import CreateOutfit from './CreateOutfit';
import CurrentCloset from './CurrentCloset';
import AddToVirtualCloset from './AddToVirtualCloset';
import Navbar from './Navbar';
import NoPage from './NoPage';
import Home from './Home'
   
function RouterFunction() {
    return (
    <Router>
      <Navbar></Navbar>
      <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/view" element={<CurrentCloset />} />
          <Route path="/create" element={<CreateOutfit />} />
          <Route path="/add" element={<AddToVirtualCloset />} />
          <Route path="*" element={<NoPage />} />
      </Routes>
    </Router>
    
    );
  }
  
  export default RouterFunction;
   
   
   
  