import { BiSolidPhoneCall } from "react-icons/bi"
function AddNewCalls() {
    return (
        <>
            <div className="container-fluid">
                <div className="row">
                    {/* <form action=""> */}
                    <div className="col-md-6">
                        <div className="card">
                            <div className="card-body">
                                <h4>Add New Call Log</h4>
                                <hr className="border border-1 border-secondary opacity-50" />
                                <div className="form-group">
                                    <div className="mb-3 row">
                                        <label for="customer_type" className="control-label"> <small className="req text-danger">* </small>Related</label>
                                        <div className="">
                                            <select class="form-select " aria-label="Default select example" >
                                                <option selected>Nothing selected</option>
                                                <option value="1">Lead</option>
                                                <option value="2">Customer</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="mb-3 row">
                                        <label for="customer_type" className="control-label"> <small className="req text-danger">* </small>Type</label>
                                        <div className="">
                                            <select class="form-select " aria-label="Default select example" title="Nothing Select" >
                                                <option selected>Nothing selected</option>
                                                <option value="1">Proposal - Related</option>
                                                <option value="2">Estimate - Related</option>``
                                                <option value="2">General Call</option>``
                                                <option value="2">Cold Call</option>``
                                                <option value="2">Satisfaction Call</option>``
                                                <option value="2">Review Call</option>``
                                                <option value="2">Referal Call</option>``
                                                <option value="2">Ghh </option>``
                                                <option value="2">Toakfy </option>``
                                            </select>
                                        </div>
                                    </div>
                                    <div className="mb-3 row">
                                        <label for="customer_type" className="control-label"> <small className="req text-danger">* </small>Direction</label>
                                        <div className="">
                                            <select class="form-select " aria-label="Default select example" title="Nothing Select" >
                                                <option selected>Nothing selected</option>
                                                <option value="1">Inbound</option>
                                                <option value="2">Estimate - Related</option>``
                                                <option value="2">General Call</option>``
                                                <option value="2">Cold Call</option>``
                                                <option value="2">Satisfaction Call</option>``
                                                <option value="2">Review Call</option>``
                                                <option value="2">Referal Call</option>``
                                                <option value="2">Ghh </option>``
                                                <option value="2">Toakfy </option>``
                                            </select>
                                        </div>
                                    </div>
                                    <div className="mb-3 row">
                                        <label for="customer_type" className="control-label"> <small className="req text-danger">* </small>Purpose</label>
                                        <div className="">
                                            <input type="text" className="form-control" />
                                        </div>
                                    </div>
                                    <div className="mb-3 row">
                                        <label for="customer_type" className="control-label"> <small className="req text-danger">* </small>Summery</label>
                                        <div className="">
                                            <textarea name="" id="" cols="15" rows="5" className="form-control"></textarea>
                                        </div>
                                    </div>
                                    <div className="mb-3">
                                        <div
                                            className="form-group row"
                                            app-field-wrapper="has_follow_up"
                                        >
                                            <div className="d-flex">
                                                <span>Follow-up Required</span>
                                                <div className="radio radio-primary radio-inline ml-1">
                                                    <input
                                                        type="radio"
                                                        defaultValue={1}
                                                        id="has_follow_1"
                                                        name="has_follow_up"
                                                    />
                                                    <label htmlFor="has_follow_1" className="ml-2">Yes</label>
                                                </div>
                                                <div className="radio radio-primary radio-inline ml-2">
                                                    <input
                                                        type="radio"
                                                        defaultValue={0}
                                                        id="has_follow_0"
                                                        name="has_follow_up"
                                                        defaultChecked=""
                                                    />
                                                    <label htmlFor="has_follow_0" className="ml-2">No</label>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>


                    <div className="col-md-6">
                        <div className="card">
                            <div className="card-body">
                                <div className="row">
                                    <div className="col-lg-6">
                                        <h4 className=" ">Advanced Options</h4>
                                    </div>


                                </div>
                                <hr className="border border-1 border-secondary opacity-50" />
                                <div className="row">
                                    <div className="col-md-12">
                                        <div className="form-group ">
                                            <label htmlFor="userphone" className="control-label">
                                                {" "}
                                                <small className="req text-danger">* </small>Log type
                                            </label>
                                            <br />
                                            <div className="d-flex">
                                                <div className="radio radio-primary radio-inline">
                                                    <input
                                                        type="radio"
                                                        defaultValue="call"
                                                        id=""
                                                        name=""
                                                        defaultChecked=""
                                                    />
                                                    <label htmlFor="">Call</label>
                                                </div>
                                                <div className="radio radio-primary radio-inline ml-3">
                                                    <input
                                                        type="radio"
                                                        defaultValue="sms"
                                                        id=""
                                                        name=""
                                                    />
                                                    <label htmlFor="">Sms</label>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-10">
                                        <div className="form-group" app-field-wrapper="userphone">
                                            <label htmlFor="userphone" className="control-label">
                                                <small className="req text-danger">* </small>    Enter Phone (include the dialling code e.g +44)
                                            </label>
                                            <input
                                                type="text"
                                                id="userphone"
                                                name="userphone"
                                                className="form-control"
                                                defaultValue=""
                                            />
                                        </div>
                                    </div>
                                    <div className="" id="call-input">
                                        <div className="col-md-12">
                                            <div className="mb-3 row">
                                                <label for="customer_type" className="control-label"> <small className="req text-danger">* </small>Call Status</label>
                                                <div className="">
                                                    <select class="form-select " aria-label="Default select example" title="Nothing Select" >
                                                        <option selected>Nothing selected</option>
                                                        <option value="1">Completed</option>
                                                        <option value="2">Busy</option>
                                                        <option value="2">No Answer </option>
                                                        <option value="2">Cancelled</option>

                                                    </select>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div id="sms-input" style={{ display: "none" }}>
                                        <div className="col-md-12">


                                        </div>
                                    </div>
                                    <div className="col-md-12 start-calendar">
                                        <div className="form-group" app-field-wrapper="call_start_time">
                                            <label htmlFor="call_start_time" className="control-label">
                                                {" "}
                                                <small className="req text-danger">* </small>Call Start Time
                                            </label>
                                            <div className="input-group date">
                                                <input type="time" name="" id="" className="form-control" />
                                                <div className="input-group-addon">
                                                    {/* <i className="fa-regular fa-calendar calendar-icon" /> */}
                                                </div>
                                            </div>
                                        </div>{" "}
                                    </div>
                                    <div className="col-md-12">
                                        <div className="form-group" app-field-wrapper="call_end_time">
                                            <label htmlFor="call_end_time" className="control-label">
                                                {" "}
                                                <small className="req text-danger">* </small>Call End Time
                                            </label>
                                            <div className="input-group date">
                                                <input type="time" name="" id="" className="form-control" />
                                                <div className="input-group-addon">
                                                    {/* <i className="fa-regular fa-calendar calendar-icon" /> */}
                                                </div>
                                            </div>
                                        </div>{" "}
                                    </div>
                                    <div className="col-md-12" id="cl_call_duration_div">
                                        <div className="form-group" app-field-wrapper="call_duration">
                                            <label htmlFor="call_duration" className="control-label">
                                                {" "}
                                                <small className="req text-danger">* </small>Call Duration
                                            </label>
                                            <input
                                                type="text"
                                                id="call_duration"
                                                name="call_duration"
                                                className="form-control"
                                                readOnly="readonly"
                                                defaultValue=""
                                            />
                                        </div>{" "}
                                    </div>
                                    <div className="col-md-12">
                                        <div className="form-group" app-field-wrapper="staffid">
                                            <input
                                                type="hidden"
                                                id="staffid"
                                                name="staffid"
                                                className="form-control"
                                                defaultValue={2}
                                            />
                                        </div>{" "}
                                        <div className="form-group" app-field-wrapper="staff_email">
                                            <label htmlFor="staff_email" className="control-label">
                                                Owner
                                            </label>
                                            <input
                                                type="text"
                                                id="staff_email"
                                                name="staff_email"
                                                className="form-control"
                                                disabled="disabled"
                                                defaultValue="Staff Demo"
                                            />
                                        </div>
                                        <div className="mb-3 row">
                                            <label for="customer_type" className="control-label"> <small className="req text-danger">* </small>Direction</label>
                                            <div className="">
                                                <select class="form-select " aria-label="Default select example" title="Nothing Select" >
                                                    <option selected>Nothing selected</option>
                                                    <option value="1">Suplier Demo</option>
                                                    <option value="2">Staff Demo</option>
                                                    <option value="2">Jay </option>

                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-12">
                                        <div className="d-flex">
                                            <span className="ml-1">Completed</span>
                                            <div className="radio radio-primary radio-inline">
                                                <input
                                                    type="radio"
                                                    defaultValue={1}
                                                    id="is_completed_1"
                                                    name="is_completed"
                                                    className="ml-3"
                                                />
                                                <label htmlFor="is_completed_1" className="ml-2">Yes</label>
                                            </div>
                                            <div className="radio radio-primary radio-inline">
                                                <input
                                                    type="radio"
                                                    defaultValue={0}
                                                    id="is_completed_0"
                                                    name="is_completed"
                                                    defaultChecked=""
                                                    className="ml-2"
                                                />
                                                <label htmlFor="is_completed_0" className="ml-2">No</label>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-12">&nbsp;</div>
                                    <div className="col-md-12">
                                        <div className="d-flex">
                                            <span className="ml-1">Important&nbsp;&nbsp;</span>
                                            <div className="radio radio-primary radio-inline">
                                                <input
                                                    type="radio"
                                                    defaultValue={1}
                                                    id="is_important_1"
                                                    name="is_important"
                                                    className="ml-2"
                                                />
                                                <label htmlFor="is_important_1" className="ml-2">Yes</label>
                                            </div>
                                            <div className="radio radio-primary radio-inline">
                                                <input
                                                    type="radio"
                                                    defaultValue={0}
                                                    id="is_important_0"
                                                    name="is_important"
                                                    defaultChecked=""
                                                    className="ml-2"
                                                />
                                                <label htmlFor="is_important_0" className="ml-2">No</label>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="card">

                        <div className="btn-bottom-toolbar text-right ">
                            <button type="button" className="btn btn-info save-cl">
                                Save
                            </button>
                        </div>
                    </div>
                    {/* </form> */}
                </div >



            </div >


        </>
    )
}
export default AddNewCalls