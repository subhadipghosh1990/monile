import React, {useState, useEffect} from "react";
// import {useAuth0} from '@auth0/auth0-react';
import { useHistory } from "react-router-dom";
import GoogleLogin from "react-google-login";

const Signup = (props) => {
    let history = useHistory();
    // const { user, isAuthenticated, isLoading } = useAuth0();
    // const {loginWithRedirect} = useAuth0();
    // const {logout} = useAuth0();

    // useEffect(()=>{
    //     console.log(user);
    // },[])

    

    useEffect(()=>{

        //console.log(props);

        if(localStorage.getItem("log_token")){
            history.push("/");
        }


    });


    const [fname, setfName] = useState("");
    const [lname, setlName] = useState("");
    const [uname, setuName] = useState("");
    const [mail, setMail] = useState("");
    const [pw, setPw] = useState("");
    const [dp, setDp] = useState({});

    const [sign, setsign] = useState(false);

    const toggleForm = (event) => {
        event.preventDefault();
        setsign(prev => prev = !prev)
    }

    let responseGoogle = (response) => {

        //console.log(response);
    
        if(response){

            let userGoogleData = {
            email: response.profileObj.email,
            familyName: response.profileObj.familyName,
            givenName: response.profileObj.givenName,
            googleId: response.profileObj.googleId,
            imageUrl: response.profileObj.imageUrl,
            name: response.profileObj.name
          }
    
          //console.log(userGoogleData);
    
          props.getUser(userGoogleData);


        }

          
    
      }

    return(
        

        <section className="fullHt-header-footer d-flex flex-wrap justify-content-center align-items-center">

<div className="fullHt-header-footer d-flex flex-wrap justify-content-center align-items-center">

        </div>


            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-5 p-md-3">

                        <div className="border">

                            <form className={sign ? "d-none p-3" : "d-block p-3"} onSubmit={(event) => props.signUp(event, fname, lname, uname, mail, pw, dp)}>

                                <h4 className="border-bottom pb-3 mb-3">Sign Up</h4>

                                <div className="row">                                    

                                    <div className="col-12 form-group">
                                        <input placeholder="First Name" className="form-control" onChange={(event) => setfName( event.target.value)} required/>
                                    </div>

                                    <div className="col-12 form-group">
                                        <input placeholder="Last Name" className="form-control" onChange={(event) => setlName(event.target.value)} required/>
                                    </div>

                                    <div className="col-12 form-group">
                                        <input placeholder="Username" className="form-control" onChange={(event) => setuName(event.target.value)} required/>
                                    </div>

                                    <div className="col-12 form-group">
                                        <input placeholder="Email" className="form-control" type="email" onChange={(event) => setMail(event.target.value)} required/>
                                    </div>

                                    <div className="col-12 form-group">
                                        <input placeholder="Password" className="form-control" type="password" onChange={(event) => setPw(event.target.value)} required/>
                                    </div>

                                    <div className="col-12 form-group">
                                        <input type="file" className="form-control" onChange={(event) => setDp(event.target.files[0])}/>
                                    </div>

                                    <div className="col-12 form-group">
                                        <button className="btn btn-success w-50">Sign up</button>
                                        {/* <a href="#" className="btn gmailLogin w-50" onClick = {() => loginWithRedirect()} > <i className="fa fa-google" aria-hidden="true"></i> Login </a>  */}
                                        <GoogleLogin
                                            clientId="281769930379-aahh9s91jb57mbob409gvkdsfkkaa413.apps.googleusercontent.com"
                                            render={renderProps => (
                                            <button className="btn gmailLogin w-50" onClick={renderProps.onClick} disabled={renderProps.disabled}><i className="fa fa-google" aria-hidden="true"></i> Login</button>
                                            )}
                                            buttonText="Login"
                                            onSuccess={responseGoogle}
                                            onFailure={responseGoogle}
                                            cookiePolicy={'single_host_origin'}
                                        />


                                    </div>
                                    <div className="col-12 form-group text-center mb-0">
                                        <p className="toggleForm btn text-dark" onClick = {(event) =>toggleForm(event)} > <small>Login</small> </p> 
                                    </div>
                                </div>
                            </form>


                            <form className={!sign ? "d-none p-3" : "d-block p-3"} onSubmit={(event) => props.signIn(event, mail, pw)}>

                                <h4 className="border-bottom pb-3 mb-3">Login</h4>

                                <div className="row">                                    

                                    <div className="col-12 form-group">
                                        <input placeholder="Email" className="form-control" type="email" onChange={(event) => setMail(event.target.value)} required/>
                                    </div>

                                    <div className="col-12 form-group">
                                        <input placeholder="Password" className="form-control" type="password" onChange={(event) => setPw(event.target.value)} required/>
                                    </div>

                                    <div className="col-12 form-group">
                                        <button className="btn btn-success w-50">Login</button>
                                        {/* <a href="#" className="btn gmailLogin w-50" onClick = {() => loginWithRedirect()} > <i className="fa fa-google" aria-hidden="true"></i> Login </a>  */}
                                        <GoogleLogin
                                            clientId="281769930379-aahh9s91jb57mbob409gvkdsfkkaa413.apps.googleusercontent.com"
                                            render={renderProps => (
                                            <button className="btn gmailLogin w-50" onClick={renderProps.onClick} disabled={renderProps.disabled}><i className="fa fa-google" aria-hidden="true"></i> Login</button>
                                            )}
                                            buttonText="Login"
                                            onSuccess={responseGoogle}
                                            onFailure={responseGoogle}
                                            cookiePolicy={'single_host_origin'}
                                        />
                                    </div>

                                    <div className="col-12 form-group text-center mb-0">
                                    <p className="toggleForm btn text-dark" onClick = {(event) =>toggleForm(event)} > <small>Login</small> </p> 
                                    </div>
                                </div>
                            </form>

                        </div>

                    </div>
                </div>
            </div>
        </section>


    )
}

export default Signup;