import logo from './logo.svg';
import './App.css';
import Homepage from './components/Homepage';


import{BrowserRouter,Route,Router,Routes } from 'react-router-dom';
import { Contactus } from './components/Contactus';
import Aboutus from './components/Aboutus';

function App() {
  return (
  <BrowserRouter>
 < Routes>
 <Route path='/' element={<Homepage/>}/>
 <Route path='/Contactus' element={<Contactus/>}/>
 <Route path='/Aboutus' element={<Aboutus/>}/>
 </Routes>
  </BrowserRouter>
  );
}

export default App;
