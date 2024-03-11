import { Col, Nav, Row, Tab, Tabs } from "react-bootstrap"
import Editor from "./editor/Editor"

function EmailTempelte() {
    return (
        <>
            <div className="aiz-main-content">
                <div className="px-15px px-lg-25px">
                    <div className="aiz-titlebar text-left mt-2 mb-3">
                        <div className="row align-items-center">
                            <div className="col-auto">
                                <h1 className="h3">
                                    Email Templates
                                </h1>
                            </div>

                        </div>
                    </div>
                    <br />
                    <div className="card">
                        <div className="card-header row gutters-5">
                            <div className="col-md-4">
                                <h5 className="mb-md-0 h6">
                                    Email Templates
                                </h5>
                            </div>

                        </div>

                        <div className="language-settings">
                            <div className="row">
                                <div className="col-lg-8 langu">
                                    <Tabs
                                        defaultActiveKey="Add User"
                                        transition={false}
                                        id="noanim-tab-example"
                                        className="mb-3 tabbbs"
                                    >
                                        
                                        <Tab eventKey="Add User" title="Add User " className="email-link">
                                        
                                            <Editor />
                                        </Tab>
                                        <Tab eventKey="Activation Email" title="Activation Email">
                                            <Editor />
                                        </Tab>
                                        <Tab eventKey="Forgot Password" title="Forgot Password">
                                            <Editor />
                                        </Tab>
                                        
                                    </Tabs>

                                    <div className="form-group mb-0"><button type="submit" className="btn btn-primary" fdprocessedid="24gy4">Save</button></div>
                                    <div className="language d-flex">
                                        <select className="form-select mr-2" aria-label="Default select example">
                                            <option selected>Language</option>
                                            <option value={1}>English</option>
                                            <option value={2}>Hindi</option>
                                            <option value={3}>UK</option>
                                        </select>
                                        <input type="text" className="form-control" placeholder="subject"/>
                                    </div>
                                </div>
                                <div className="col-lg-4">
                                    <div className="margin5">
                                        <h3 className="mb-md-3 h6">Variable Name</h3>
                                        <pre>{"{"}logo{"}"} {"{"}site_name{"}"} {"{"}site_link{"}"}</pre>
                                        Add User
                                        <pre>{"{"}client_name{"}"} {"{"}email{"}"} {"{"}password{"}"} </pre>
                                        Forgot Password                            <pre>{"{"}user_name{"}"} {"{"}email{"}"} {"{"}reset_password_link{"}"}</pre>
                                        Activation Email                            <pre>{"{"}user_name{"}"} {"{"}email{"}"} {"{"}activation_link{"}"}</pre>
                                        Orders &amp; Payments                            <pre>{"{"}company{"}"} {"{"}contact_person{"}"} {"{"}reference_number{"}"}</pre>
                                        Sale                            <pre>{"{"}order_link{"}"}</pre>
                                    </div>

                                    {/* <div className="variable-name">
                                        <h2 className="mb-md-0 h6">Variable Name</h2>
                                    </div> */}
                                </div>
                            </div>
                        </div>

                        {/* <div className="card-body">
                            <div className="row">
                                <div className="col-lg-4 mb-3">
                                    <select className="form-select" aria-label="Default select example">
                                        <option selected>SelectPage</option>
                                        <option value={1}>One</option>
                                        <option value={2}>Two</option>
                                        <option value={3}>Three</option>
                                    </select>

                                </div>
                                <div className="col-lg-4 mb-3">
                                    <div className="form-group mb-0">
                                        <input type="text" className="form-control" id="search" name="search" placeholder="Url" fdprocessedid="3vgavp" />
                                    </div>


                                </div>
                                <div className="col-lg-4 mb-3">
                                    <div className="input-group">
                                        <input type="text" className="form-control" aria-label="Dollar amount (with dot and two decimal places)" placeholder="Valid Forms *" />
                                    </div>
                                </div>
                                <div className="col-lg-4">
                                    <div className="input-group">
                                        <input type="text" className="form-control" aria-label="Dollar amount (with dot and two decimal places)" placeholder="Valid To *" />
                                    </div>
                                </div>
                                <div className="col-lg-4 mb-3">
                                    <select className="form-select" aria-label="Default select example">
                                        <option selected>From Field</option>
                                        <option value={1}>One</option>
                                        <option value={2}>Two</option>
                                        <option value={3}>Three</option>
                                    </select>

                                </div>
                                <div className="col-lg-4 mb-3">
                                    <select className="form-select" aria-label="Default select example">
                                        <option selected>From Field</option>
                                        <option value={1}>One</option>
                                        <option value={2}>Two</option>
                                        <option value={3}>Three</option>
                                    </select>

                                </div>
                                <div className="col-lg-4">
                                    <label for="exampleInputEmail1" class="form-label">Duration</label>
                                    <div className="d-flex align-items-center">
                                        <div className="form-check mr-3">
                                            <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                                            <label className="form-check-label" htmlFor="flexRadioDefault1">
                                                ALWAYS
                                            </label>
                                        </div>
                                        <div className="form-check">
                                            <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" defaultChecked />
                                            <label className="form-check-label" htmlFor="flexRadioDefault2">
                                                ONETIME
                                            </label>
                                        </div>
                                    </div>

                                </div>
                                <div className="col-lg-4">
                                    <label for="exampleInputEmail1" class="form-label">Status</label>
                                    <div className="d-flex align-items-center">
                                        <div className="form-check mr-3">
                                            <input className="form-check-input" type="radio" name="flexRadioDefault1" id="flexRadioDefault1" />
                                            <label className="form-check-label" htmlFor="flexRadioDefault1">
                                                Active
                                            </label>
                                        </div>
                                        <div className="form-check">
                                            <input className="form-check-input" type="radio" name="flexRadioDefault1" id="flexRadioDefault2" defaultChecked />
                                            <label className="form-check-label" htmlFor="flexRadioDefault2">
                                                In Active
                                            </label>
                                        </div>
                                    </div>

                                </div>
                                <div className="col-lg-4">
                                    <label for="exampleInputEmail1" class="form-label">Image</label>

                                    <div className="input-group mb-3">
                                        
                                        <input type="file" className="form-control" id="inputGroupFile01" />
                                    </div>


                                </div>
                                <div className="col-lg-4">
                                <button type="button" className="btn btn-primary mr-3">Save</button>
                                <button type="button" className="btn btn-danger">Cancle</button>
                            </div>
                            </div>
                        </div> */}
                    </div>
                </div>
            </div>
        </>
    )
}
export default EmailTempelte