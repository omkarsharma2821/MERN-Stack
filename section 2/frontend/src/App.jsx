import logo from './logo.svg';
import './App.css';
import Home from './components/Home';
import Signup from './components/Signup';
import Login from './components/Login';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NotFound from './components/NotFound';

function App() {
  return (
    <div>
      <h1>My react tab</h1>

        <BrowserRouter>
        {/* rouetes mtlb address create krna */}
         <Routes> 
            <Route path= "/home" element= {<Home />}/>
            <Route path= "/login" element= {<Login />}/>
            <Route path= "/signup" element= {<Signup />}/>
            <Route path= "*" element= {<NotFound />}/>
         </Routes>
        </BrowserRouter>
     
    </div>
  );
}

export default App;
