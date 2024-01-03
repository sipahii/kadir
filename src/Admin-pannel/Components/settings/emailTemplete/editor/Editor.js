// import '../../../../node_modules/react-quill/dist/quill.snow.css'
import '../../../../../../node_modules/react-quill/dist/quill.snow.css'
import { useState } from "react";
import ReactQuill from "react-quill";

function Editor() {
    const [body, setBody] = useState('{logo} <br> Login Details <br> Hello {client_name}, <br> We have created new account for you to manage your quotations and orders from our website. <br> Your credentials are:<br> Site Link: {site_link} Username: {email} <br> Password: {password} <br> Best regards, <br> {site_name}')
    const handleBody = (e) => {
        setBody(e)
    }

    return (
        <>
            <ReactQuill
                placeholder=''
                modules={Editor.modules}
                formats={Editor.formats}
                onChange={handleBody}
                value={body}
            />

        </>
    )
}
Editor.modules = {
    toolbar: [
        [{ header: '1' }, { header: '2' }, { header: [3, 4, 5, 6] }, { font: [] }],
        [{ size: [] }],
        ['bold', 'italic', 'underline', 'strike', 'blockquote'],
        [{ list: 'ordered' }, { list: 'bullet' }],
        ['link', 'image', 'video'],
        ['clean'],
        ['code-block'],
        
    ]
};
Editor.formats = [
    'header',
    'font',
    'size',
    'bold',
    'italic',
    'underline',
    'strike',
    'blockquote',
    'list',
    'bullet',
    'link',
    'image',
    'video',
    'code-block',
    
]
export default Editor