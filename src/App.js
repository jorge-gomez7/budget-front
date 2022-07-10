import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Login from './components/Login';
import Register from './components/Register';
import Home from './components/Home';
import Transfer from './components/Transfer';


function App() {
  return (
    <div className="App">      
      <BrowserRouter>
        <Routes>
            <Route path='/' element={<Login/>}/>
            <Route path='/login' element={<Login/>}/>
            <Route path='/register' element={<Register/>}/>
            <Route path='/home' element={<Home/>}/>
            <Route path='/transfer' element={<Transfer/>}/>
        </Routes>
      </BrowserRouter>  
    </div>
  );
}

export default App;
