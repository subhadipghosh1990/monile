import React from 'react';

const Featured = () =>{
    return <section className="Featured d-flex flex-wrap noOverflow position-relative align-items-md-center pb-5 pb-md-0">

        <div className="noOverflow featuredImg">
            <img src={require('../assets/images/featured.jpg').default} className="back cover"  alt="#"/>
        </div>

        <div className="container">

            <div className="row justify-content-end">

                <div className="col-12 col-md-6 pt-3 pt-md-0">
                    <h4 className="font-weight-bold secHeader">Top Mobile of the week</h4>
                    <p className="py-2">È universalmente riconosciuto che un lettore che osserva il layout di una pagina viene distratto dal contenuto testuale se questo è leggibile.</p>
                    <a href="/mobiles" className="btn blck">See all Mobiles</a>
                </div>

                

            </div>

        </div>


        
    </section>
}

export default Featured;