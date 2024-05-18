import axios from "axios";
import { useEffect, useState } from "react"
import { AiFillEdit } from "react-icons/ai"
import { Link } from "react-router-dom"
import { ToastContainer, toast } from "react-toastify";
import ExportDataInPdf from "../../../../common/exportDataInPdf/ExportDataInPdf";
import ReactHTMLTableToExcel from 'react-html-table-to-excel';

function ShopForModule() {
    const [getListData, setgetListData] = useState(null);
    const [loading, setLoading] = useState(true)
    const token = window.localStorage.getItem('adminToken');

    const [isLoading, setIsLoading] = useState();
    const [data, setData] = useState();
    const [totalCount, setTotalCount] = useState();
    const [pageIndex, setPageIndex] = useState(0)
    const [countToShowInTable, setCountToShowInTable] = useState(10)
    const [inpVal, setinpval] = useState({
        name: '', code: '', status: '', isActive: ''
    });

    const getdata = async () => {
        setLoading(true)
        try {
            const res = await axios.get('https://onlineparttimejobs.in/api/shopForModule', {
                headers: {
                    "Content-type": "application/json; charset=UTF-8",
                    Authorization: `Bearer ${token}`,
                },
            })
            setgetListData(res?.data)
            setLoading(false)
        } catch (error) {
            setLoading(false)
        }
    };

    const toastSuccessMessage = () => {
        toast.success("Shop For Module Deleted", {
            position: "top-center"
        })
    };
    const toastErrorMessage = () => {
        toast.error("Shop For Module Not Deleted ", {
            position: "top-center"
        })
    };

    const deletData = async (id) => {
        setLoading(true)
        try {
            const res = await axios.delete(`https://onlineparttimejobs.in/api/shopForModule/delete_shopFormodule/${id}`, {
                headers: {
                    "Content-type": "application/json; charset=UTF-8",
                    Authorization: `Bearer ${token}`,
                },
            });
            toastSuccessMessage()
            getdata()
        } catch (error) {
            toastErrorMessage()
            setLoading(false)
        }
    }

    useEffect(() => {
        getdata()
    }, []);


    // const getPaginationListData = async (pageNo) => {
    //     try {
    //         setIsLoading(true)
    //         const res = await axios.get(`https://onlineparttimejobs.in/api/customer/page/${pageNo}`, {
    //             headers: {
    //                 'Content-type': 'application/json; charset=UTF-8',
    //                 'Authorization': 'Bearer ' + token
    //             }
    //         });
    //         setIsLoading(false)
    //         console.log('AllPRDRESSSSS---', res?.data)
    //         setData(res?.data?.allCustomers)
    //         setTotalCount(res?.data?.page)
    //     } catch (error) {
    //         setIsLoading(false)
    //     }
    // };
    // useEffect(() => {
    //     getPaginationListData(0);
    // }, []);
    // const onChangeVal = (e) => {
    //     getPaginationListData(e - 1)
    //     setPageIndex(e - 1)
    // };

    const onChangeHandle = (e) => {
        const { name, value } = e.target;
        const clonedObj = { ...inpVal };
        clonedObj[name] = value
        setinpval(clonedObj)
    };
    const submitFilterData = () => {
        console.log('inputVal---', inpVal)
    };
    const resetData = () => {
        setinpval({
            name: '', code: '', status: '', isActive: ''
        })
        getdata();
    };





    return (
        <>
            <div className="aiz-main-content">
                <div className="px-15px px-lg-25px">
                    <div className="card">
                        {/* <div className="card-header">
                            <h5 className="mb-0 h6">Shop For Module</h5>
                            <div className="col-md-6 text-md-right">
                                <Link to="/admin/add-shop-for-module" className="btn btn-circle btn-info">
                                    <span>Add Shop For Module</span>
                                </Link>
                            </div>
                        </div> */}

                        <div className="card-header custom-card-header" id="custome-cardHeader">
                            <div className="row">
                                <div className="col-lg-6">
                                    <h5 className="mb-0 h6">Shop For Module</h5>
                                </div>
                                {getListData?.length ? <div className="col-lg-2 text-right" >
                                    <button style={{ background: '#2e294e', padding: '0', color: 'white', borderRadius: '5px', margin: '0' }}>
                                        <ReactHTMLTableToExcel
                                            style={{ margin: '0' }}
                                            id="test-table-xls-button"
                                            className="download-table-xls-button cusxel"
                                            table="table-to-xlsx"
                                            filename="tablexls"
                                            sheet="tablexls"
                                            buttonText="Download Excel sheet" />
                                    </button>
                                </div> : null}
                                {getListData?.length ? <div className="col-lg-2">
                                    <ExportDataInPdf />
                                </div> : null}

                                <div className="col-lg-2 text-md-right">
                                    <Link to="/admin/add-shop-for-module" className="btn btn-info">
                                        <span>Shop For Module</span>
                                    </Link>
                                </div>
                            </div>
                        </div>


                        <div className="card-body">

                            <section className="form-section">
                                <div className="row">
                                    {/* <form action=""> */}
                                    <div className="col-lg-3">
                                        <div>
                                            <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Name" name="name" value={inpVal?.name} onChange={onChangeHandle} />
                                        </div>
                                    </div>
                                    <div className="col-lg-3">
                                        <div>
                                            <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Code" name="code" value={inpVal?.code} onChange={onChangeHandle} />
                                        </div>
                                    </div>
                                    <div className="col-lg-3">
                                        <select className="form-select" aria-label="Default select example" name="status" value={inpVal?.status} onChange={onChangeHandle}>
                                            <option selected>Status</option>
                                            <option value={'Active'}>Active</option>
                                            <option value={'Inactive'}>Inactive</option>
                                        </select>
                                    </div>
                                    {/* <div className="col-lg-3">
                                        <select className="form-select" aria-label="Default select example" name="isActive" value={inpVal?.isActive} onChange={onChangeHandle}>
                                            <option selected>Default</option>
                                            <option value={1}>Active</option>
                                            <option value={1}>Inactive</option>
                                        </select>
                                    </div> */}
                                    <div className="col-lg-3">
                                        <button className="btn btn-primary mr-3" type="button" onClick={submitFilterData}>Search</button>
                                        <button className="btn btn-danger" type="button" onClick={resetData}>Reset</button>
                                    </div>
                                    {/* </form> */}
                                </div>
                            </section>


                            <table className="table table-3 exppdf">
                                <thead>
                                    <tr>
                                        <th class="table-secondary" scope="col">#</th>
                                        <th class="table-secondary" scope="col">Name</th>
                                        <th class="table-secondary" scope="col">Code</th>
                                        <th class="table-secondary" scope="col">Status</th>
                                        <th class="table-secondary" scope="col">Default</th>
                                        <th class="table-secondary" scope="col">Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {loading ? <div className="preloaderCount">
                                        <div className="spinner-border" role="status">
                                            <span className="visually-hidden">Loading...</span>
                                        </div>
                                    </div> : getListData && getListData?.map((item, i) => {
                                        return <tr key={i}>
                                            <td scope="row">{i + 1}</td>
                                            <td scope="row">{item?.name}</td>
                                            <td>{item?.code}</td>
                                            <td>{item?.isActive ? 'Active' : 'InActive'}</td>
                                            <td>{item?.isDefault ? 'Active' : 'InActive'}</td>
                                            <td>
                                                <Link className="btn btn-primary btn-icon btn-circle btn-sm me-2 btn-circle-2" title="View" to={`edit/${item?.uid}`}>
                                                    <i className="las la-edit">
                                                    </i>
                                                    {/* <AiFillEdit className="icon-icon" /> */}
                                                </Link>
                                                <button type="button" onClick={() => deletData(item?.uid)} className="btn btn-danger btn-icon btn-circle btn-sm btn-circle-2" title="delete" fdprocessedid="yghhlt">
                                                    <i className="las la-trash icon-icon">
                                                    </i>
                                                </button>
                                            </td>
                                        </tr>
                                    })}

                                </tbody>
                            </table>


                            <div className="aiz-pagination">
                            </div>
                        </div>
                    </div>
                </div>
                <div className="bg-white text-center py-3 px-15px px-lg-25px mt-auto">
                </div>
                <ToastContainer />


                <table className="table table-3" id="table-to-xlsx" style={{ display: 'none' }}>
                    <thead>
                        <tr>
                            <th class="table-secondary" scope="col">Name</th>
                            <th class="table-secondary" scope="col">Code</th>
                            <th class="table-secondary" scope="col">Status</th>
                            <th class="table-secondary" scope="col">Default</th>
                        </tr>
                    </thead>
                    <tbody>
                        {loading ? <h3>Loading...</h3> : getListData && getListData.map((item, i) => {
                            return <tr key={i}>
                                <td scope="row">{item?.name}</td>
                                <td>{item?.code}</td>
                                <td>{item?.isActive ? 'Active' : 'InActive'}</td>
                                <td>{item?.isDefault ? 'Active' : 'InActive'}</td>
                            </tr>
                        })}

                    </tbody>
                </table>
            </div >
        </>
    )
}
export default ShopForModule