import React, {useState, useEffect} from "react";
import '../assets/blog-style.css';


const Blogs = (props) => {
   
    useEffect(()=>{
        props.checkBlogs();
    },[])


    return(
        <section className="fullHt-header-footer allBlogsList">
            <div className="container">

                <div className="row">

                    <div className="col-lg-9">

                        {props.blogsList.map((e,i)=>{
                            return(
                                <a key={i} href={"readblog?id="+e.id}>
                                    <div className={ i === props.blogsList.length -1 ? "py-5" :"py-5 border-bottom"}>
                                        <div
                                            dangerouslySetInnerHTML={{
                                                __html: e.blog_title
                                            }} className="">
                                        </div>

                                        <div className="position-relative">
                                            <img className="w-100" src={e.feature}/>
                                        </div>

                                    </div>
                                </a>                            
                            )
                        })}                    
                    </div>

                    <div className="col-lg-3 rightPart">
                        {/* <ul className="p-0 m-0">                        
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
                        </ul>                     */}
                    </div>


                </div>
                
            </div>
        </section>
    )
}


export default Blogs;