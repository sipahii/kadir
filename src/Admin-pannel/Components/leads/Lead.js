import { AiOutlinePlus } from 'react-icons/ai'
import { BsFillTagFill } from 'react-icons/bs'
import { TfiReload } from 'react-icons/tfi'
import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { AiOutlineBarChart } from 'react-icons/ai'
import { MdOutlineTableRows } from 'react-icons/md'
// import { TfiReload } from 'react-icons/tfi' 
import Select from 'react-select';
import ModalLead from './ModalLead';
import axios from 'axios';
import { Form } from 'react-bootstrap';



function Leads() {

    const [show, setShow] = useState(false);
    const [value, setValue] = useState(null)

    const [modalShow, setModalShow] = useState(false);
    const handleShow = () => setShow(true);


    const option = [
        { value: 'Staff1 Shinkandrabad', label: "Staff1 Shinkandrabad" },
        { value: 'Azharuddin', label: "Azharuddin" },
    ]
    const options = [
        { value: 'Pending', label: 'Pending' },
        { value: 'Completed', label: 'Completed' },
        { value: 'Failed To Accomplished', label: 'Failed To Accomplished' }
    ]
    const options1 = [
        { value: " Facebook", label: "Facebook" },
        { value: " Google", label: "Google" },
        { value: " IndiaMart", label: "IndiaMart" },
        { value: " Facebook", label: "Facebook" }
    ]
    const options2 = [
        { value: " Lost", label: "Lost" },
        { value: " Junk", label: "Junk" },
        { value: " Public", label: "Public" },
        { value: " Created Today", label: "Created Today" },

    ]

    const arr3 = [
        { value: 'Azharruddin', label: 'Azharruddin' },
        { value: 'Staff1', label: 'Staff1' },
        { value: 'Staff1', label: 'Staff11' },
        { value: 'Staff1', label: 'Staff12' },
        { value: 'Staff1', label: 'Staff13' },
        { value: 'Staff1', label: 'Staff14' }
    ]
    const arr4 = [
        { value: 'Afghanistan', label: 'Afghanistan' },
        { value: 'Aland Islands', label: 'Aland Islands' },
        { value: 'Albania', label: 'Albania' },
        { value: 'Algeria', label: 'Algeria' },
        { value: 'American Samoa', label: 'American Samoa' },
        { value: 'Andorra', label: 'Andorra' },
        { value: 'Angola', label: 'Angola' },
        { value: 'Anguilla', label: 'Anguilla' },

    ]
    const token = window.localStorage.getItem('adminToken')
    const [data, setData] = useState()

    const getData = async () => {
        const res = await axios.get(`https://onlineparttimejobs.in/api/lead`, {
            headers: {
                "Content-type": "application/json; charset=UTF-8",
                Authorization: `Bearer ${token}`,
            },
        })
        setData(res.data)
    }

    useEffect(() => {
        getData()
    }, [])

    return (
        <>
            <div className="container-fluid">
                <div className="row size-column">

                    <div className='col-md-5 d-flex'>
                        <Button variant="primary d-flex" onClick={() => setModalShow(true)} style={{ width: 200, height: 40, fontSize: "inherit" }}>
                            New Lead
                        </Button>

                        {modalShow && <ModalLead show={modalShow}
                            onHide={() => setModalShow(false)} getData={getData} />}



                        <button type='button' className='btn btn-primary form-control ml-1' onClick={handleShow}>Import Leads</button>
                        <button type="button " className="btn btn-outline-secondary ml-2">
                            <AiOutlineBarChart />

                        </button>
                        <button type="button " className="btn btn-outline-secondary ml-1">
                            <MdOutlineTableRows />

                        </button>

                    </div>
                    <div className='col-md-7'>
                    </div>
                    <div className='card mt-3'>
                        <div className='card-body'>


                            <div className='col-md-12'>
                                <p className='bold'>Filter by</p>
                            </div>
                            <div className="row">
                                <div className='col-md-3'>
                                    <div className=" mb-3">
                                        <Select options={option} defaultValue={value} placeholder="" />
                                    </div>

                                </div>
                                <div className='col-md-3'>
                                    <div className="mb-3">

                                        <Select options={options} defaultValue={value} placeholder="Leads"
                                            onChange={setValue}
                                            isMulti

                                        />
                                    </div>

                                    {/* <Multiselect
                                            isObject={true}
                                            displayValue="name"
                                            options={arr}
                                            showCheckbox
                                            selectedValues={[]}
                                        /> */}

                                </div>
                                <div className='col-md-3'>
                                    <div className="mb-3">
                                        <Select options={options1} defaultValue={value} placeholder="Source" />
                                    </div>
                                </div>
                                <div className='col-md-3'>

                                    <div className=" mb-3">
                                        <Select options={options2} defaultValue={value} placeholder="Additional Filters" />
                                    </div>


                                </div>

                            </div>
                            <hr className='border border-2 border-secondary opacity-50' />
                            <div className='row'>
                                <div className="col-md-7 row">
                                    <div className="col-sm-3">
                                        <select class="form-select " aria-label="Default select example">
                                            <option selected>0</option>
                                            <option value="10">10</option>
                                            <option value="25">25</option>
                                            <option value="50">50</option>
                                            <option value="100">100</option>
                                            <option value="4">all</option>
                                        </select>
                                    </div>
                                    <div className="col-sm-3 d-flex ">
                                        <button type="button " className="btn btn-outline-secondary">
                                            Export
                                        </button>
                                        <button className="btn btn-outline-secondary">
                                            Bulk
                                        </button>
                                        <button className="btn btn-outline-secondary">
                                            <TfiReload />
                                        </button>
                                    </div>

                                </div>
                            </div>
                            <div className='col-md-12 mt-3'>
                                <div className="table-responsive">
                                    <table className="table table-leads customizable-table number-index-2 dataTable no-footer">
                                        <thead>
                                            <tr>
                                                <th><input type="checkbox" name="" id="" /></th>
                                                <th>#</th>
                                                <th>Name</th>
                                                <th>Email</th>
                                                <th>Phone</th>
                                                <th>Value</th>
                                                <th>Tags</th>
                                                <th>Assigned</th>
                                                <th>Status</th>
                                                <th>Source</th>
                                                <th>Country</th>
                                                <th>Created</th>
                                                {/* <th>Father's Name</th> */}
                                            </tr>

                                        </thead>
                                        <tbody>
                                            {data && data.map((item, i) => {
                                                return <tr key={i}>
                                                    <td>
                                                        <div className='boxing'>
                                                            <Form.Check
                                                                type={'checkbox'}
                                                                id={`default-${i}`}
                                                            />
                                                        </div>

                                                    </td>
                                                    <td>{1 + i}</td>
                                                    <td>{item.name}</td>
                                                    <td>{item.email}</td>
                                                    <td>{item.phone}</td>
                                                    <td>{item.leadValue}</td>
                                                    <td>---</td>
                                                    <td>---</td>
                                                    <td>---</td>
                                                    <td>{item?.source[0]?.name}</td>
                                                    <td>{item.country[0]?.name}</td>
                                                    <td>{item.createdAt}</td>
                                                </tr>
                                            })}

                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Leads