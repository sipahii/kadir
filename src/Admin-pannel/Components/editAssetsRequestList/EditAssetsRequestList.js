import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';

function EditAssetsRequestList() {
    const params = useParams();
    console.log('params--', params)
    const [inputval, setInputval] = useState({ status: '' });
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
        // getData()
    }, []);

    const updateStatus = async () => {
        try {
            const resp = await axios.put(`https://onlineparttimejobs.in/api/assetIssueTransaction/update_assetIssues/${params.id}`, inputval,
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


    return (
        <>
            <div className="col-md-6">
                <div className="card">
                    <div className="card-header">
                        <h5 className="mb-0 h6">Update Request Status</h5>
                    </div>
                    <div className="card-body">
                        <form>
                            <div className="form-group mb-3">
                                <select className="form-select" value={inputval?.status} name='status' aria-label="Default select example" onChange={onChangeHandler}>
                                    {/* {data && data.map((item, i) => {
                                        return <option value={item._id} key={i}>{item.name}</option>
                                    })} */}\
                                    <option value={'Pending'}>Pending</option>
                                    <option value={'Rejected'}>Rejected</option>
                                    <option value={'Accepted'}>Accepted</option>
                                </select>
                            </div>

                            <div className="form-group mb-3 text-right">
                                <button type="button" className="btn btn-primary" onClick={updateStatus}>Update</button>
                            </div>
                        </form>
                    </div>
                </div>
                <ToastContainer />
            </div>
        </>
    )
}

export default EditAssetsRequestList