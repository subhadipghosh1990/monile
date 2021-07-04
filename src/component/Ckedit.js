import React from "react";
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
const Ckedit = (props) => {
    return(
        <React.Fragment>

            <div className="pb-3">

                {/* {JSON.stringify(props.selectedBlog)} */}

                <h3>Blog Header</h3>

                <CKEditor
                        editor={ ClassicEditor }
                        //data="<h2>Blog Header</h2><p>blog subheader</p>"
                        data = {typeof props.selectedBlog != "undefined" ? props.selectedBlog.blog_title : "<h2>Blog Header</h2><p>blog subheader</p>"}
                        onReady={ editor => {
                            // You can store the "editor" and use when it is needed.
                            //console.log( 'Editor is ready to use!', editor );
                            const data = editor.getData();
                            props.blogHead({ data })
                        } }
                        onChange={ ( event, editor ) => {
                            const data = editor.getData();
                            // console.log( { data } );
                            props.blogHead({ data })
                        } }
                        onBlur={ ( event, editor ) => {
                            console.log( 'Blur.', editor );
                        } }
                        onFocus={ ( event, editor ) => {
                        const data = editor.getData();
                            console.log( 'Focus.', editor, data );
                        }}
                />
            </div>
            
            <h3>Blog Body</h3>
            <CKEditor
                    editor={ ClassicEditor }
                    // data="<p>Blog Body</p>"
                    data={typeof props.selectedBlog != "undefined" ? props.selectedBlog.blog_content : "<p>Blog Body</p>"}
                    onReady={ editor => {
                        // You can store the "editor" and use when it is needed.
                        //console.log( 'Editor is ready to use!', editor );
                        const data = editor.getData();
                        props.blogBody({ data })
                    } }
                    onChange={ ( event, editor ) => {
                        const data = editor.getData();
                        // console.log( { data } );
                        props.blogBody({ data })
                    } }
                    onBlur={ ( event, editor ) => {
                        console.log( 'Blur.', editor );
                    } }
                    onFocus={ ( event, editor ) => {
                      const data = editor.getData();
                        console.log( 'Focus.', editor, data );
                    }}
            />
        </React.Fragment>
    )
}


export default Ckedit;