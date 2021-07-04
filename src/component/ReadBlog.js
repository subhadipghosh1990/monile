import React,{useState, useEffect} from "react";

import { useLocation  } from "react-router-dom";
import queryString from "query-string";

const ReadBlog = (props) => {
    let { search } = useLocation();
    //console.log(queryString.parse(search));

    let blogId = queryString.parse(search).id;

    useEffect(()=>{
        props.singleBlog(blogId); 
    },[]);

    return(
        // {JSON.stringify(queryString.parse(search))}
        // {JSON.stringify(props.singleBlogSelected)}

        <section className="fullHt-header-footer d-flex flex-wrap justify-content-center align-items-center noOverflow">
            <div className="container">



                <div className="row">

                    <div className="col-lg-9">

                                <div className="py-5 border-bottom">
                                    <div
                                        dangerouslySetInnerHTML={{
                                            __html: props.singleBlogSelected.blog_title
                                        }} className="">
                                    </div>

                                    <div className="position-relative">
                                        <img className="w-100" src={props.singleBlogSelected.feature}/>
                                    </div>

                                    <p className="d-flex justify-content-between pb-0 small mb-0 pt-3"><i>26.11.1999</i> <span>Author</span></p>

                                    <hr/>

                                    <div
                                        dangerouslySetInnerHTML={{
                                            __html: props.singleBlogSelected.blog_content
                                        }} className="">
                                    </div>
                                </div>                   
                    </div>

                    <div className="col-lg-3 rightPart">
                        <ul className="p-0 m-0">                        
                            <li>
                                <a href="#" className="d-block p-3 border aurthorImg"></a>
                                <p className="d-flex justify-content-between pt-2 mb-0 pb-0 small"><span>Author</span> <i>20 posts</i></p>
                                <a href="#" className="small">View Profile</a>
                            </li>                        
                            <li>
                                <div className="related py-5">                                
                                    <span className="rounded d-inline-block border p-2 small bg-light m-1">sometimes</span>
                                    <span className="rounded d-inline-block border p-2 small bg-light m-1">publishing</span>
                                    <span className="rounded d-inline-block border p-2 small bg-light m-1">accident</span>
                                    <span className="rounded d-inline-block border p-2 small bg-light m-1">readable</span>
                                    <span className="rounded d-inline-block border p-2 small bg-light m-1">search</span>
                                    <span className="rounded d-inline-block border p-2 small bg-light m-1">years</span>
                                    <span className="rounded d-inline-block border p-2 small bg-light m-1">desktop</span>                                
                                </div>
                            </li>                        
                            <li>                            
                                <form>                                
                                    <h4>Search for other places</h4>                                
                                    <div className="row">                                                                  

                                        <div className="form-group m-0 pb-2 col-8 pr-1">                                    
                                            <input className="form-control" placeholder="Search.." />                                    
                                        </div>                                    
                                        <div className="form-group m-0 pb-2 col-4 px-0">
                                            <select className="px-2 form-control">
                                                <option value="">Select an option</option>
                                                <option value="opt1">opt 1</option>
                                                <option value="opt2">opt 2</option>
                                            </select>
                                        </div>

                                        <div className="form-group col-12">
                                            <button className="btn btn-success small px-2 py-1">Search</button>
                                        </div>                                    
                                    </div>                                
                                </form>                            
                            </li>
                        </ul>                    
                    </div>


                </div>
                
            </div>
        </section>


    )
}

export default ReadBlog;