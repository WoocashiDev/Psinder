import React from 'react'
import { createRoot } from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import HomePage from './components/HomePage';
import SignUp from './components/SignUp';
import Login from './components/Login';
import NavBar from './components/Navbar';
import SetupProfile from './components/SetupProfile';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';

const App=()=>{

    
    return (
        <Router>
        <div>
            <NavBar/>
            <Routes>
                <Route exact path="/setup_profile" element={<SetupProfile/>}/>
                <Route exact path="/signup" element={<SignUp/>}/>
                <Route exact path="/login" element={<Login/>}/>
                <Route exact path="/" element={<HomePage/>}/>
            </Routes>
        </div>
        </Router>

    )
}

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<App tab="home" />);