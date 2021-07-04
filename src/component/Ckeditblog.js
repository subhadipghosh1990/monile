import React from "react";
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
const Ckeditblog = (props) => {
    return(
        <React.Fragment>

            {/* <CKEditor
                    editor={ ClassicEditor }
                    data=""
                    onReady={ editor => {
                        // You can store the "editor" and use when it is needed.
                        console.log( 'Editor is ready to use!', editor );
                    } }
                    onChange={ ( event, editor ) => {
                        const data = editor.getData();
                        // console.log( { data } );
                        //props.blogHead({ data })
                        console.log(props);
                    } }
                    onBlur={ ( event, editor ) => {
                        console.log( 'Blur.', editor );
                    } }
                    onFocus={ ( event, editor ) => {
                      const data = editor.getData();
                        console.log( 'Focus.', editor, data );
                    }}
            /> */}
        </React.Fragment>
    )
}


export default Ckeditblog;