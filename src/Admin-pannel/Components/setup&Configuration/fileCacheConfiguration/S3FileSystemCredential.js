import { useState } from "react";
import { useParams } from "react-router-dom";
import { toast, ToastContainer } from 'react-toastify';

function S3FileSystemCredential() {

    const [inputVal, setInputVal] = useState({
        AWS_ACCESS_KEY_ID: '',
        AWS_SECRET_ACCESS_KEY: '',
        AWS_DEFAULT_REGION: '',
        AWS_BUCKET: '',
        AWS_URL: '',
        AWS_FILE_SYSTEM_ACTIVATION: Boolean,
        cache_Session_Driver: '',
        CACHE_DRIVER: '',
        redis_host: '',
        redis_password: '',
        redis_port: Number,
    });
    const params = useParams();

    const onChangeHandler = (e) => {
        const inpName = e.target.name;
        const inpVal = e.target.value;
        const clonedObj = { ...inputVal };
        clonedObj[inpName] = inpVal;
        setInputVal(clonedObj)
    };


    // const { data } = useGetRolesQuery(params.id);
    // console.log('role data', data);

    const [addFileSystemD, response] = useAddFileSystemMutation();


    const submitFileSystemData = () => {
        // e.preventDefault();
        alert('hello')
        addFileSystemD(inputVal)
        console.log(inputVal)
        document.getElementById("create-course-form").reset();
    };


    const toastSuccessMessage = () => {
        toast.success("File System added Successfully", {
            position: "top-center"
        })
    };

    if (response.isSuccess === true) {
        toastSuccessMessage()
    };
    console.log(response)
    console.log(inputVal)

    return (
        <>
            <div className="col-xxl-6">
                <div className="card">
                    <div className="card-header">
                        <h3 className="fs-18 mb-0 text-center">S3 File System Credentials</h3>
                    </div>
                    <div className="card-body">
                        <form className="form-horizontal">
                            <input type="hidden" name="payment_method" defaultValue="paypal" />
                            <input type="hidden" name="_token" defaultValue="t1kIjSzA66IWcAwVqC8sgvte7FLgAx9ARqaAs2hQ" />

                            <div className="form-group row">
                                <input type="hidden" name="types[]" defaultValue="AWS_ACCESS_KEY_ID" />
                                <div className="col-lg-4">
                                    <label className="control-label">AWS_ACCESS_KEY_ID</label>
                                </div>
                                <div className="col-lg-8">
                                    <input type="text" className="form-control" name="AWS_ACCESS_KEY_ID" placeholder="AWS_ACCESS_KEY_ID" required fdprocessedid="u60f2q" onChange={onChangeHandler} />
                                </div>
                            </div>

                            <div className="form-group row">
                                <input type="hidden" name="types[]" defaultValue="AWS_SECRET_ACCESS_KEY" />
                                <div className="col-lg-4">
                                    <label className="control-label">AWS_SECRET_ACCESS_KEY</label>
                                </div>
                                <div className="col-lg-8">
                                    <input type="text" className="form-control" name="AWS_SECRET_ACCESS_KEY" placeholder="AWS_SECRET_ACCESS_KEY" required fdprocessedid="m9o7h" onChange={onChangeHandler} />
                                </div>
                            </div>

                            <div className="form-group row">
                                <input type="hidden" name="types[]" defaultValue="AWS_DEFAULT_REGION" />
                                <div className="col-lg-4">
                                    <label className="control-label">AWS_DEFAULT_REGION</label>
                                </div>
                                <div className="col-lg-8">
                                    <input type="text" className="form-control" name="AWS_DEFAULT_REGION" placeholder="AWS_DEFAULT_REGION" required fdprocessedid="cbgu1" onChange={onChangeHandler} />
                                </div>
                            </div>

                            <div className="form-group row">
                                <input type="hidden" name="types[]" defaultValue="AWS_BUCKET" />
                                <div className="col-lg-4">
                                    <label className="control-label">AWS_BUCKET</label>
                                </div>
                                <div className="col-lg-8">
                                    <input type="text" className="form-control" name="AWS_BUCKET" placeholder="AWS_BUCKET" required fdprocessedid="nzew7f" onChange={onChangeHandler} />
                                </div>
                            </div>

                            <div className="form-group row">
                                <input type="hidden" name="types[]" defaultValue="AWS_URL" />
                                <div className="col-lg-4">
                                    <label className="control-label">AWS_URL</label>
                                </div>
                                <div className="col-lg-8">
                                    <input type="text" className="form-control" name="AWS_URL" placeholder="AWS_URL" required fdprocessedid="kqypr" onChange={onChangeHandler} />
                                </div>
                            </div>

                            <div className="form-group row">
                                <div className="col-lg-12 text-right">
                                    <button className="btn btn-primary" onClick={submitFileSystemData} type="button" fdprocessedid="jwa6n">Save</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
                <ToastContainer />
            </div>
        </>
    )
}
export default S3FileSystemCredential;