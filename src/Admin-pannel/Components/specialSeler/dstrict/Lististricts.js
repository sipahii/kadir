

import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useBrandActiveMutation, useDeleteBrandMutation, useDeletedistrictMutation, useGetBrandsQuery, useGetDistrictQuery } from "../../all-products/allproductsApi/allProductsApi"
import { ToastContainer, toast } from "react-toastify";

function District() {
    const [inputVal, setInputVal] = useState({ search: '' });
    const token = window.localStorage.getItem('token')
    const { isLoading, data } = useGetDistrictQuery(token);
    const copiedData = { ...data }
    const [blankArr, setBlankArr] = useState([])


    useEffect(() => {
        setBlankArr(data)
    }, [data]);

    const onChangeHandler = (e) => {
        const inpVal = e.target.value
        setInputVal(inpVal)
    }

    const searchData = () => {
        const filteredData = data && data.filter((item) => {
            if (item.name === inputVal || item.brand === inputVal) {
                return true
            }
        })
        setBlankArr(filteredData)
    }

    const [deleteBrand, response] = useDeletedistrictMutation();

    function deleteBrandData(id) {
        deleteBrand({ id: id, token: token })
    }

    useEffect(() => {
        if (response.isSuccess === true) {
            alert('District deleted Successfully')
        }
    }, [response.isSuccess])

    const [updateActive, { isSuccess, isError }] = useBrandActiveMutation()

    const changeStatus = (item) => {
        const obj = { id: item._id, data: { active: !item.active } }
        updateActive(obj)
    }


    const toastSuccessMessage = () => {
        toast.success("District Updated Successfully", {
            position: "top-center"
        })
    };

    const toastErrorMessage = () => {
        toast.error("District Update Faild..", {
            position: "top-center"
        })
    };

    useEffect(() => {
        if (isSuccess === true) {
            toastSuccessMessage()
        };
    }, [isSuccess]);

    useEffect(() => {
        if (isError === true) {
            toastErrorMessage()
        };
    }, [isError])

    return (
        <>
            <div className=" col-lg-10 ">
                <div className="card">
                    <div className="card-header row gutters-5">
                        <div className="col text-center text-md-left">
                            <h5 className="mb-md-0 h6">List District</h5>
                        </div>
                        <ToastContainer />
                        <div className="col-md-4">
                            <form >
                                <div className="input-group input-group-sm">
                                    <input type="text" className="form-control" id="search" name="search" placeholder="Type" fdprocessedid="jv5p0d" onChange={onChangeHandler} />
                                    <button type="button" onClick={searchData} className="btn btn-primary" style={{ padding: '0 10px' }} >Search</button>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div className="card-body">
                        {isLoading ? <h2>Loading...</h2>
                            : <table className="table aiz-table mb-0 footable footable-1 breakpoint-xl" style={{}}>
                                <thead>
                                    <tr className="footable-header">
                                        <th className="footable-first-visible" style={{ display: 'table-cell' }}>#</th>
                                        <th style={{ display: 'table-cell' }}>Title</th>
                                        <th style={{ display: 'table-cell' }}>Division</th>
                                        <th style={{ display: 'table-cell' }}>Unique Code</th>
                                        <th style={{ display: 'table-cell' }}>Sort No</th>
                                        <th className="text-right footable-last-visible" style={{ display: 'table-cell' }}>Options</th>
                                    </tr>
                                </thead>
                                <tbody>

                                    {blankArr && blankArr.map((item, i) => {
                                        return <tr key={item._id}>
                                            <td style={{ display: 'table-cell' }}>{i + 1}</td>
                                            <td style={{ display: 'table-cell' }}>{item.title}</td>
                                            <td style={{ display: 'table-cell' }}>{item.division?.length && item.division[0].title}</td>
                                            <td style={{ display: 'table-cell' }}>{item.uniqueCode}</td>

                                            <td style={{ display: "table-cell" }}>
                                              {item?.sortNo}
                                            </td>
    
                                            <td className="text-right footable-last-visible" style={{ display: 'table-cell' }}>
                                                <Link to={`/admin/district/edit/${item.uid}`} className="btn btn-soft-primary btn-icon btn-circle btn-sm" title="Edit">
                                                    <i className="las la-edit" />
                                                </Link>
                                                <button type="button" onClick={() => { deleteBrandData(item.uid) }} className="btn btn-soft-danger btn-icon btn-circle btn-sm">
                                                    <i className="las la-trash" />
                                                </button>
                                            </td>

                                        </tr>
                                    })}

                                </tbody>
                            </table>
                        }
                        <div className="aiz-pagination">
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default District