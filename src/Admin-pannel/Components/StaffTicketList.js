import { Link } from "react-router-dom";
// import { useDeleteSupportTicketMutation, useGetTicketListsQuery } from "../all-products/allproductsApi/allProductsApi";
import { useEffect, useState } from "react";
import { useDeleteSupportTicketMutation, useGetTicketListingDQuery, useGetTicketListsQuery } from "./all-products/allproductsApi/allProductsApi";

function StaffTicketList() {
    const [inpVal, setInpVal] = useState({ search: '' });
    const [blankArr, setBlankArr] = useState([]);

    const staffToken = window.localStorage.getItem('adminToken')

    // const { isLoading, data } = useGetTicketListsQuery();
    const { isLoading, data } = useGetTicketListingDQuery(staffToken);
    console.log('listdata---', data)

    const onChangeHandler = (e) => {
        const val = e.target.value;
        setInpVal(val)
    }

    const searchData = (e) => {
        e.preventDefault()
        const filteredData = data && data.filter((item) => {
            if (item.id && item.id == inpVal) {
                return item
            } if (item.subject == inpVal) {
                return item
            } if (item.building_id?.name == inpVal) {
                return item
            } if (item.area_id?.name == inpVal) {
                return item
            } if (item.ward_id?.name == inpVal) {
                return item
            } if (item.block_id?.name == inpVal) {
                return item
            } if (item.floor_id?.name == inpVal) {
                return item
            } if (item.officeRoom_id?.name == inpVal) {
                return item
            }
        });
        setBlankArr(filteredData);
        document.getElementById("sort_support").reset();
    };

    const resetData = (e) => {
        e.preventDefault()
        setBlankArr(data)
    }

    useEffect(() => {
        setBlankArr(data)
    }, [data])

    const [deleteSuppTicket, response] = useDeleteSupportTicketMutation();


    const deleteSupportticketData = (id) => {
        deleteSuppTicket(id)
    };

    useEffect(() => {
        if (response.isSuccess === true) {
            alert('Support Ticket Successfully deleted')
        };
    }, [response.isSuccess]);




    return (
        <>
            <div className="aiz-main-content">
                <div className="px-15px px-lg-25px">
                    <div className="card">
                        <form id="sort_support">
                            <div className="card-header row gutters-5">
                                <div className="col text-center text-md-left">
                                    <h5 className="mb-md-0 h6">Support Desk</h5>
                                </div>
                                <div className="col-md-4">
                                    <div className="input-group input-group-md">
                                        <input type="text" className="form-control" id="search" name="search" placeholder="search" onChange={onChangeHandler} />
                                        <button className="btn btn-primary" onClick={searchData}>Search</button>
                                        <button className="btn btn-success ms-2" onClick={resetData}>Reset</button>
                                    </div>
                                </div>
                            </div>
                        </form>
                        <div className="card-body">
                            {isLoading ? <h2>Loading...</h2>
                                : <table className="aiz-table footable footable-1 breakpoint-xl" cellSpacing={0} width="100%" style={{}}>
                                    <thead>
                                        <tr className="footable-header">
                                            <th data-breakpoints="lg" className="footable-first-visible" style={{ display: 'table-cell' }}>Ticket ID</th>
                                            <th data-breakpoints="lg" style={{ display: 'table-cell' }}>Sending Date</th>
                                            <th data-breakpoints="lg" style={{ display: 'table-cell' }}>Name</th>
                                            <th style={{ display: 'table-cell' }}>Subject</th>
                                            {/* <th data-breakpoints="lg" style={{ display: 'table-cell' }}>User</th> */}
                                            <th data-breakpoints="lg" style={{ display: 'table-cell' }}>Building</th>
                                            <th data-breakpoints="lg" style={{ display: 'table-cell' }}>Block</th>
                                            <th data-breakpoints="lg" style={{ display: 'table-cell' }}>Area</th>
                                            <th data-breakpoints="lg" style={{ display: 'table-cell' }}>Ward</th>
                                            <th data-breakpoints="lg" style={{ display: 'table-cell' }}>Floor</th>
                                            <th data-breakpoints="lg" style={{ display: 'table-cell' }}>Office</th>
                                            <th data-breakpoints="lg" style={{ display: 'table-cell' }}>Reply</th>
                                            <th data-breakpoints="lg" style={{ display: 'table-cell' }}>Replied By</th>
                                            <th data-breakpoints="lg" style={{ display: 'table-cell' }}>Status</th>
                                            <th data-breakpoints="lg" className="text-right footable-last-visible" style={{ display: 'table-cell' }}>Options</th>
                                        </tr>
                                    </thead>
                                    <tbody>

                                        {blankArr && blankArr.map((item, i) => {
                                            // console.log('abcitemmmmstatus--', item)
                                            return <tr key={item._id}>
                                                <td className="footable-first-visible" style={{ display: 'table-cell' }}>{item.id}</td>
                                                <td style={{ display: 'table-cell' }}>{item?.createdAt}</td>
                                                <td style={{ display: 'table-cell' }}>{item.firstname + " " + item.lastname}</td>
                                                <td style={{ display: 'table-cell' }}>{item.subject}</td>
                                                {/* <td style={{ display: 'table-cell' }}>Abaris Seller</td> */}
                                                <td style={{ display: 'table-cell' }}>{item.building_id?.name}</td>
                                                <td style={{ display: 'table-cell' }}>{item.block_id?.name}</td>
                                                <td style={{ display: 'table-cell' }}>{item.area_id?.name}</td>
                                                <td style={{ display: 'table-cell' }}>{item.ward_id?.name}</td>
                                                <td style={{ display: 'table-cell' }}>{item.floor_id?.name}</td>
                                                <td style={{ display: 'table-cell' }}>{item.officeRoom_id?.name}</td>
                                                <td style={{ display: 'table-cell' }}>{item?.reply?.description}</td>
                                                <td style={{ display: 'table-cell' }}>{item?.staff?.firstname + " " + item?.staff?.lastname}</td>
                                                <td style={{ display: 'table-cell' }}>
                                                    {/* <span className={`badge badge-inline ${item?.statusId[0]?.name === 'Pending' ? 'badge-warning' : 'badge-danger'}`}>{item?.statusId[0]?.name}</span> */}
                                                    <span class="badge badge-inline badge-danger" style={{ color: "black", backgroundColor: item?.statusId[0]?.name === "Pending" ? "yellow" : item?.statusId[0]?.name === 'Close' ? 'red' : item?.statusId[0]?.name === "Processing" ? "yellow" : item?.statusId[0]?.name === "On Hold" ? "red" : 'green' }}>{item?.statusId[0]?.name}</span>
                                                </td>
                                                <td className="text-right footable-last-visible" style={{ display: 'table-cell' }}>
                                                    <Link to={`edit/${item?._id}`} className="btn btn-soft-primary btn-icon btn-circle btn-sm" title="Edit">
                                                        <i className="las la-edit" />
                                                    </Link>
                                                    {/* <Link to={`/admin/support_ticket/detail/${item._id}`} className="btn btn-soft-primary btn-icon btn-circle btn-sm" title="View Details">
                                                        <i className="las la-eye" />
                                                    </Link> */}
                                                    <button type="button" onClick={() => deleteSupportticketData(item._id)} className="btn btn-soft-danger btn-icon btn-circle btn-sm">
                                                        <i className="las la-trash" />
                                                    </button>
                                                </td>
                                            </tr>
                                        })}

                                    </tbody>
                                </table>
                            }
                            <div className="clearfix">
                                <div className="pull-right">
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="bg-white text-center py-3 px-15px px-lg-25px mt-auto">
                    {/*p class="mb-0">&copy;  v6.3.3</p*/}
                </div>
            </div>

        </>
    )
}
export default StaffTicketList;