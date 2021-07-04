import React from "react";
import Homebanner from '../component/Homebanner';
import About from '../component/About';
import Featured from '../component/Featured';
import Subscribe from '../component/Subscribe';

import { useLocation  } from "react-router-dom";
import queryString from "query-string";

const Home = (props) => {
    let { search } = useLocation();
    console.log(queryString.parse(search));

    return(
        <>
        
        <Homebanner/>
        <About abt={props.abt}/>
        <Featured/>
        <Subscribe/>
        </>
    )
}

export default Home;