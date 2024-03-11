
function AddPopUp() {
    return (
        <>
            <div className="aiz-main-content">
                <div className="px-15px px-lg-25px">
                    <div className="aiz-titlebar text-left mt-2 mb-3">
                        <div className="row align-items-center">
                            <div className="col-auto">
                                <h1 className="h3">
                                    Add Popup Master
                                </h1>
                            </div>

                        </div>
                    </div>
                    <br />
                    <div className="card">
                        <div className="card-header row gutters-5">
                            <div className="col-md-4">
                                <h5 className="mb-md-0 h6">
                                    Pop Up Details
                                </h5>
                            </div>

                        </div>

                        <div className="card-body">
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
                                        {/* <label className="input-group-text" htmlFor="inputGroupFile01">Upload</label> */}
                                        <input type="file" className="form-control" id="inputGroupFile01" />
                                    </div>


                                </div>
                                <div className="col-lg-4">
                                <button type="button" className="btn btn-primary mr-3">Save</button>
                                <button type="button" className="btn btn-danger">Cancle</button>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default AddPopUp