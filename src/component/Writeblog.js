import React, {useState, useEffect} from "react";
import Ckedit from '../component/Ckedit';
import { useHistory } from "react-router-dom";
import '../assets/blog-style.css';

import axios from "axios";

const Writeblog = (props) => {
    let history = useHistory();
    const [blogHeadTxt, setblogHeadTxt] = useState({});
    const [blogbodyTxt, setblogbodyTxt] = useState({});
    const [blogImg, setBlogImg] = useState({});
    const [blogImgPrev, setBlogImgPrev] = useState("");


    useEffect(()=>{
        if(!localStorage.getItem("log_token")){
            history.push("/signup");
        }


        //console.log(props);
    });

    let blogHead = (e) => {
        //console.log(e);
        setblogHeadTxt(prev => prev = e);
    }

    let blogBody = (e) => {
        //console.log(e);
        setblogbodyTxt(prev => prev = e);
    }

    let getfile = (event) => {
        //console.log(event.target.files[0]);
        setBlogImg(prev => prev = event.target.files[0]);

        var file = event.target.files[0];

        if(file){
            let reader = new FileReader();

            console.log(file);

            let url = reader.readAsDataURL(file);

            reader.addEventListener("load", () => {
                setBlogImgPrev(reader.result);
            });

            //reader.readAsDataURL(file)
        }
    }

    let getpostData = (event) => {
        event.preventDefault();

        // console.log(blogHeadTxt);
        // console.log(blogbodyTxt);
        //console.log(blogImg);

        console.log(props.user);


        let post = new FormData();

        post.append("header", blogHeadTxt.data);
        post.append("body", blogbodyTxt.data);
        post.append("feature", blogImg);
        post.append("author_id", props.user.id);

        axios.post("http://localhost:8080/newpost", post)
        .then(e => {
            console.log(e.data);
        })
    }


    let updateBlogPost = (event) => {
        event.preventDefault();

        let post = new FormData();

        post.append("header", blogHeadTxt.data);
        post.append("body", blogbodyTxt.data);
        post.append("feature", blogImg);
        post.append("author_id", props.user.id);
        post.append("blogId", props.selectedBlog.id);

        axios.post("http://localhost:8080/updateblog", post)
        .then(e => {
            console.log(e.data);
        })
    }

    
    

    return(
        <section className="fullHt-header-footer d-flex flex-wrap justify-content-center align-items-center noOverflow">

            {JSON.stringify(props.singleBlogSelected)}

            {JSON.stringify(props.selectedBlogforEdit)}

            <div className="container-fluid">

                <div className="row">
                    <div className="col-lg-8">

                        <form onSubmit={props.selectedBlog ? (event) => {updateBlogPost(event)} :(event) => getpostData(event)}>
                            
                            <div className="d-flex flex-wrap justify-content-between align-items-center pb-3">
                                <div
                                    dangerouslySetInnerHTML={{
                                        __html: blogHeadTxt.data
                                    }} className="w-75 pr-3">
                                </div>
                                <button className="btn btn-success">{props.selectedBlog ? "Update" : "Submit"}</button>
                            </div>

                            <div className="position-relative">
                                <div className="blogBannerImg position-relative selectBlogImg d-flex flex-wrap justify-content-center align-items-center">

                                {blogImgPrev.length > 0 ? <img src={blogImgPrev} className="back cover" alt="#"/> : <p className={props.selectedBlog ? "d-none" : ""}>Select Img for the blog</p>}
                                
                                {props.selectedBlog ? <img src={props.selectedBlog.feature} className={blogImgPrev.length > 0 ? "d-none" :"back cover"} alt="#"/> : null}

                                
                                </div>     
                                <input  className="form-control w-100 border-0" 
                                type="file" 
                                // onChange={(event) => setBlogImg(prev => prev = event.target.files[0])}
                                onChange={(event) => getfile(event)}
                                />
                            </div>
                            
                            <p className="d-flex justify-content-between py-3 small"><i>26.11.1999</i> <span>Author</span></p>
                            
                            <hr/>
                            

                            <div
                                dangerouslySetInnerHTML={{
                                    __html: blogbodyTxt.data
                                }}>
                            </div>


                        </form>

                    </div>
                    


                    <div className="col-lg-4">
                        
                        <div className="pb-3">                            
                            <Ckedit blogHead = {blogHead} blogBody = {blogBody} selectedBlog={props.selectedBlog}/>
                        </div>

                    </div>
                </div>
                
            </div>
        </section>
    )
}


export default Writeblog;