import logo from './logo.svg';
import './App.css';
import {BrowserRouter,Routes,Route,} from "react-router-dom";
import Home from './components/home.jsx';
import Signup from './components/signup.jsx';
import Signin from './components/signin.jsx';
import Profilemeet from './components/profilemeet.jsx';



function App() {
  return (
    <>
    <BrowserRouter>
    
    <Routes>
    <Route path="/" element={<Home />} />
   <Route path="/signup" element={<Signup/>}/>
   <Route path="/signin" element={<Signin/>}/>
   <Route path="/profilemeet" element={<Profilemeet/>}/>
   </Routes>
    </BrowserRouter>
   
   </>
  );
}

export default App;
