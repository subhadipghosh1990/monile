import React from 'react';

//assets
import '../../node_modules/bootstrap/dist/css/bootstrap.css';
import '../assets/style.css';

// import GoogleLogin from "react-google-login";
//components
import Navbar from '../component/Navbar';
import Home from './Home';
import Footer from '../component/Footer';

import Signup from '../component/Signup';
import News from '../component/News';
import Userdash from '../component/Userdash';

//blogs component
import Writeblog from '../component/Writeblog';
import Blogs from '../component/Blogs';
import ReadBlog from '../component/ReadBlog';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import axios from 'axios';
import qs from 'qs';

class App extends React.Component{
  constructor() {
    super()
      this.state = {
        abt:[
          {
            img:"b1.jpg",
            title:"riconosciuto che un lettore",
            content:"È universalmente riconosciuto che un lettore che osserva il layout di una pagina viene distratto dal contenuto testuale se questo è leggibile."
          },
          {
            img:"b2.jpg",
            title:"riconosciuto che un lettore",
            content:"È universalmente riconosciuto che un lettore che osserva il layout di una pagina viene distratto dal contenuto testuale se questo è leggibile."
          },
          {
            img:"b3.jpg",
            title:"riconosciuto che un lettore",
            content:"È universalmente riconosciuto che un lettore che osserva il layout di una pagina viene distratto dal contenuto testuale se questo è leggibile."
          },
          {
            img:"b4.jpg",
            title:"riconosciuto che un lettore",
            content:"È universalmente riconosciuto che un lettore che osserva il layout di una pagina viene distratto dal contenuto testuale se questo è leggibile."
          },
          {
            img:"b5.jpg",
            title:"riconosciuto che un lettore",
            content:"È universalmente riconosciuto che un lettore che osserva il layout di una pagina viene distratto dal contenuto testuale se questo è leggibile."
          }
        ],
        blogs:[
          {
            title:"Blog Title", date:"1, Jan, 2021",
            subHeader:"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
            content:"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
            imgs:["b1.jpg","b2.jpg","b3.jpg","b4.jpg","b5.jpg"],
            featuredImg:"b1.jpg", author:"Subhadip Ghosh",comments:5
          },
          {
            title:"Blog Title", date:"1, Jan, 2021",
            subHeader:"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
            content:"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
            imgs:["b1.jpg","b2.jpg","b3.jpg","b4.jpg","b5.jpg"],
            featuredImg:"b1.jpg", author:"Subhadip Ghosh",comments:5
          },
          {
            title:"Blog Title", date:"1, Jan, 2021",
            subHeader:"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
            content:"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
            imgs:["b1.jpg","b2.jpg","b3.jpg","b4.jpg","b5.jpg"],
            featuredImg:"b1.jpg", author:"Subhadip Ghosh",comments:5
          },
          {
            title:"Blog Title", date:"1, Jan, 2021",
            subHeader:"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
            content:"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
            imgs:["b1.jpg","b2.jpg","b3.jpg","b4.jpg","b5.jpg"],
            featuredImg:"b1.jpg", author:"Subhadip Ghosh",comments:5
          },
          {
            title:"Blog Title", date:"1, Jan, 2021",
            subHeader:"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
            content:"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
            imgs:["b1.jpg","b2.jpg","b3.jpg","b4.jpg","b5.jpg"],
            featuredImg:"b1.jpg", author:"Subhadip Ghosh",comments:5
          },
          {
            title:"Blog Title", date:"1, Jan, 2021",
            subHeader:"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
            content:"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
            imgs:["b1.jpg","b2.jpg","b3.jpg","b4.jpg","b5.jpg"],
            featuredImg:"b1.jpg", author:"Subhadip Ghosh",comments:5
          },
          {
            title:"Blog Title", date:"1, Jan, 2021",
            subHeader:"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
            content:"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
            imgs:["b1.jpg","b2.jpg","b3.jpg","b4.jpg","b5.jpg"],
            featuredImg:"b1.jpg", author:"Subhadip Ghosh",comments:5
          },
          {
            title:"Blog Title", date:"1, Jan, 2021",
            subHeader:"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
            content:"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
            imgs:["b1.jpg","b2.jpg","b3.jpg","b4.jpg","b5.jpg"],
            featuredImg:"b1.jpg", author:"Subhadip Ghosh",comments:5
          },
          {
            title:"Blog Title", date:"1, Jan, 2021",
            subHeader:"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
            content:"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
            imgs:["b1.jpg","b2.jpg","b3.jpg","b4.jpg","b5.jpg"],
            featuredImg:"b1.jpg", author:"Subhadip Ghosh",comments:5
          },
          {
            title:"Blog Title", date:"1, Jan, 2021",
            subHeader:"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
            content:"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
            imgs:["b1.jpg","b2.jpg","b3.jpg","b4.jpg","b5.jpg"],
            featuredImg:"b1.jpg", author:"Subhadip Ghosh",comments:5
          },
          {
            title:"Blog Title", date:"1, Jan, 2021",
            subHeader:"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
            content:"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
            imgs:["b1.jpg","b2.jpg","b3.jpg","b4.jpg","b5.jpg"],
            featuredImg:"b1.jpg", author:"Subhadip Ghosh",comments:5
          }

        ],
        topics:["mobiles", "tablets", "gadgets", "upcoming"],
        user:{},
        log_status: false,
        blogsList:[],
        userBlogs:[],
        singleBlogSelected:{},
        selectedBlog:{}
      }
  }


