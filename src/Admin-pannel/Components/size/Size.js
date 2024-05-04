import React, { useEffect, useState } from 'react'
import { useAddNewSizeMutation, useDeleteSizeMutation, useGetSizesQuery } from '../all-products/allproductsApi/allProductsApi';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link } from 'react-router-dom';
import ExportDataInPdf from '../../../common/exportDataInPdf/ExportDataInPdf';
import ReactHTMLTableToExcel from 'react-html-table-to-excel';

function Size() {
    const [inputVal, setInputval] = useState({ size: "", size_code: "" });

    const { isLoading, data } = useGetSizesQuery();
    const [addNewSize, response] = useAddNewSizeMutation();
    const [inpVal, setInpVal] = useState({ search: '' })
    const [blankArr, setBlankArr] = useState([]);
    console.log(data)

    const changeHandler = (e) => {
        const inpName = e.target.name;
        const inpVal = e.target.value;
        const clonedObj = { ...inputVal }
        clonedObj[inpName] = inpVal
        setInputval(clonedObj)
    };

    useEffect(() => {
        setBlankArr(data)
    }, [data])

    const onChangeSize = (e) => {
        const val = e.target.value
        setInpVal(val)
    }
    const searchData = () => {
        const filteredData = data && data.filter((item) => {
            if (!item.size) {
                return
            }
            if (item.size === inpVal || item.size_code) {
                return item
            }
        })
        setBlankArr(filteredData)
    }

    const submitSizeData = (e) => {
        e.preventDefault();
        addNewSize(inputVal)
        document.getElementById("create-course-form").reset();
    };

    console.log(response);

    const toastSuccessMessage = () => {
        toast.success("Size added Successfully", {
            position: "top-center"
        })
    };

    if (response.isSuccess === true) {
        toastSuccessMessage()
    };
    if (response.isError === true) {
        alert('!Error Size not added')
    }

    const [deleteSData, res] = useDeleteSizeMutation()

    function deleteSizeData(id) {
        deleteSData(id)
    }

    console.log('-------size ka res', res)

    return (
        <>
            <div className="aiz-main-content">
                <div className="px-15px px-lg-25px">
                    <div className="aiz-titlebar text-left mt-2 mb-3">
                        <div className="align-items-center">
                            <h1 className="h3">All Sizes</h1>
                        </div>
                    </div>
                    <div className="row">
                        {/* <Sizes /> */}
                        <div className=" col-lg-7 ">
                            <div className="card">

                                {/* <form>
                                    <div className="card-header">
                                        <h5 className="mb-0 h6">Sizes</h5>
                                        <div className="col-md-5">
                                            <div className="form-group mb-0 d-flex">
                                                <input type="text" name='search' className="form-control form-control-sm" placeholder="Type" fdprocessedid="07jxbu" onChange={onChangeSize} />
                                                <button className='btn btn-primary' type='button' onClick={searchData}>Search</button>
                                            </div>
                                        </div>
                                    </div>
                                </form> */}

                                <div className="card-header row">
                                    <div className="row align-items-center">
                                        <div className="col-lg-3 text-center text-md-left">
                                            <h5 className="mb-md-0 h6">All Sizes</h5>
                                        </div>
                                        {data && <div className="col-lg-3" >
                                            <button style={{ background: '#2e294e', padding: '0', color: 'white', borderRadius: '5px' }}>
                                                <ReactHTMLTableToExcel
                                                    style={{ margin: '0' }}
                                                    id="test-table-xls-button"
                                                    className="download-table-xls-button cusxel"
                                                    table="table-to-xlsx"
                                                    filename="tablexls"
                                                    sheet="tablexls"
                                                    buttonText="Download Excel sheet" />
                                            </button>
                                        </div>}
                                        {data && <div className="col-lg-3 text-md-right">
                                            <ExportDataInPdf />
                                        </div>}

                                        <div className="col-lg-3">
                                            <form id="sort_currencies">
                                                <div className="form-group mb-0 d-flex">
                                                    <input type="text" name='search' className="form-control form-control-sm" placeholder="Type" fdprocessedid="07jxbu" onChange={onChangeSize} />
                                                    <button className='btn btn-primary' type='button' onClick={searchData}>Search</button>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>

                                <div className="card-body">
                                    {isLoading ? <h2>Loading...</h2>
                                        : <table className="table aiz-table mb-0 footable footable-1 breakpoint-xl exppdf" style={{}}>
                                            <thead>
                                                <tr className="footable-header">
                                                    <th className="footable-first-visible" style={{ display: 'table-cell' }}>#</th>
                                                    <th style={{ display: 'table-cell' }}>Size</th>
                                                    <th className="text-right footable-last-visible" style={{ display: 'table-cell' }}>Options</th>
                                                </tr>
                                            </thead>
                                            <tbody>

                                                {blankArr && blankArr.map((item, i) => {
                                                    return <tr key={item._id}>
                                                        <td className="footable-first-visible" style={{ display: 'table-cell' }}>{i + 1}</td>
                                                        <td style={{ display: 'table-cell' }}>{item.size || item.size_code}</td>
                                                        <td className="text-right footable-last-visible" style={{ display: 'table-cell' }}>
                                                            <Link to={`edit/${item._id}`} className="btn btn-soft-primary btn-icon btn-circle btn-sm" title="Edit">
                                                                <i className="las la-edit" />
                                                            </Link>

                                                            <button type='button' onClick={() => { deleteSizeData(item._id) }} className="btn btn-soft-danger btn-icon btn-circle btn-sm ms-1">
                                                                <i className="las la-trash" />
                                                            </button>
                                                        </td>
                                                    </tr>
                                                })}

                                            </tbody>
                                        </table>
                                    }
                                    <div className="aiz-pagination">
                                        <nav>
                                            <ul className="pagination">
                                                <li className="page-item disabled" aria-disabled="true" aria-label="« Previous">
                                                    <span className="page-link" aria-hidden="true">‹</span>
                                                </li>
                                                <li className="page-item active" aria-current="page">
                                                    <span className="page-link">1</span>
                                                </li>
                                                <li className="page-item">
                                                    <a className="page-link" href="https://mmslfashions.in/admin/colors?page=2">2</a>
                                                </li>
                                                <li className="page-item">
                                                    <a className="page-link" href="https://mmslfashions.in/admin/colors?page=3">3</a>
                                                </li>
                                                <li className="page-item">
                                                    <a className="page-link" href="https://mmslfashions.in/admin/colors?page=4">4</a>
                                                </li>
                                                <li className="page-item">
                                                    <a className="page-link" href="https://mmslfashions.in/admin/colors?page=5">5</a>
                                                </li>
                                                <li className="page-item">
                                                    <a className="page-link" href="https://mmslfashions.in/admin/colors?page=6">6</a>
                                                </li>
                                                <li className="page-item">
                                                    <a className="page-link" href="https://mmslfashions.in/admin/colors?page=7">7</a>
                                                </li>
                                                <li className="page-item">
                                                    <a className="page-link" href="https://mmslfashions.in/admin/colors?page=8">8</a>
                                                </li>
                                                <li className="page-item">
                                                    <a className="page-link" href="https://mmslfashions.in/admin/colors?page=9">9</a>
                                                </li>
                                                <li className="page-item">
                                                    <a className="page-link" href="https://mmslfashions.in/admin/colors?page=10">10</a>
                                                </li>
                                                <li className="page-item disabled" aria-disabled="true">
                                                    <span className="page-link">...</span>
                                                </li>
                                                <li className="page-item">
                                                    <a className="page-link" href="https://mmslfashions.in/admin/colors?page=14">14</a>
                                                </li>
                                                <li className="page-item">
                                                    <a className="page-link" href="https://mmslfashions.in/admin/colors?page=15">15</a>
                                                </li>
                                                <li className="page-item">
                                                    <a className="page-link" href="https://mmslfashions.in/admin/colors?page=2" rel="next" aria-label="Next »">
                                                    </a>
                                                </li>
                                            </ul>
                                        </nav>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-5">

                            <div className="card">
                                <div className="card-header">
                                    <h5 className="mb-0 h6">Add New Sizes</h5>
                                </div>
                                <div className="card-body">
                                    <form id="create-course-form" onSubmit={submitSizeData}>
                                        <input type="hidden" name="_token" defaultValue="mFQ16X9Zo13qx9C2bzuKYymExbrY6MHLe0ZCOO2a" />
                                        <div className="form-group mb-3">
                                            <label htmlFor="name">Size</label>
                                            <input type="text" placeholder="size" id="name" name="size" className="form-control" required onChange={changeHandler} autoComplete="off" />
                                        </div>
                                        <div className="form-group mb-3">
                                            <label htmlFor="name">Size Code</label>
                                            <input type="text" placeholder="Size Code" id="code" name="size_code" className="form-control" required onChange={changeHandler} autoComplete="off" />
                                        </div>
                                        <div className="form-group mb-3 text-right">
                                            <button type="submit" className="btn btn-primary" >Add Size</button>
                                        </div>
                                    </form>
                                </div>
                            </div>

                            {/* <AddNewColors />
                            <ColorFilterActivation /> */}

                            <div className="card">
                                <div className="card-header">
                                    <h3 className="mb-0 h6">Size filter activation</h3>
                                </div>
                                <div className="card-body text-center">
                                    <label className="aiz-switch aiz-switch-success mb-0">
                                        <input type="checkbox" />
                                        <span className="slider round" />
                                    </label>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>

                <table className="table aiz-table mb-0 footable footable-1 breakpoint-xl" id='table-to-xlsx' style={{ display: 'none' }}>
                    <thead>
                        <tr className="footable-header">
                            <th className="footable-first-visible" style={{ display: 'table-cell' }}>#</th>
                            <th style={{ display: 'table-cell' }}>Size</th>
                        </tr>
                    </thead>
                    <tbody>

                        {blankArr && blankArr.map((item, i) => {
                            return <tr key={item._id}>
                                <td className="footable-first-visible" style={{ display: 'table-cell' }}>{i + 1}</td>
                                <td style={{ display: 'table-cell' }}>{item.size || item.size_code}</td>
                            </tr>
                        })}

                    </tbody>
                </table>
            </div>
            <ToastContainer />
        </>
    )
}

export default Size