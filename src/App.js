
import './App.css';
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar1 from './components/Navbar';
import Navigation from './components/Navigation';
import Movies from './components/Movies';
import Slider from './components/Slider';
import Bookticket from './components/Bookticket';
import SignUp from './components/SignUp';


function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<><Navbar1/> <Navigation/> <Slider/> <Movies/> </>}/>
        <Route path='/movies' element={<Movies/>}/>
        <Route path='/bookingblack' element={<Bookticket name='black'/>}/>
        <Route path='/bookingbhediya' element={<Bookticket name='bhediya'/>}/>
        <Route path='/signup' element={<SignUp/>}/>
      </Routes>
    </Router>
    
  );
}

export default App;
