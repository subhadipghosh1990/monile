import React, {useState, useEffect} from 'react';

// import {useAuth0} from '@auth0/auth0-react';


const Navbar = (props) =>{
    // const { user, isAuthenticated, isLoading } = useAuth0();
    //const { user, isAuthenticated } = useAuth0();
    // const {loginWithRedirect} = useAuth0();
    // const {logout} = useAuth0();

    let [menu, setMenu] = useState(false);

    let toggle = () => {
        setMenu(prev => prev=!prev);
    }


    useEffect(()=>{
    },[]);

    return <header className="sticky-top py-2 py-md-0">


        <div className="container-fluid">

            {/* <div className="row">
                <div className="col-12">
                    {JSON.stringify(props.user)}
                </div>
            </div> */}

            <div className="row align-items-center">

            <div className="col-md-3 d-flex flex-wrap justify-content-between">
                <div>
                <a href="/" className="d-block"><img src={require('../assets/images/logo.png').default} className="img-fluid navLogo" alt="#"/></a>
                </div>
                
                <button onClick={toggle} className={menu ? "d-md-none menuToggleBtn rotateNow" : "d-md-none menuToggleBtn"}><i className ="fa fa-bars" aria-hidden="true"></i></button>

            </div>

            <div className="col-md-9">
                <nav className={menu ? "noOverflow showMenu" : "noOverflow"}>
                    <ul className="p-0 m-0 d-md-flex flex-wrap justify-content-end">
                        <li><a href="/" className="d-block pl-0 pl-md-3 pr-3 pt-3 pb-3">Home</a></li>
                        <li><a href="/top-places" className="d-block pl-0 pl-md-3 pr-3 pt-3 pb-3">Top Places</a></li>
                        <li><a href="/blogs" className="d-block pl-0 pl-md-3 pr-3 pt-3 pb-3">Blogs</a></li>
                        <li><a href="/news/gadgets" className="d-block pl-0 pl-md-3 pr-3 pt-3 pb-3">Gadget News</a></li>
                        {/* <li>
                            <a href="/signup" className="d-block pl-0 pl-md-3 pr-3 pt-3 pb-3"> <i className="fa fa-user-o" aria-hidden="true"></i> </a>
                        </li> */}

                        {!props.log_status ?
                        
                        <li>
                            <a href="/signup" className="d-block pl-0 pl-md-3 pr-3 pt-3 pb-3"> <i className="fa fa-user-o" aria-hidden="true"></i> </a>
                        </li>
                        
                        :
                        null
                        }


                        {/* <li>
                            <button className="d-block pl-0 pl-md-3 pr-3 pt-3 pb-3" onClick={props.logout}>logout</button>
                        </li> */}


                        {props.log_status ?
                        
                        <li>
                            <a href="/user" className="p-0 userImg noOverflow position-relative" >
                                <img src={props.user.user_img} className=""  alt="#"/>
                            </a>  

                            <ul>
                                <li><a href="/user" className="d-block pl-0 pl-md-3 pr-3 pt-3 pb-3">Dashboard</a></li>
                                <li><button className="d-block w-100" onClick={props.logout}>logout</button></li>
                            </ul>

                        </li>
                        
                        :
                        null
                        }
                        


                    </ul>
                </nav>
            </div>

            </div>

        </div>


        
    </header>
}

export default Navbar;