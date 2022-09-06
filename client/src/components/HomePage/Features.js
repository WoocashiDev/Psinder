import React from 'react';

const Features = ()=> {
    return(
        <div className="container">
            <div className="row">
                <div className="col-lg-4 features-item">
                    <i className="fa-solid fa-circle-check"></i>
                    <h3>Easy to use.</h3>
                    <p>So easy to use, even your dog could do it.</p>
                </div>
        
                <div className="col-lg-4 features-item">
                    <i className="fa-solid fa-bullseye"></i>
                    <h3>Elite Clientele</h3>
                    <p>We have all the dogs, the greatest dogs.</p>
                </div>
        
                <div className="col-lg-4 features-item">
                    <i className="fa-solid fa-heart"></i>
                    <h3>Guaranteed to work.</h3>
                    <p>Find the love of your dog's life or your money back.</p>
                </div>
            </div>
        </div>
    )
}

export default Features