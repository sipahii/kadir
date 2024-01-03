
import React, { useEffect, useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import axios from 'axios';

function AddAssestsRequest() {
    const [inputval, setInputval] = useState({ asset_Id: '' });
    const [showUl, setShowUl] = useState(false);
    const [data, setData] = useState();

    const onChangeHandler = (e) => {
        const inpName = e.target.name;
        const inpval = e.target.value;
        const clonedObj = { ...inputval };
        clonedObj[inpName] = inpval;
        setInputval(clonedObj)
    };

    const getData = async () => {
        try {
            const resp = await axios.get('https://onlineparttimejobs.in/api/asset');
            setData(resp.data)
        } catch (error) {
            alert('server error')
        }
    }
    useEffect(() => {
        getData()
    }, []);

    const sendSearchData = async () => {
        try {
            const resp = await axios.post('https://onlineparttimejobs.in/api/assetIssueTransaction/add_assetIssues', inputval,
                {
                    headers: {
                        Authorization: 'Bearer ' + window.localStorage.getItem('adminToken')
                    }
                }
            );
            alert('success')
        } catch (error) {
            alert('server error')
        }
    };
    useEffect(() => {
        // sendSearchData()
    }, []);

    console.log('inputval--', inputval)

    return (
        <>
            <div className="col-md-6">
                <div className="card">
                    <div className="card-header">
                        <h5 className="mb-0 h6">Assests Request</h5>
                    </div>
                    <div className="card-body">
                        <form>
                            <div className="form-group mb-3">
                                {/* <label htmlFor="name">Assets</label>
                                <input type="text" placeholder="Enter Service Tag" name="asset_Id" onKeyDown={handleKeyDown} className="form-control" required onChange={onChangeHandler} /> */}
                                {/* {showUl &&
                                    <ul className='col-sm-9 col-from-label p-2' style={{ backgroundColor: 'aqua' }}>
                                        {data && data.map((item, i) => {
                                            return <li className='col-sm-9 m-2' style={{ backgroundColor: 'gainsboro', cursor: 'pointer' }} onClick={() => selectUser(item)}>{item?.firstname + " " + item?.lastname}</li>
                                        })}
                                    </ul>
                                } */}

                                <select className="form-select" value={inputval?.asset_Id} name='asset_Id' aria-label="Default select example" onChange={onChangeHandler}>
                                    {data && data.map((item, i) => {
                                        return <option value={item._id} key={i}>{item.name}</option>
                                    })}
                                </select>
                            </div>
                            {/* <div className="form-group mb-3">
                                <label htmlFor="name" style={{ fontSize: '18px', marginRight: '5px', fontWeight: 'bold' }}>Name: </label>
                                <span style={{ fontSize: '18px', color: 'gray' }}>Pulkit</span>
                            </div>
                            <div className="form-group mb-3">
                                <label htmlFor="name" style={{ fontSize: '18px', marginRight: '5px', fontWeight: 'bold' }}>Model No: </label>
                                <span style={{ fontSize: '18px', color: 'gray' }}>31331</span>
                            </div>

                            <div className="form-group mb-3">
                                <label htmlFor="name" style={{ fontSize: '18px', marginRight: '5px', fontWeight: 'bold' }}>Avaibility: </label>
                                <span style={{ fontSize: '18px', color: 'gray' }}>True</span>
                            </div> */}


                            <div className="form-group mb-3 text-right">
                                <button type="button" className="btn btn-primary" onClick={sendSearchData}>Request</button>
                            </div>
                        </form>
                    </div>
                </div>
                <ToastContainer />
            </div>
        </>
    )
}

export default AddAssestsRequest