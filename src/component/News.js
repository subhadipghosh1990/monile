import React from "react";

const News = (props) => {

    // useEffect(()=>{
    //     console.log(props.blogs);
    // })

    return(
        <section className="allBlogs fullHt-header-footer">

            <div className="container">

                <div className="row">

                    <div className="col-md-8">

                        <ul className="pl-0 m-0">
                            {props.blogs.map((e,i)=>{
                                return(
                                    <li className="singleBlog my-5 p-2 noOverflow" key={i}>
                                        <a className="d-block" href="/news">
                                            <div className="blogfeature position-relative noOverflow mb-3">
                                                <img src={require('../assets/images/'+ e.featuredImg).default} alt="abc" className="back cover"/>
                                            </div>
                                            <h3>{e.title}</h3>
                                            <p><i>{e.subHeader}</i></p>
                                            <p><small>{e.author} | <i className="fa fa-comment-o" aria-hidden="true"></i> {e.comments}</small></p>
                                        </a>
                                    </li>
                                )
                            })}
                        </ul>

                    </div>

                    <div className="col-md-4 pt-5">
                        <ul className="topics pl-0  m-0">
                            {props.topics.map((e,i)=>{
                                return(
                                    <li className="border-bottom" key={i}>
                                        <a className="text-uppercase d-block py-3 px-2" href="/news">
                                            {e}
                                        </a>
                                    </li>
                                )
                            })}
                        </ul>
                    </div>
                </div>

            </div>

        </section>
    )
}

export default News;