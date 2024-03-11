import { useState } from 'react'
import { BsReverseLayoutTextSidebarReverse } from 'react-icons/bs'
import Select from 'react-select'
function Leadfilters() {

    const [value, setValue] = useState(null)

    const options = [
        { value: 'Staff1 Sikandrabad', label: "Staff1 Sikandrabad" },
        { value: 'Shamim', label: 'Shamim' }
    ]
    const options1 = [
        { value: "Pending", label: "Pending" },
        { value: 'Failed To Accomplished', label: 'Failed To Accomplished' },
        { value: 'Completed', label: 'Completed' },
        {
            value: 'Customer', label: 'Customer'
        }
    ]
    const options2 = [
        { value: 'facebook', label: "facebook" },
        { value: 'Google', label: 'Google' },
        { value: 'IndiaMart', label: 'IndiaMart' }
    ]
    const options3 = [
        {
            value: "India", label: 'India'
        },
        { value: "Unknown", label: 'Unknown' }
    ]
    const options4 = [
        { value: 'Admission', label: 'Admission' },
        { value: 'Almonds', label: 'Almonds' },
        { value: " School", label: 'School' }
    ]
    const options5 = [
        { value: 'Junk', label: "junk" },
        { value: 'Lost', label: 'Lost' },
        { value: 'public', label: 'public' }
    ]
    const options6 = [
        { value: "Name", label: 'Name' },
        { value: 'Company', label: 'Company' },
        { value: "Email", label: 'Email' },
        { value: "phone", label: "phone" },
        { value: 'country', label: 'Country' }

    ]


    return (
        <>
            <div className="container">
                <div className="row size-column">
                    <div className="card">
                        <div className="carc-body">
                            <div className="row g-3 mb-3 mt-3">
                                <div className="col-md-3">
                                    <h4>Lead Filters</h4>
                                </div>
                                <div className="col-md-3"></div>
                                <div className="col-md-3"></div>
                                <div className="col-md-3 d-flex">
                                    <button className="btn btn-primary ml-1">New</button>
                                    <button className="btn btn-primary ml-1 ">Filter</button>
                                    <button
                                        type="button"
                                        className="btn btn-default dropdown-toggle ml-1"
                                        data-toggle="dropdown"
                                        aria-haspopup="true"
                                        aria-expanded="false"
                                    >
                                        <span> <BsReverseLayoutTextSidebarReverse /></span>
                                    </button>

                                </div>
                            </div>
                            <hr className='border border-2 border-secondary opacity-50' />
                            <div className='row g-3 mb-3 mt-3'>
                                <div className="col-md-2">
                                    <label htmlFor="">Staff Members</label>

                                    {/* <select name="" id="" className='form-select'>
                                        <option value="selected">Staff1 Sikandrabad</option>
                                        <option value="selected">Shamim </option>
                                    </select> */}
                                    <Select options={options} defaultValue={value} placeholder="All Staff" />
                                </div>
                                <div className="col-md-2">
                                    <label htmlFor="">Lead Status</label>
                                    {/* <select name="" id="" className='form-select '>

                                        <option value="selected">Pending </option>
                                        <option value="selected">Failed To Accomplished </option>
                                        <option value="selected">Completed </option>
                                        <option value="selected"> Customer </option>
                                    </select> */}
                                    <Select options={options1} defaultValue={value} placeholder="All"
                                        onChange={setValue}
                                        isMulti

                                    />

                                </div>
                                <div className="col-md-2">
                                    <label htmlFor="">Lead Source</label>
                                    {/* <select name="" id="" className='form-select '>

                                        <option value="selected">Facebook </option>
                                        <option value="selected">Google  </option>
                                        <option value="selected">IndiaMart </option>
                                        <option value="selected"> JustDial </option>
                                        <option value="selected"> Shopify </option>
                                        <option value="selected"> Customer </option>
                                        <option value="selected"> Web </option>
                                        <option value="selected"> Whatsapp </option>
                                    </select> */}
                                    <Select options={options2} defaultValue={value} placeholder="All"
                                        onChange={setValue}
                                        isMulti

                                    />
                                </div>
                                <div className="col-md-2">
                                    <label htmlFor="">Country </label>
                                    {/* <select name="" id="" className='form-select '>

                                        <option value="selected">India </option>
                                        <option value="selected">Unknown  </option>


                                    </select> */}
                                    <Select options={options3} defaultValue={value} placeholder="All"
                                        onChange={setValue}
                                        isMulti

                                    />
                                </div>
                                <div className="col-md-2">
                                    <label htmlFor="">Tags </label>
                                    {/* <select name="" id="" className='form-select '>

                                        <option value="selected">Admission </option>
                                        <option value="selected">Almonds  </option>
                                        <option value="selected">Birth  </option>
                                        <option value="selected">Widow Pension  </option>

                                    </select> */}
                                    <Select options={options4} defaultValue={value} placeholder="All"
                                        onChange={setValue}
                                        isMulti

                                    />
                                </div>
                                <div className="col-md-2">
                                    <label htmlFor="">Lead Type </label>
                                    {/* <select name="" id="" className='form-select '>
                                        <option value="selected">Nothing Selected </option>
                                        <option value="lost">Lost </option>
                                        <option value="Juk">Junk  </option>
                                        <option value="Public">Public  </option>
                                        <option value="Not Assigned">Not  Assigned  </option>


                                    </select> */}
                                    <Select options={options5} defaultValue={value} placeholder="Nothing Select"
                                    // onChange={setValue}
                                    // isMulti

                                    />
                                </div>
                                <div className="col-md-2">
                                    <label htmlFor="">Hide Expert Columns </label>
                                    {/* <select name="" id="" className='form-select '>
                                        <option value="">Nothing selected</option>
                                        <option value="name">Name</option>
                                        <option value="company">Company</option>
                                        <option value="email">Email</option>
                                        <option value="phonenumber" selected="">Phone</option>
                                        <option value="country" selected="">Country</option>

                                        <option value="leads_father_s_name" selected="">Father's Name</option>									<option value="status" selected="">Status</option>
                                        <option value="source" selected="">Source</option>
                                        <option value="dateadded">Created Date</option>
                                        <option value="lastcontact">Last Contact</option>
                                        <option value="is_public">Public</option>
                                        <option value="assigned">Assigned</option>
                                        <option value="tags">Tags</option>
                                    </select> */}
                                    <Select options={options6} defaultValue={value} placeholder="Nothing Select"
                                    // onChange={setValue}
                                    // isMulti

                                    />
                                </div>
                                <div className="col-md-2">
                                    <label htmlFor="">Filter By Date</label>
                                    <select name="" id="" className='form-select '>
                                        <option value="">Created Date</option>
                                        <option value="name">Last Contact</option>

                                    </select>
                                </div>
                                <div className="col-md-2">
                                    <label htmlFor="">Period </label>
                                    <select name="" id="" className='form-select '>
                                        <option value="">All Time</option>
                                        <option value="this_month">This Month</option>
                                        <option value="1">Last Month</option>
                                        <option value="this_year">This Year</option>
                                        <option value="last_year">Last Year</option>
                                        <option value="3" data-subtext="01/06/2023 - 31/08/2023">Last 3 months</option>
                                        <option value="6" data-subtext="01/03/2023 - 31/08/2023">Last 6 months</option>
                                        <option value="12" data-subtext="01/09/2022 - 31/08/2023">Last 12 months</option>
                                        <option value="custom">Period</option>

                                    </select>
                                </div>
                            </div>
                            <div className='col-md-12'>
                                <div className="input-group mb-3">
                                    <div className="input-group-text ">
                                        <input
                                            className="form-check-input m-auto"
                                            type="checkbox"
                                            defaultValue=""
                                            aria-label="Checkbox for following text input"
                                        />
                                    </div>
                                    <input
                                        type="text"
                                        className="form-control"
                                        aria-label="Text input with checkbox"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )

}

export default Leadfilters