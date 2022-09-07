import React from 'react';
import {Link} from 'react-router-dom';
import {useAuth, logout} from '../auth';

const LoggedInLinks =()=>{
    return(
        <>
        <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
            <ul className="navbar-nav">
                <li className="nav-item ms-3">
                    <a href="#" className="nav-link" onClick={()=>{logout()}}>Logout</a>
                </li>
            </ul>
        </div>
        </>
    )
}

const LoggedOutLinks=()=>{
    return(
        <>
        <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
            <ul className="navbar-nav">
                <li className="nav-item ms-3">
                    <Link to="/signup" className="nav-link" aria-current="page" >Sign up</Link>
                </li>
                <li className="nav-item ms-3">
                    <Link to="/login" className="nav-link">Login</Link>
                </li>
            </ul>
        </div>
        </>
    )
}

const NavBar=()=>{

    const [logged]=useAuth();
    console.log(logged)

    return (
        <section className="title">
            <div className="container">
                <nav className="navbar navbar-expand-lg navbar-dark ">
                    
                        <Link to="/" className="navbar-brand logo">psinder</Link>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                        </button>
                        {logged?<LoggedInLinks/>:<LoggedOutLinks/>}
                </nav>
                </div>
                </section>
    )
}

export default NavBar