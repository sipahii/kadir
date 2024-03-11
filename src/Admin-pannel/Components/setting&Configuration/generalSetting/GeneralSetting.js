import React, { useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import { useAddGeneralSettingMutation } from '../../all-products/allproductsApi/allProductsApi';

function GeneralSetting() {

    const [inputval, setInputval] = useState({
        system_name: '',
        system_logo_white: '',
        system_log_black: '',
        system_timezone: '',
        admin_page_login_background: '',

    });

    const onChangeHandler = (e) => {
        const inpName = e.target.name;
        const inpval = e.target.value;
        const clonedObj = { ...inputval };
        clonedObj[inpName] = inpval;
        setInputval(clonedObj)
    };

    const [addGeneralSetting, response] = useAddGeneralSettingMutation();

    const addGeneralSettingData = (e) => {
        e.preventDefault();
        addGeneralSetting(inputval)
        console.log(inputval)
        document.getElementById("create-course-form").reset();
    };

    const toastSuccessMessage = () => {
        toast.success("GenearalSetting added Successfully", {
            position: "top-center"
        })
    };

    if (response.isSuccess === true) {
        toastSuccessMessage()
    };
    if (response.isError === true) {
        alert('!Error GenralSetting not added')
    }

    console.log(response)

    return (
        <>
            <div className="aiz-main-content">
                <div className="px-15px px-lg-25px">
                    <div className="row">
                        <div className="col-lg-8 mx-auto">
                            <div className="card">
                                <div className="card-header">
                                    <h1 className="mb-0 h6">General Settings</h1>
                                </div>
                                <div className="card-body">

                                    <form className="form-horizontal" id='create-course-form' onSubmit={addGeneralSettingData}>
                                        <input type="hidden" name="_token" defaultValue="MfWj9eEof7fNq0mKB42pyG49sPDPkHAVyVSS7UBT" />

                                        <div className="form-group row">
                                            <label className="col-sm-3 col-from-label">System Name</label>
                                            <div className="col-sm-9">
                                                <input type="text" name="system_name" className="form-control" fdprocessedid="ihieoq" onChange={onChangeHandler} />
                                            </div>
                                        </div>

                                        <div className="form-group row">
                                            <label className="col-sm-3 col-from-label">System Logo - White</label>
                                            <div className="col-sm-9">
                                                <div className="input-group">
                                                    <div className="input-group-prepend">
                                                        <div className="input-group-text bg-soft-secondary">Browse</div>
                                                    </div>
                                                    <div className="form-control file-amount">
                                                        <input type="file" name="system_logo_white" className="selected-files" onChange={onChangeHandler} />
                                                    </div>
                                                </div>
                                                <div className="file-preview box sm" />
                                                {/* <small>Will be used in admin panel side menu</small> */}
                                            </div>
                                        </div>

                                        <div className="form-group row">
                                            <label className="col-sm-3 col-from-label">System Logo - Black</label>
                                            <div className="col-sm-9">
                                                <div className="input-group" data-toggle="aizuploader" data-type="image">
                                                    <div className="input-group-prepend">
                                                        <div className="input-group-text bg-soft-secondary">Browse</div>
                                                    </div>
                                                    <div className="form-control file-amount">
                                                        <input type="file" name="system_log_black" className="selected-files" onChange={onChangeHandler} />
                                                    </div>
                                                </div>
                                                <div className="file-preview box sm" />
                                                {/* <small>Will be used in admin panel topbar in mobile + Admin login page</small> */}
                                            </div>
                                        </div>

                                        <div className="form-group row">
                                            <label className="col-sm-3 col-from-label">System Timezone</label>
                                            <div className="col-sm-9">
                                                <div>
                                                    <select className="form-select" name='system_timezone' onChange={onChangeHandler}>
                                                        <option value={1}>One</option>
                                                        <option value={2}>Two</option>
                                                        <option value={3}>Three</option>
                                                    </select>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="form-group row">
                                            <label className="col-sm-3 col-from-label">Admin login page background</label>
                                            <div className="col-sm-9">
                                                <div className="input-group" data-toggle="aizuploader" data-type="image">
                                                    <div className="input-group-prepend">
                                                        <div className="input-group-text bg-soft-secondary">Browse</div>
                                                    </div>
                                                    <div className="form-control file-amount">
                                                        <input type="file" name="admin_page_login_background" className="selected-files" onChange={onChangeHandler} />
                                                    </div>
                                                </div>
                                                <div className="file-preview box sm" />
                                            </div>
                                        </div>

                                        <div className="text-right">
                                            <button type="submit" className="btn btn-primary" fdprocessedid="a528s9">Update</button>
                                        </div>

                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="bg-white text-center py-3 px-15px px-lg-25px mt-auto">
                    {/*p class="mb-0">&copy;  v6.3.3</p*/}
                </div>
                <ToastContainer />
            </div>

        </>
    )
}
export default GeneralSetting;