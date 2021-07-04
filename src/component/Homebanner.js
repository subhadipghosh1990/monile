import React from 'react';

const Homebanner = () =>{
    return <section className="Homebanner d-flex flex-wrap align-items-center noOverflow position-relative">

        <img src={require('../assets/images/banner.jpg').default} className="back cover"  alt="#"/>

        <div className="container">

            <div className="row">

                <div className="col-12 col-md-6 text-white">
                    <h1 className="">Know Your Mobile</h1>
                    <p className="py-2">È universalmente riconosciuto che un lettore che osserva il layout di una pagina viene distratto dal contenuto testuale se questo è leggibile.</p>
                    <a href="/mobiles" className="btn">See all Mobiles</a>
                </div>

            </div>

        </div>


        
    </section>
}

export default Homebanner;