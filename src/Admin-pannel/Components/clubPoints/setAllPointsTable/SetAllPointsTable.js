import React, { useEffect } from 'react'
import { Link } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import { useDeleteSetAllPointsMutation, useGetClubSetAllPointsTableDataQuery } from '../../all-products/allproductsApi/allProductsApi'

function SetAllPointsTable() {
    const { isLoading, data } = useGetClubSetAllPointsTableDataQuery();

    console.log('setPointsData--', data);

    const [deleteSetPointData, response] = useDeleteSetAllPointsMutation();

    const deleteSetPointsData = (id) => {
        deleteSetPointData(id)
    };

    const toastSuccessMessage = () => {
        toast.success("Set All Points Deleted Successfully !", {
            position: "top-center"
        })
    };

    const toastErrorMessage = () => {
        toast.error("Set All Points Not Deleted !")
    }

    useEffect(() => {
        if (response.isSuccess === true) {
            toastSuccessMessage()
        };
    }, [response]);

    useEffect(() => {
        if (response.isError === true) {
            toastErrorMessage()
        };
    }, [response])


    return (
        <>
            <div className="col-lg-8">
                <div className="card">
                    <div className="card-body px-3">
                        {isLoading ? <h2>Loading...</h2>
                            : <table className="table aiz-table mb-0 footable footable-1 breakpoint-xl" style={{}}>
                                <thead>
                                    <tr className="footable-header">
                                        <th className="footable-first-visible" style={{ display: 'table-cell' }}>#</th>
                                        <th style={{ display: 'table-cell' }}>Name</th>
                                        <th data-breakpoints="lg" style={{ display: 'table-cell' }}>Owner</th>
                                        <th data-breakpoints="lg" style={{ display: 'table-cell' }}>Price</th>
                                        <th data-breakpoints="lg" style={{ display: 'table-cell' }}>Point</th>
                                        <th className="text-right footable-last-visible" style={{ display: 'table-cell' }}>Options</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {data && data.map((item, i) => {
                                        console.log("item----", item)
                                        return <tr key={item._id}>
                                            <td className="footable-first-visible" style={{ display: 'table-cell' }}>{i + 1}</td>
                                            <td style={{ display: 'table-cell' }}>
                                                <Link to="#" target="_blank">
                                                    <div className="form-group row">
                                                        <div className="col-auto">
                                                            <img src="https://mmslfashions.in/public/assets/img/placeholder.jpg" alt="Image" className="size-50px" />
                                                        </div>
                                                        <div className="col">
                                                            <span className="text-muted text-truncate-2">{item.product_id?.name}</span>
                                                        </div>
                                                    </div>
                                                </Link>
                                            </td>
                                            <td style={{ display: 'table-cell' }}>
                                                {item?.user_id?.firstname + " " + item?.user_id?.lastname}
                                            </td>
                                            <td style={{ display: 'table-cell' }}>100.00</td>
                                            <td style={{ display: 'table-cell' }}>{item.point_single}</td>
                                            <td className="text-right footable-last-visible" style={{ display: 'table-cell' }}>
                                                <Link to={`edit/${item._id}`} className="btn btn-soft-primary btn-icon btn-circle btn-sm" title="Edit">
                                                    <i className="las la-edit" />
                                                </Link>
                                                <button onClick={() => { deleteSetPointsData(item._id) }} type="button" className="btn btn-soft-danger btn-icon btn-circle btn-sm confirm-delete ms-2">
                                                    <i className="las la-trash"></i>
                                                </button>
                                            </td>
                                        </tr>
                                    })}
                                </tbody>
                            </table>
                        }

                        {/* <div className="aiz-pagination">
                            <nav>
                                <ul className="pagination">
                                    <li className="page-item disabled" aria-disabled="true" aria-label="« Previous">
                                        <span className="page-link" aria-hidden="true">‹</span>
                                    </li>
                                    <li className="page-item active" aria-current="page"><span className="page-link">1</span></li>
                                    <li className="page-item"><a className="page-link" href="https://mmslfashions.in/admin/set-club-points?page=2">2</a></li>
                                    <li className="page-item"><a className="page-link" href="https://mmslfashions.in/admin/set-club-points?page=3">3</a></li>
                                    <li className="page-item"><a className="page-link" href="https://mmslfashions.in/admin/set-club-points?page=4">4</a></li>
                                    <li className="page-item"><a className="page-link" href="https://mmslfashions.in/admin/set-club-points?page=5">5</a></li>
                                    <li className="page-item">
                                        <a className="page-link" href="https://mmslfashions.in/admin/set-club-points?page=2" rel="next" aria-label="Next »">›</a>
                                    </li>
                                </ul>
                            </nav>
                        </div> */}

                    </div>
                </div>
                <ToastContainer />
            </div>
        </>
    )
}

export default SetAllPointsTable