  componentDidMount(){
    this.checkLog();
    this.checkBlogs();
    this.userBlogs();
  }

  checkBlogs = () => {
    axios.post("http://localhost:8080/blogs")
    .then(e => {
      console.log(e.data);
      this.setState({
        blogsList:e.data
      })
    })
  }

  userBlogs = () =>{

    if(localStorage.getItem("userid")){

      let author_id = localStorage.getItem("userid");

      var authr = new FormData();
      authr.append("author_id", author_id);
      
      var userBlogs = [];

      axios.post("http://localhost:8080/Authorblogs", authr)
      .then(e => {
        console.log(e.data);
        userBlogs = e.data;
        this.setState({
          userBlogs:userBlogs
        })
      });

    }    
  }

  checkLog = () => {
    if(localStorage.getItem("log_token")){
      console.log(localStorage.getItem("log_token"));

      let aa = new FormData();
      aa.append("token", localStorage.getItem("log_token"));
      
      axios.post("http://localhost:8080/session", aa)
      .then(e => {
        console.log(e.data);
        if(e.data.user){
          this.setState({
            user:e.data.user,
            log_status: true
          });
        }
        else{
          localStorage.removeItem("log_token");
          //setLogged(false);
          this.setState({
            user:{},
            log_status: false
          });
        }

      })
    }
  }

  getUser = (e) => {
      console.log(e);


      // email: "subhadipg990@gmail.com"
      // familyName: "Ghosh"
      // givenName: "Subhadip"
      // googleId: "116461957177679443726"
      // imageUrl: "https://lh4.googleusercontent.com/-HuQtHMNsdZQ/AAAAAAAAAAI/AAAAAAAAAAA/AMZuucmTYwnUA212mbfNq_zKpcvsdRsnpQ/s96-c/photo.jpg"
      // name: "Subhadip Ghosh"


      let userDetails={
          first_name:e.givenName,	
          last_name:e.familyName,	
          user_name:e.name,	
          email:e.email,	
          mobile:"",	
          password:"",	
          user_img:e.imageUrl	
      }

      console.log(qs.stringify(userDetails));
      

      axios.post("http://localhost:8080/signupgmail", qs.stringify(userDetails))
      .then(e => {
        console.log(e.data);
        localStorage.setItem("log_token", e.data.log_token);
        this.setState({
          user:e.data.user,
          log_status: true
        });
      })

  }

