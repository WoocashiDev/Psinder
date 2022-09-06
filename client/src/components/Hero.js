import React from "react";

const Hero = ()=>{
    return(
        <div className="row">
            <div className="col-lg-6 mt-5">
              <h1 className="header-title">Meet new and interesting dogs nearby.</h1>
              <button type="button" className="btn btn-dark btn-lg download-button"><i className="fa-brands fa-apple icons"></i>Download</    button>
              <button type="button" className="btn btn-outline-light btn-lg download-button"><i className="fa-brands fa-google-play   icons"></i>Download</button>
            </div>
            <div className="col-lg-6">
                <img className="iphone-img" src="images/iphone6.png" alt="iphone-mockup"/>
            </div>
        </div>
    )
}

export default Hero