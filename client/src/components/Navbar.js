import React from 'react'

const NavBar=()=>{
    return (
            
                <nav className="navbar navbar-expand-lg navbar-dark ">
                    
                    <a href="" className="navbar-brand logo">psinder</a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
                        <ul className="navbar-nav">
                            <li className="nav-item ms-3">
                            <a className="nav-link active" aria-current="page" href="#">Home</a>
                            </li>
                            <li className="nav-item ms-3">
                            <a className="nav-link" href="#">Link</a>
                            </li>
                            <li className="nav-item ms-3">
                            <a className="nav-link">Disabled</a>
                            </li>
                        </ul>
                    </div>
                </nav>
    )
}

export default NavBar