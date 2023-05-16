import {Routes,Route,BrowserRouter} from 'react-router-dom'

import Login from './components/Login'
import Register from './components/Register'
import Home from './components/Home';

import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element = {<Home/>}></Route>
          <Route exact path="/login" element = {<Login/>}></Route>
          <Route exact path="/register" element = {<Register/>}></Route>
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
