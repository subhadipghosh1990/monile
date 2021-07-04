import React, {useEffect, useState} from "react";
import { useHistory } from "react-router-dom";
import Writeblog from '../component/Writeblog';
const Userdash = (props) => {
  
  let history = useHistory();
  useEffect(() => {
    if(!localStorage.getItem("log_token")){
        history.push("/signup");
    }
    
  });

  const [pass, setPass] = useState("");
  const [showPass, setshowPass] = useState(false);

  const[showEdit, setShowEdit] = useState(false);

  const[selectedBlog, setselectedBlog] = useState({});

  let selectedBlogforEditFunc = (e) => {
    console.log(e);
    setShowEdit(prev => prev=!prev);
    setselectedBlog(e);
  }

  let selectedBlogforDel = (e) => {
    console.log(e);
  }




    return(
      <>
        <section className="fullHt-header-footer">

          <div className="container-fluid">
            <div className="row">
              <div className="py-3 dashOpt fullHt-header-footer">
                <ul className="p-0 m-0">
                  <li>
                    <img src={props.user.user_img} alt="" className="img-fluid"/>
                  </li>
                  <li>
                    <b>Name:</b> <i>{props.user.first_name} {props.user.last_name}</i>
                  </li>
                  <li>
                    <b>Email:</b> <i>{props.user.email}</i>
                  </li>
                  <li>
                    <button className="btn btn-info" onClick={() =>setshowPass(prev => prev=!prev)}>Change Password</button>
                    <form className={showPass ? "d-block pt-3" : "d-none"} onSubmit={(event) => props.changePassword(event, props.user.id , pass)}>
                      <div className="row">
                        <div className="col-12">
                          <div className="form-group">
                            <input type="password" className="form-control" placeholder="new password" onChange={(event) => setPass(event.target.value)}/>
                          </div>

                          <div className="form-group">
                            <button className="d-block btn btn-success">Change</button>
                          </div>
                        </div>
                      </div>
                    </form>

                  </li>
                </ul>
              </div>
              <div className="py-3 userStat fullHt-header-footer">
                <a href="/writeblog" className="btn btn-success">write a blog</a>


                <br/>

                <ul className="userBlogList d-flex flex-wrap pl-0 mb-5 pb-5 mt-5">

                  {props.userBlogsList.map((e,i)=>{
                     return <li key={i} className="m-2">
                          <a href={"readblog?id="+e.id} className="d-block h-100 p-3 ">
                            <div className="position-relative noOverflow userBlogImgHolder">
                                <img className="w-100" src={e.feature} className="back cover"/>
                            </div>
                            <div
                                dangerouslySetInnerHTML={{
                                    __html: e.blog_title
                                }} className="">
                            </div>
                          </a>
                          <button onClick={() => selectedBlogforEditFunc(e)} className="btn btn-info mt-2 mr-2">Edit</button>
                          <button onClick={() => props.delPost(e.id)} className="btn btn-danger mt-2">Del</button>
                      </li>
                  })}
                </ul>
                  

                {showEdit ? <Writeblog user={props.user} selectedBlog={selectedBlog}/> : null}  
              </div>  
            </div>

            


          </div>


        </section>

        
      </>
    )

}


export default Userdash;