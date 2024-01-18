
import { SlideshowLightbox } from "lightbox.js-react";
import "lightbox.js-react/dist/index.css";
import "lightbox.js-react/dist/index.css";
import { Link } from "react-router-dom";
import { useDeleteSellerListMutation, useGetSellersQuery, useSellerActiveMutation } from "../all-products/allproductsApi/allProductsApi";
import { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import axios from "axios";


function ListCelebritiesComp() {
    const token = window.localStorage.getItem('token');
    const { data } = useGetSellersQuery(token);
    const [generalCelebrityData, setGeneralCelebrityData] = useState();

    const getData = async () => {
        try {
            const res = await axios.get('https://onlineparttimejobs.in/api/sellermaster/exceptgeneral', {
                headers: {
                    "Content-type": "application/json; charset=UTF-8",
                    Authorization: `Bearer ${token}`,
                },
            });
            console.log('resDDDDD--', res.data)
            setGeneralCelebrityData(res.data)
        } catch (error) {
            alert('Server Error')
        }
    };

    useEffect(() => {
        getData()
    }, []);


    const [deleteItem, { isLoading }] = useDeleteSellerListMutation()

    const deleteData = (id) => {
        deleteItem(id)
    }
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
                                <h1 className="h3">All Celebrities</h1>
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

                            {/* <div className="card-header row gutters-5">

                                <div className="col">
                                    <h5 className="mb-md-0 h6">Celebrities</h5>
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
                                <div className="col-md-3-">
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
                                    <Link to="add-celebrity" className="btn btn-success" style={{ marginTop: "10px", width: "150px" }}>Add Celebrities</Link>

                                </div>

                            </div> */}
                            {/* <div className="col">
                                    <h5 className="mb-md-0 h6">Celebrities</h5>
                                </div> */}

                            <section className="form-section p-5">
                                <div className="row">
                                    {/* <form action=""> */}
                                    <div className="col-lg-3">
                                        <div>
                                            <label htmlFor="">Start Date</label>
                                            <input type="date" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="" name='start_date' />
                                        </div>
                                    </div>
                                    <div className="col-lg-3">
                                        <div>
                                            <label htmlFor="">End Date</label>
                                            <input type="date" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="" name='end_date' />
                                        </div>
                                    </div>
                                    <div className="col-lg-3">
                                        <div>
                                            <label htmlFor="">First Name</label>
                                            <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="First Name" name='firstname' />
                                        </div>
                                    </div>
                                    <div className="col-lg-3">
                                        <div>
                                            <label htmlFor="">Last Name</label>
                                            <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Last Name" name='lastname' />
                                        </div>
                                    </div>
                                    <div className="col-lg-3">
                                        <div>
                                            <label htmlFor="">Gender</label>
                                            <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Gender" name='adharnumber' />
                                        </div>
                                    </div>

                                    {/* <div className="col-lg-3">
                                        <label htmlFor="">Gender</label>
                                        <Multiselect
                                            isObject={true}
                                            displayValue="name"
                                            options={categ}
                                            showCheckbox
                                            selectedValues={[]}
                                            onRemove={(selectedCat) => {
                                                const selectedIds = selectedCat.map((cat) => {
                                                    return cat.name
                                                })
                                                setFinalCatD(selectedIds)
                                            }}
                                            onSelect={(selectedCat) => {
                                                const selectedIds = selectedCat.map((cat) => {
                                                    return cat.name
                                                })
                                                setFinalCatD(selectedIds)
                                            }}
                                        />
                                    </div> */}

                                    <div className="col-lg-3">
                                        <div>
                                            <label htmlFor="">Age</label>
                                            <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Age" name='email' />
                                        </div>
                                    </div>
                                    <div className="col-lg-3">
                                        <div>
                                            <label htmlFor="">Mobile</label>
                                            <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Mobile" name='mobile' />
                                        </div>
                                    </div>
                                    <div className="col-lg-3">
                                        <div>
                                            <label htmlFor="">Email</label>
                                            <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Email" name='application' />
                                        </div>
                                    </div>
                                    <div className="col-lg-3">
                                        <div>
                                            <label htmlFor="">Category</label>
                                            <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Category" name='udid' />
                                        </div>
                                    </div>
                                    <div className="col-lg-3">
                                        <div>
                                            <label htmlFor="">Industry</label>
                                            <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Industry" name='minDOB' />
                                        </div>
                                    </div>
                                    <div className="col-lg-3">
                                        <div>
                                            <label htmlFor="">Index</label>
                                            <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Index" name='maxDOB' />
                                        </div>
                                    </div>
                                    <div className="col-lg-3">
                                        <div>
                                            <label htmlFor="">Skills</label>
                                            <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Skills" name='maxDOB' />
                                        </div>
                                    </div>
                                    <div className="col-lg-3">
                                        <div>
                                            <label htmlFor="">Country</label>
                                            <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Country" name='maxDOB' />
                                        </div>
                                    </div>
                                    <div className="col-lg-3">
                                        <div>
                                            <label htmlFor="">City</label>
                                            <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="City" name='maxDOB' />
                                        </div>
                                    </div>
                                    <div className="col-lg-3">
                                        <div>
                                            <label htmlFor="">Zone</label>
                                            <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Zone" name='maxDOB' />
                                        </div>
                                    </div>
                                    <div className="col-lg-3">
                                        <div>
                                            <label htmlFor="">Celebrity Grade</label>
                                            <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Celebrity Grade" name='maxDOB' />
                                        </div>
                                    </div>
                                    <div className="col-lg-3">
                                        <div>
                                            <label htmlFor="">Status</label>
                                            <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Status" name='maxDOB' />
                                        </div>
                                    </div>
                                    {/* <div className="col-lg-3">
                                        <label htmlFor="">Category</label>
                                        <select className="form-select" aria-label="Default select example" name="category" onChange={handleChangeSearch}>
                                            <option selected value={null}>Open this select menu</option>
                                            {categoryy && categoryy?.map((item, i) => {
                                                return <option value={item?._id} key={i}>{item?.name}</option>
                                            })}
                                        </select>
                                    </div> */}
                                    {/* {showCategoryInput &&
                                        <div className="col-lg-3">
                                            <div>
                                                <label htmlFor="">Other Category</label>
                                                <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Other Category" name='otherBusiness' value={searchList.otherBusiness} onChange={handleChangeSearch} />
                                            </div>
                                        </div>
                                    } */}

                                    {/* <div className="col-lg-3">
                                        <label htmlFor="">Status</label>
                                        <select className="form-select" aria-label="Default select example" value={searchList.status} name="status" onChange={handleChangeSearch}>
                                            <option selected value={null}>Open this select menu</option>
                                            {statusList && statusList?.map((item, i) => {
                                                return <option value={item?._id} key={i}>{item?.name}</option>
                                            })}
                                        </select>
                                    </div> */}
                                    {/* <div className="col-lg-3">
                                        <label htmlFor="">Income</label>
                                        <Multiselect
                                            isObject={true}
                                            displayValue="name"
                                            options={categ}
                                            showCheckbox
                                            selectedValues={[]}
                                            onRemove={(selectedCat) => {
                                                const selectedIds = selectedCat.map((cat) => {
                                                    return cat.name
                                                })
                                                setFinalCatD(selectedIds)
                                            }}
                                            onSelect={(selectedCat) => {
                                                const selectedIds = selectedCat.map((cat) => {
                                                    return cat.name
                                                })
                                                setFinalCatD(selectedIds)
                                            }}
                                        />
                                    </div> */}
                                    {/* <div className="col-lg-3">
                                        <div>
                                            <label htmlFor="">Disability</label>
                                            <input type="number" className="form-control" id="exampleInputEmail1" name='disability' />
                                        </div>
                                    </div>
                                    <div className="col-lg-3">
                                        <div>
                                            <label htmlFor="">Severe Disability</label>
                                            <select className="form-select" aria-label="Default select example" name="severe_disability">
                                                <option selected value={null}>Open this select menu</option>
                                                <option value={true}>Yes</option>
                                                <option value={false}>No</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="col-lg-3">
                                        <div>
                                            <label htmlFor="">In Maharashtra </label>
                                            <select className="form-select" aria-label="Default select example" name="state">
                                                <option selected value={null}>Open this select menu</option>
                                                <option value={1}>Permanent address state (in maharashtra)</option>
                                                <option value={2}>Residental address state (in maharashtra)</option>
                                                <option value={3}>Both (in maharashtra)</option>
                                                <option value={4}>None of them in maharashtra</option>

                                            </select>
                                        </div>
                                    </div> */}
                                    {/* <div className="col-lg-3">
                                        <div>
                                            <label htmlFor="">Division </label>
                                            <Multiselect
                                                isObject={true}
                                                displayValue="title"

                                                options={divisionData}
                                                showCheckbox
                                                selectedValues={[]}
                                                onRemove={(selectedCat) => {
                                                    const selectedIds = selectedCat.map((cat) => {
                                                        return cat.uid
                                                    })
                                                    setFinalCatD2(selectedIds)
                                                }}
                                                onSelect={(selectedCat) => {
                                                    const selectedIds = selectedCat.map((cat) => {
                                                        return cat.uid
                                                    })
                                                    setFinalCatD2(selectedIds)
                                                }}
                                            />

                                        </div>
                                    </div> */}
                                    {/* <div className="col-lg-3">
                                        <div>
                                            <label htmlFor="">District</label>
                                            <Multiselect
                                                isObject={true}
                                                displayValue="title"

                                                options={districtData}
                                                showCheckbox
                                                selectedValues={[]}
                                                onRemove={(selectedCat) => {
                                                    const selectedIds = selectedCat.map((cat) => {
                                                        return cat.uid
                                                    })
                                                    setFinalCatD3(selectedIds)
                                                }}
                                                onSelect={(selectedCat) => {
                                                    const selectedIds = selectedCat.map((cat) => {
                                                        return cat.uid
                                                    })
                                                    setFinalCatD3(selectedIds)
                                                }}
                                            />
                                        </div>
                                    </div> */}
                                    {/* <div className="col-lg-3">
                                        <div>
                                            <label htmlFor="">Minimum Age</label>
                                            <input type="number" placeholder="Enter number greater than 0" className="form-control" id="exampleInputEmail1" name='minAge'  />
                                        </div>
                                    </div>
                                    <div className="col-lg-3">
                                        <div>
                                            <label htmlFor="">Maximum Age</label>
                                            <input type="number" placeholder="Enter number less than 100" className="form-control" id="exampleInputEmail1" name='maxAge' value={''} />
                                        </div>
                                    </div> */}

                                    {/* <div className="col-lg-3">
                                        <div>
                                            <label htmlFor="">Disability Type</label>
                                            <Multiselect
                                                isObject={true}
                                                displayValue="name"

                                                options={disabilityTypeData}
                                                showCheckbox
                                                selectedValues={[]}
                                                onRemove={(selectedCat) => {
                                                    const selectedIds = selectedCat.map((cat) => {
                                                        return cat.name
                                                    })
                                                    setFinalDisabilityTypeD(selectedIds)
                                                }}
                                                onSelect={(selectedCat) => {
                                                    const selectedIds = selectedCat.map((cat) => {
                                                        return cat.name
                                                    })
                                                    setFinalDisabilityTypeD(selectedIds)
                                                }}
                                            />
                                        </div>
                                    </div> */}

                                    <div className="col-lg-3 mt-3">
                                        <button type="button" className="btn btn-primary mr-3 mt-2">Search</button>

                                    </div>
                                    {/* </form> */}
                                </div>
                            </section>

                            <div className="card-body">

                                <table
                                    className="table aiz-table mb-0 footable footable-1 breakpoint-xl"
                                    style={{}}
                                >
                                    <thead>
                                        <tr className="footable-header">
                                            <th
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
                                            </th>
                                            <th style={{ display: "table-cell" }}>Image</th>
                                            <th style={{ display: "table-cell" }}>Name</th>
                                            <th style={{ display: "table-cell" }}>Country</th>
                                            <th style={{ display: "table-cell" }}>State</th>
                                            <th style={{ display: "table-cell" }}>City</th>
                                            <th
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
                                            </th>
                                            {/* <th
                        data-breakpoints="lg"
                        style={{ display: "table-cell" }}
                      >
                        Verification Info
                      </th> */}
                                            <th
                                                data-breakpoints="lg"
                                                style={{ display: "table-cell" }}
                                            >
                                                Active
                                            </th>
                                            <th
                                                data-breakpoints="lg"
                                                style={{ display: "table-cell" }}
                                            >
                                                Current Wallet Balance
                                            </th>

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

                                        {generalCelebrityData ? generalCelebrityData.map((item, i) => {
                                            return <tr key={i}>
                                                <td
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
                                                </td>
                                                <td style={{ display: "table-cell" }}>
                                                    <SlideshowLightbox>
                                                        {generalCelebrityData.map((item) => {
                                                            return <img
                                                                key={item.url}
                                                                className="w-full rounded"
                                                                style={{ width: '50px' }}
                                                                src={generalCelebrityData[i].profilePhoto?.url}
                                                            />
                                                        })}

                                                    </SlideshowLightbox>
                                                </td>
                                                <td style={{ display: "table-cell" }}>
                                                    {" "}
                                                    {item?.firstname}  {item?.lastname}
                                                </td>
                                                <td style={{ display: "table-cell" }}>{item?.country}</td>
                                                <td style={{ display: "table-cell" }}>{item?.state}</td>
                                                <td style={{ display: "table-cell" }}>{item?.city}</td>
                                                <td style={{ display: "table-cell" }}>{item?.mobile}</td>
                                                <td style={{ display: "table-cell" }}>
                                                    {item?.email}
                                                </td>
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
                                                            checked={item.approve}
                                                        />
                                                        <span className="slider round" />
                                                    </label>
                                                </td>
                                                <td style={{ display: "table-cell" }}>00</td>
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
export default ListCelebritiesComp;
