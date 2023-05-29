import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Login from './components/Login';
import Register from './components/Register';
import Home from './components/Home';
<<<<<<< HEAD
import Donor from './components/Donation/Donor'
import Request from './components/Request/Request'
import About from './components/About/About'
import Contact from './components/Contact/Contact';
import NoMatch from './components/NoMatch';
=======
import AboutUs from './components/AboutUs';
>>>>>>> fa20d1596674d6fd8d160a2e760f467a1aa42cc4

import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
<<<<<<< HEAD
          <Route exact path="/" element = {<Home/>}></Route>
          <Route exact path="/login" element = {<Login/>}></Route>
          <Route exact path="/register" element = {<Register/>}></Route>
          <Route exact path="/donations" element = {<Donor/>}></Route>
          <Route exact path='/request' element = {<Request/>}></Route>
          <Route exact path="/contact" element = {<Contact/>}></Route>
          <Route exact path='/about' element = {<About/>}></Route>
          <Route exact path="*" element = {<NoMatch/>}></Route>
        </Routes>
      </BrowserRouter>

      {/* <Card/> */}
=======
          <Route path="/" element={<Home />} />
          <Route path="/aboutUs" element={<AboutUs />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          </Routes>
      </BrowserRouter>
>>>>>>> fa20d1596674d6fd8d160a2e760f467a1aa42cc4
    </div>
  );
}

export default App;
