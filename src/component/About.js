import React from 'react';

const About = (props) =>{

    return <section className="About py-md-5 my-md-3 py-3">

        <div className="container">

            <div className="row justify-content-center pb-3">
                <div className="col-md-6 text-center">
                    <h4 className="font-weight-bold pb-3 secHeader">Hot & upcoming Gadgets</h4>
                    <p>È universalmente riconosciuto che un lettore che osserva il layout di una pagina viene distratto dal contenuto testuale se questo è leggibile.</p>
                </div>
            </div>

            <div className="row">

                {props.abt.map((e,i)=>{
                    return (
                        <div className={i < 2 ?"col-md-6 p-2" : "col-md-4 p-2"} key={i}>
                                <div className="position-relative noOverflow singleSec d-flex flex-wrap align-items-end">
                                    <img src={require('../assets/images/'+e.img).default} className="back cover" alt="#"/>

                                    <div className="text-white position-relative p-3">
                                        <h4 className="font-weight-bold secHeader">{e.title}</h4>
                                        <p>{e.content}</p>
                                        <a href="/post" className="btn">Read</a>
                                    </div>
                                </div>
                            </div>
                    )
                })}

            </div>


            <div className="row">
                <div className="col-12 text-center pt-3">
                    <a href="/blogs" className="btn blck">View All</a>
                </div>
            </div>
        </div>
        
    </section>
}

export default About;