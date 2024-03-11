function AddContact() {
    return <>
        <div className='border'>
            <div className='col-md-12 mt-3 mb-3'>
                <label htmlFor="" className='form-label'>Mobile Number</label>
                <input type="text" className='form-control' />
            </div>
            <div className='col-md-12 mb-3'>
                <label htmlFor="" className='form-label'>Alternative Mobile no.</label>
                <input type="text" className='form-control' />
            </div>
            <div className='col-md-12 mb-3'>
                <label htmlFor="" className='form-label'>EMAIL ID</label>
                <input type="text" className='form-control' />
            </div>
            <div className='col-md-12 mb-3 d-flex'>
                <label htmlFor="" className='form-label mr-3'>Permanent Address same as Present Address</label>
                <div className='form-check'>
                    <input
                        className="form-check-input mr-2"
                        type="radio"
                        name="exampleRadios"
                        id="exampleRadios1"
                        defaultValue="option1"
                        defaultChecked=""
                    />
                    <label className="form-check-label " htmlFor="exampleRadios1">
                        Yes
                    </label>
                    <input
                        className="form-check-input ml-3 "
                        type="radio"
                        name="exampleRadios"
                        id="exampleRadios1"
                        defaultValue="option2"
                        defaultChecked=""
                    />
                    <label className="form-check-label ml-5  " htmlFor="exampleRadios1">
                        No
                    </label>
                </div>

            </div>

            <div className='col-md-12 mb-3'>
                <label htmlFor="" className='form-label'>Present Address Line 1</label>
                <input type="text" className='form-control' />
            </div>
            <div className='col-md-12 mb-3'>
                <label htmlFor="" className='form-label'>Present Address Line 2</label>
                <input type="text" className='form-control' />
            </div>
            <div className='col-md-12 mb-3'>
                <label htmlFor="" className='form-label'>Landmark</label>
                <input type="text" className='form-control' />
            </div>
            <div className='col-md-12 mb-3'>
                <label htmlFor="" className='form-label'>Country</label>
                <input
                    type="text"
                    id="disabledTextInput"
                    className="form-control"
                    placeholder="India"
                />

            </div>
            <div className='col-md-12 mb-3'>
                <label htmlFor="" className='form-label'>State</label>
                <input type="text" className='form-control' />
            </div>
            <div className='col-md-12 mb-3'>
                <label htmlFor="" className='form-label'>District</label>
                <input type="text" className='form-control' />
            </div>
            {/* <div className='col-md-12 mb-3'>
                <label htmlFor="" className='form-label'>Tehsil</label>
                <input type="text" className='form-control' />
            </div> */}
            <div className='col-md-12 mb-3'>
                <label htmlFor="" className='form-label'>Police Station</label>
                <input type="text" className='form-control' />
            </div>
            <div className='col-md-12 mb-3'>
                <label htmlFor="" className='form-label'>Pin Code</label>
                <input type="text" className='form-control' />
            </div>


        </div>
        <div className='col-md-12 d-flex justify-content-end mt-3'>
            <button type='button' className='btn btn-primary'>Save</button>
        </div>
    </>
}
export default AddContact