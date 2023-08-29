import logo from './logo.svg';
import './App.css';
import Home from './components/Home';
import Signup from './components/Signup';
import Login from './components/Login';

function App() {
  return (
    <div>
      <h1>My react tab</h1>

      <Home />
      
        <Signup />

        <Login />
     
    </div>
  );
}

export default App;
