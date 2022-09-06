import React from 'react'

const Pricing = () => {
    return(
        <section id="pricing">
            <div className="container">
            <h2>A Plan for Every Dog's Needs</h2>
            <p>Simple and affordable price plans for your and your dog.</p>
            <div className="row row-cols-1 row-cols-md-3">
            <div className="col">
            <div className="card price-card">
            <div className="card-header">
                <h3>Chihuahua</h3>
            </div>
            <div className="card-body">
                <h2>Free</h2>
                <p>5 Matches Per Day</p>
                <p>10 Messages Per Day</p>
                <p>Unlimited App Usage</p>
                <button className="btn btn-outline-primary price-btn" type="button">Sign Up</button>
            </div>
            </div>
            </div>
            <div className="col">
            <div className="card price-card">
            <div className="card-header">
                <h3>Labrador</h3>
            </div>
            <div className="card-body">
                <h2>$49 / mo</h2>
                <p>Unlimited Matches</p>
                <p>Unlimited Messages</p>
                <p>Unlimited App Usage</p>
                <button className="btn btn-outline-primary price-btn" type="button">Sign Up</button>
            </div>
            </div>
            </div>
            <div className="col">
            <div className="card price-card">
            <div className="card-header">
                <h3>Mastiff</h3>
            </div>
            <div className="card-body">
                <h2>$99 / mo</h2>
                <p>Pirority Listing</p>
                <p>Unlimited Matches</p>
                <p>Unlimited Messages</p>
                <p>Unlimited App Usage</p>
                <button className="btn btn-outline-primary price-btn" type="button">Sign Up</button>
            </div>
            </div>
        </div>
        </div>
        </div>
    
      </section>
    )
}

export default Pricing