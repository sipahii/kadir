
import { SlideshowLightbox } from "lightbox.js-react";
import "lightbox.js-react/dist/index.css";
import "lightbox.js-react/dist/index.css";
import { Link } from "react-router-dom";
import { useDeleteSellerListMutation, useGetSellersQuery, useSellerActiveMutation } from "../all-products/allproductsApi/allProductsApi";
import { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import axios from "axios";


function ListChiragFoundationOrdersComp() {
    const token = window.localStorage.getItem('token')
    // const { data } = useGetSellersQuery(token);

    const [listDonatedData, setListDonatedData] = useState();

    const getData = async () => {
        try {
            const res = await axios.get('https://onlineparttimejobs.in/api/transactionPurchase', {
                headers: {
                    "Content-type": "application/json; charset=UTF-8",
                    Authorization: `Bearer ${token}`,
                },
            });
            console.log('resDDDDD--', res.data)
            setListDonatedData(res.data)
        } catch (error) {
            alert('Server Error')
        }
    };

    useEffect(() => {
        getData()
    }, []);


    const [deleteItem, { isLoading }] = useDeleteSellerListMutation()

    const deleteData = async (id) => {
        try {
            const res = await axios.delete(`https://onlineparttimejobs.in/api/transactionPurchase/delete_transactionPurchase/${id}`, {
                headers: {
                    "Content-type": "application/json; charset=UTF-8",
                    Authorization: `Bearer ${token}`,
                },
            });
            getData()
            alert('Deleted')
        } catch (error) {
            alert('Server Error')
        }
    };

    const [updateStatus, { isError, isLoading: updateLoading, isSuccess }] = useSellerActiveMutation()

    const changeStatus = (item) => {
        const obj = { id: item._id, data: { approve: !item.approve } }
        updateStatus(obj)
    }

    const toastSuccessMessage = () => {
        toast.success("Seller Update Successfully", {
            position: "top-center"
        })
    };

    const toastErrorMessage = () => {
        toast.error("Seller Update Faild..", {
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
            <div className="aiz-main-content">
                <div className="px-15px px-lg-25px">
                    <div className="aiz-titlebar text-left mt-2 mb-3">
                        <div className="row align-items-center">
                            <div className="col-md-6">
                                <h1 className="h3">All Foundation Orders</h1>
                            </div>
                        </div>
                    </div>
                    <ToastContainer />
                    {/* {updateLoading && <div className="preloaderCount">
            <div className="spinner-border" role="status">
              <span className="visually-hidden">Seller Active Status Change..</span>
            </div>
          </div>} */}

                    {isLoading && <div className="preloaderCount">
                        <div className="spinner-border" role="status">
                            <span className="visually-hidden">Loading...</span>
                        </div>
                    </div>}
                    <div className="card">
                        <form className id="sort_sellers" action method="GET">

                            <div className="card-header row gutters-5">
                                <div className="col-lg-12 col-md-12 mb-2 d-flex align-items-center">
                                    <h6 style={{ color: 'black', fontWeight: '700', padding: "4px", margin: '0' }}>Total Recieved Amount:</h6>
                                    <span style={{ padding: '4px', backgroundColor: 'green', color: 'white', borderRadius: '5px' }}>1100</span>
                                </div>
                                <div className="col">
                                    <h5 className="mb-md-0 h6">Foundation Orders</h5>
                                </div>
                                <div className="dropdown col-lg-2 mb-2 mb-md-0">
                                    <select
                                        className="form-select"
                                        aria-label="Default select example"
                                    >
                                        <option selected>Bulk Action</option>
                                        <option value="1">Delete selection</option>
                                    </select>

                                </div>
                                <div className="col-md-3 ml-auto">
                                    <select
                                        className="form-select"
                                        aria-label="Default select example"
                                    >
                                        <option selected>Filter by Approval</option>
                                        <option value="1">Approved</option>
                                        <option value="2">Non-Approved</option>
                                        <option value="3">Three</option>
                                    </select>


                                </div>
                                <div className="col-md-3">
                                    <div className="form-group mb-0">
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="search"
                                            name="search"
                                            placeholder="Type name or email & Enter"
                                            fdprocessedid="3vgavp"
                                        />
                                    </div>
                                    {/* <Link to="add-celebrity" className="btn btn-success" style={{ marginTop: "10px", width: "150px" }}>Add Celebrities</Link> */}

                                </div>

                            </div>

                            <div className="card-body">

                                <table
                                    className="table aiz-table mb-0 footable footable-1 breakpoint-xl"
                                    style={{}}
                                >
                                    <thead>
                                        <tr className="footable-header">
                                            {/* <th
                                                className="footable-first-visible"
                                                style={{ display: "table-cell" }}
                                            >
                                                <div className="form-group">
                                                    <div className="aiz-checkbox-inline">
                                                        <label className="aiz-checkbox">
                                                            <input type="checkbox" className="check-all" />
                                                            <span className="aiz-square-check" />
                                                        </label>
                                                    </div>
                                                </div>
                                            </th> */}
                                            <th style={{ display: "table-cell" }}>#</th>
                                            <th style={{ display: "table-cell" }}>Name</th>
                                            <th style={{ display: "table-cell" }}>Email</th>
                                            <th style={{ display: "table-cell" }}>Mobile</th>
                                            <th style={{ display: "table-cell" }}>Merchant ID</th>
                                            <th style={{ display: "table-cell" }}>Merchant Transaction ID</th>
                                            <th style={{ display: "table-cell" }}>Amount</th>
                                            <th style={{ display: "table-cell" }}>Created At</th>
                                            {/* <th
                                                data-breakpoints="lg"
                                                style={{ display: "table-cell" }}
                                            >
                                                Phone
                                            </th>
                                            <th
                                                data-breakpoints="lg"
                                                style={{ display: "table-cell" }}
                                            >
                                                Email Address
                                            </th> */}
                                            {/* <th
                        data-breakpoints="lg"
                        style={{ display: "table-cell" }}
                      >
                        Verification Info
                      </th> */}
                                            {/* <th
                                                data-breakpoints="lg"
                                                style={{ display: "table-cell" }}
                                            >
                                                Type
                                            </th> */}
                                            <th
                                                data-breakpoints="lg"
                                                style={{ display: "table-cell" }}
                                            >
                                                Active
                                            </th>
                                            {/* <th
                                                data-breakpoints="lg"
                                                style={{ display: "table-cell" }}
                                            >
                                                Current Wallet Balance
                                            </th> */}

                                            {/* <th
                        data-breakpoints="lg"
                        style={{ display: "table-cell" }}
                      >
                        Num. of Products
                      </th>
                      <th
                        data-breakpoints="lg"
                        style={{ display: "table-cell" }}
                      >
                        Due to seller
                      </th> */}
                                            <th
                                                width="10%"
                                                className="text-right footable-last-visible"
                                                style={{ display: "table-cell" }}
                                            >
                                                Options
                                            </th>
                                        </tr>
                                    </thead>

                                    <tbody>

                                        {listDonatedData ? listDonatedData.map((item, i) => {
                                            console.log('listDonatedData---', item)
                                            return <tr key={i}>
                                                {/* <td
                                                    className="footable-first-visible"
                                                    style={{ display: "table-cell" }}
                                                >
                                                    <div className="form-group">
                                                        <div className="aiz-checkbox-inline">
                                                            <label className="aiz-checkbox">
                                                                <input
                                                                    type="checkbox"
                                                                    className="check-one"
                                                                    name="id[]"
                                                                    defaultValue={1}
                                                                />
                                                                <span className="aiz-square-check" />
                                                            </label>
                                                        </div>
                                                    </div>
                                                </td> */}
                                                <td style={{ display: "table-cell" }}>{i + 1}</td>
                                                <td style={{ display: "table-cell" }}>{item?.userid?.firstname + ' ' + item?.userid?.lastname}</td>


                                                {/* <td style={{ display: "table-cell" }}>
                                                    <SlideshowLightbox>
                                                        {generalCelebrityData?.map((item) => {
                                                            return <img
                                                                key={item?.url}
                                                                className="w-full rounded"
                                                                style={{ width: '50px' }}
                                                                src={generalCelebrityData[i].profilePhoto?.url}
                                                            />
                                                        })}

                                                    </SlideshowLightbox>
                                                </td> */}
                                                <td style={{ display: "table-cell" }}>
                                                    {item?.userid?.email}
                                                </td>
                                                {/* <td style={{ display: "table-cell" }}>----</td>
                                                <td style={{ display: "table-cell" }}>----</td> */}
                                                <td style={{ display: "table-cell" }}>{item?.phone}</td>
                                                <td style={{ display: "table-cell" }}>{item?.merchantId}</td>
                                                <td style={{ display: "table-cell" }}>---------</td>
                                                <td style={{ display: "table-cell", textAlign: 'right' }}>{item?.amount}</td>
                                                <td style={{ display: "table-cell" }}>{item?.updatedAt}</td>

                                                {/* <td style={{ display: "table-cell" }}>
                                                    {item?.email}
                                                </td>
                                                <td style={{ display: "table-cell" }}>
                                                    ---
                                                </td> */}
                                                {/* <td style={{ display: "table-cell" }}>
                          {item.verification_status ? <a href="#">
                            <span className="badge badge-inline badge-info">
                              verified
                            </span>
                          </a> : <>not verified</>}

                        </td> */}
                                                <td style={{ display: "table-cell" }}>
                                                    <label className="aiz-switch aiz-switch-success mb-0">
                                                        <input
                                                            onChange={() => { changeStatus(item) }}
                                                            type="checkbox"
                                                            checked={item.approval}
                                                        />
                                                        <span className="slider round" />
                                                    </label>
                                                </td>
                                                {/* <td style={{ display: "table-cell" }}>00</td> */}
                                                {/* <td style={{ display: "table-cell" }}>ZK{item.admin_to_pay}.0</td> */}
                                                <td className="text-right footable-last-visible" style={{ display: "table-cell" }}>
                                                    {/* <Link className="btn btn-soft-primary btn-icon btn-circle btn-sm" title="View" to={`detail/${item._id}`}>
                                                        <i className="las la-eye"></i>
                                                    </Link>
                                                    <Link className="btn btn-soft-primary btn-icon btn-circle btn-sm" title="View" to={`detail-fillup/${item._id}`}>
                                                        <i className="las la-fill"></i>
                                                        <i class="fa-solid fa-fill fa-flip" style={{color: #20437e}}></i>
                                                    </Link> */}
                                                    <Link className="btn btn-soft-info btn-icon btn-circle btn-sm" to={`edit/${item._id}`} title="Approved">
                                                        <i className="las la-edit"></i>
                                                    </Link>
                                                    <button onClick={() => { deleteData(item._id) }} type="button" className="btn btn-soft-danger btn-icon btn-circle btn-sm confirm-delete">
                                                        <i className="las la-trash"></i>
                                                    </button>

                                                </td>
                                            </tr>
                                        }) : <tr><td><h2>Loading....</h2></td></tr>}

                                    </tbody>
                                </table>
                                <div className="aiz-pagination"></div>
                            </div>
                        </form>

                    </div>
                </div>
                <div className="bg-white text-center py-3 px-15px px-lg-25px mt-auto">
                    {/*p className="mb-0">&copy;  v6.3.3</p*/}
                </div>
            </div>
        </>
    );
}
export default ListChiragFoundationOrdersComp;
