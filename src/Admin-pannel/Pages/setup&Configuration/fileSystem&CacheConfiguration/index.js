import { useState } from "react";
import { useParams } from "react-router-dom";
import { toast, ToastContainer } from 'react-toastify';
import { useAddFileSystemMutation } from "../../../Components/all-products/allproductsApi/allProductsApi";
import ToggleStatus from "../../../Components/toggleStatus/ToggleStatus";

function FileSystemCacheConfigurationPage() {

    const [inputVal, setInputVal] = useState({
        AWS_ACCESS_KEY_ID: '',
        AWS_SECRET_ACCESS_KEY: '',
        AWS_DEFAULT_REGION: '',
        AWS_BUCKET: '',
        AWS_URL: '',
        AWS_FILE_SYSTEM_ACTIVATION: false,
        cache_Session_Driver: '',
        CACHE_DRIVER: '',
        redis_host: '',
        redis_password: '',
        redis_port: '',
    });
    const params = useParams();

    const onChangeHandler = (e) => {
        const inpName = e.target.name;
        const inpVal = e.target.value;
        const clonedObj = { ...inputVal };
        clonedObj[inpName] = inpVal;
        setInputVal(clonedObj)
    };

    const changeStatus = (isStatus, key) => {
        const clonedInputVal = { ...inputVal }
        clonedInputVal[key] = isStatus;
        setInputVal(clonedInputVal)
    }

    // const { data } = useGetRolesQuery(params.id);
    // console.log('role data', data);

    const [addFileSystemD, response] = useAddFileSystemMutation();


    const submitFileSystemData = () => {
        // e.preventDefault();
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
            <div className="aiz-main-content">
                <div className="px-15px px-lg-25px">
                    <div className="row">
                        {/* <S3FileSystemCredential /> */}
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

                                        {/* <div className="form-group row">
                                            <div className="col-lg-12 text-right">
                                                <button className="btn btn-primary" type="submit" fdprocessedid="jwa6n">Save</button>
                                            </div>
                                        </div> */}
                                    </form>
                                </div>
                            </div>
                        </div>
                        {/* <S3FileSystemActivation /> */}
                        <div className="col-xxl-6">
                            <div className="card">
                                <div className="card-header">
                                    <h3 className="fs-18 mb-0 text-center">S3 File System Activation</h3>
                                </div>
                                <div className="card-body">
                                    {/* <label className="aiz-switch mb-0">
                                        <input type="checkbox" name="AWS_FILE_SYSTEM_ACTIVATION" onChange={onChangeHandler} />
                                        <span />
                                    </label> */}
                                    <ToggleStatus name="AWS_FILE_SYSTEM_ACTIVATION" isStatus={inputVal.AWS_FILE_SYSTEM_ACTIVATION} changeStatus={changeStatus} />
                                </div>
                            </div>
                        </div>


                    </div>
                    <div className="row">
                        {/* <CacheSessionDriver /> */}
                        <div className="col-xxl-6">
                            <div className="card">
                                <div className="card-header">
                                    <h3 className="fs-18 mb-0 text-center">Cache &amp; Session Driver</h3>
                                </div>
                                <div className="card-body">
                                    <form className="form-horizontal">
                                        <input type="hidden" name="payment_method" defaultValue="paypal" />
                                        <input type="hidden" name="_token" defaultValue="t1kIjSzA66IWcAwVqC8sgvte7FLgAx9ARqaAs2hQ" />

                                        <div className="form-group row">
                                            <input type="hidden" name="types[]" defaultValue="CACHE_DRIVER" />
                                            <div className="col-lg-4">
                                                <label className="control-label">CACHE_DRIVER</label>
                                            </div>
                                            <div className="col-lg-8">
                                                <select className="form-select" name="CACHE_DRIVER" aria-label="Default select example" onChange={onChangeHandler}>
                                                    <option>File</option>
                                                    <option value={2}>redis</option>
                                                </select>
                                            </div>
                                        </div>

                                        <div className="form-group row">
                                            <input type="hidden" name="types[]" defaultValue="SESSION_DRIVER" />
                                            <div className="col-lg-4">
                                                <label className="control-label">SESSION_DRIVER</label>
                                            </div>
                                            <div className="col-lg-8">
                                                <select className="form-select" name="cache_Session_Driver" aria-label="Default select example" onChange={onChangeHandler}>
                                                    <option>File</option>
                                                    <option value={2}>redis</option>
                                                </select>
                                            </div>
                                        </div>
                                        {/* <div className="form-group row">
                                            <div className="col-lg-12 text-right">
                                                <button className="btn btn-primary" type="submit" fdprocessedid="6tjtyk">Save</button>
                                            </div>
                                        </div> */}
                                    </form>
                                </div>
                            </div>
                        </div>
                        {/* <RedisConfiguration /> */}
                        <div className="col-xxl-6">
                            <div className="card">
                                <div className="card-header">
                                    <h3 className="fs-18 mb-0 text-center">Redis Configuration (If you use redis as any of the drivers)</h3>
                                </div>
                                <div className="card-body">
                                    <form className="form-horizontal">
                                        <input type="hidden" name="payment_method" defaultValue="paypal" />
                                        <input type="hidden" name="_token" defaultValue="t1kIjSzA66IWcAwVqC8sgvte7FLgAx9ARqaAs2hQ" />

                                        <div className="form-group row">
                                            <input type="hidden" name="types[]" defaultValue="REDIS_HOST" />
                                            <div className="col-lg-4">
                                                <label className="control-label">REDIS_HOST</label>
                                            </div>
                                            <div className="col-lg-8">
                                                <input type="text" className="form-control" name="redis_host" placeholder="REDIS_HOST" required fdprocessedid="9z2yx" onChange={onChangeHandler} />
                                            </div>
                                        </div>

                                        <div className="form-group row">
                                            <input type="hidden" name="types[]" defaultValue="REDIS_PASSWORD" />
                                            <div className="col-lg-4">
                                                <label className="control-label">REDIS_PASSWORD</label>
                                            </div>
                                            <div className="col-lg-8">
                                                <input type="text" className="form-control" name="redis_password" placeholder="REDIS_PASSWORD" fdprocessedid="go2rte" onChange={onChangeHandler} />
                                            </div>
                                        </div>

                                        <div className="form-group row">
                                            <input type="hidden" name="types[]" defaultValue="REDIS_PORT" />
                                            <div className="col-lg-4">
                                                <label className="control-label">REDIS_PORT</label>
                                            </div>
                                            <div className="col-lg-8">
                                                <input type="number" className="form-control" name="redis_port" placeholder="REDIS_PORT" required fdprocessedid="5qhcak" onChange={onChangeHandler} />
                                            </div>
                                        </div>

                                    </form>
                                </div>
                            </div>
                        </div>
                        <div className="form-group row">
                            <div className="col-lg-12 text-right">
                                <button className="btn btn-primary" type="button" onClick={submitFileSystemData} fdprocessedid="6wvuo">Save</button>
                            </div>
                        </div>
                    </div>

                </div>
                <div className="bg-white text-center py-3 px-15px px-lg-25px mt-auto">
                    {/*p class="mb-0">&copy;  v6.3.3</p*/}
                </div>
                <ToastContainer />
            </div>
            {/* <FileSystemCacheConfigurationPage /> */}
        </>
    )
}
export default FileSystemCacheConfigurationPage;