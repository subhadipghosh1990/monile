import React from 'react';
import Subsform from './Subsform';

const Subscribe = () =>{
    return <section className="Subscribe py-md-5 my-md-3 py-3">

        <div className="container">
            
            <div className="row">
                <div className="col-12 text-center">
                    <h4 className="font-weight-bold secHeader">Subscribe!!</h4>
                    <p>Subscribe to our newsletter so that you could get the exciting news right when they are published.</p>
                </div>
            </div>

            <div className="row justify-content-center pb-0">
                <div className="col-12 text-center">
                    <Subsform/>
                </div>
            </div>

        </div>
        
    </section>
}

export default Subscribe;