  logout = () =>{

      let aa = new FormData();
      aa.append("token", localStorage.getItem("log_token"));
      
      axios.post("http://localhost:8080/logout", aa)
      .then(e => {
        console.log(e.data);

        if(e.data === "logged out"){            
          localStorage.removeItem("log_token");
          //setLogged(false);
          this.setState({
            user:{},
            log_status: false
          });
        }
      });
      

  }

  signUp = (event, fname, lname, uname, mail, pw, dp) => {
      event.preventDefault();

      let signup = new FormData();

      signup.append("fname", fname);
      signup.append("lname", lname);
      signup.append("uname", uname);
      signup.append("mail", mail);
      signup.append("pw", pw);
      signup.append("dp", dp);
      signup.append("log_time", "");
      signup.append("log_status", "false");
      signup.append("log_token", "");      

      axios.post("http://localhost:8080/signup", signup)
      .then(e => {
        console.log(e.data);

        if(e.data.statue === "done"){
          alert("signed up!");
        }

      })

  }

  changePassword = (event, e, f) => {
    event.preventDefault();

    let pw = new FormData();

    pw.append("id", e);
    pw.append("pw", f);

    axios.post("http://localhost:8080/password", pw)
    .then(e => {
      console.log(e.data);
    })
  }

  signIn = (event, mail, pw) =>{
      event.preventDefault();

      let signin = new FormData();

      signin.append("mail", mail);
      signin.append("pw", pw);

      axios.post("http://localhost:8080/login", signin)
      .then(e => {
        console.log(e.data);

          if(e.data === "gmail user"){
              console.log("gmail user");
          }
          else if(e.data === "no user foud"){
              console.log("wrong credentials");              
          }
          else{
              console.log("logged in");
              localStorage.setItem("log_token", e.data.log_token);
              localStorage.setItem("userid", e.data.user.id);
              //history.push("/");
              this.setState({
                user:e.data.user,
                log_status: true
              });
          }

      })

  }


  singleBlog = (e) => {
    var singleBlog = new FormData();

    singleBlog.append("id", e);

    axios.post("http://localhost:8080/single", singleBlog)
    .then(e =>{
      console.log(e.data);

      this.setState({
        singleBlogSelected:e.data
      })

    })

  }


  delPost = (e) =>{

    console.log(e);

    let blogId = new FormData();

    blogId.append("id", e);

    axios.post("http://localhost:8080/del", blogId)
    .then(e => {
        console.log(e.data);
    })

}


  render() {
      return (
        <>
        <Navbar           
          user = {this.state.user} 
          checkLog = {this.checkLog} 
          log_status = {this.state.log_status} 
          logout={this.logout}
        />

            

          <Router>
              <Switch>
                {/* <Route path="/" component={Home} exact /> */}
                <Route path="/" exact>
                  <Home abt = {this.state.abt}/>
                </Route>
                <Route path="/signup">
                  <Signup signIn={this.signIn} signUp={this.signUp} getUser = {this.getUser} />
                </Route>
                <Route path="/top-places">
                  <News blogs={this.state.blogs} topics={this.state.topics}/>
                </Route>
                <Route path="/user">
                  <Userdash
                    changePassword={this.changePassword} 
                    user = {this.state.user} 
                    log_status = {this.state.log_status} 
                    logout={this.logout} 
                    checkBlogs ={this.checkBlogs}
                    userBlogsList={this.state.userBlogs}
                    selectedBlogforEditFunc={this.selectedBlogforEditFunc}
                    delPost={this.delPost}
                  />
                </Route>

                <Route path="/writeblog">
                  <Writeblog user = {this.state.user} />
                </Route>

                <Route path="/blogs">
                  <Blogs blogsList={this.state.blogsList} checkBlogs ={this.checkBlogs}/>
                </Route>

                <Route path="/readBlog">
                  <ReadBlog blogsList={this.state.blogsList} checkBlogs ={this.checkBlogs} singleBlog={this.singleBlog} singleBlogSelected={this.state.singleBlogSelected}/>
                </Route>

                

            </Switch>
          </Router>



        <Footer/>
        </>
      )    
  }

}

export default App;
