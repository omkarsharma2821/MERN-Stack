import logo from './logo.svg';
import './App.css';
import Home from './components/Home';
import Signup from './components/Signup';
import Login from './components/Login';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import NotFound from './components/NotFound';
import Navbar from './components/Navbar';
import EventHandling from './components/EventHandling';
import StateManagement from './components/StateManagement';

function App() {
  return (
    <div>
      {/* <h1>My react tab</h1> */}

        <BrowserRouter>
        {/* rouetes mtlb address create krna */}
        {/* <Link to ="/login">Login</Link> */}
        {/* <Link to ="/signup">Signup</Link> */}
        <Navbar />
         <Routes> 
            <Route path= "/" element= {<Home />}/>
            <Route path= "/login" element= {<Login />}/>
            <Route path= "/signup" element= {<Signup />}/>
            <Route path= "/event" element= {<EventHandling />}/>
            <Route path= "/state" element= {<StateManagement />}/>
            <Route path= "*" element= {<NotFound />}/>
         </Routes>
        </BrowserRouter>
     
    </div>
  );
}

export default App;
