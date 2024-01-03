import { Link } from "react-router-dom";
import { toast, ToastContainer } from 'react-toastify';
import { useDeleteFlashDealMutation, useGetFlashDealsQuery } from "../all-products/allproductsApi/allProductsApi";

function FlashDeals() {

    const { isLoading, data } = useGetFlashDealsQuery();
    console.log(data);

    const [deleteFlashDeal, response] = useDeleteFlashDealMutation();

    const deleteFlashDealData = (id) => {
        deleteFlashDeal(id)
    };

    console.log(response)
    if (response.isSuccess === true) {
        alert('Coupons Succesfully deleted')
    }

    return (
        <>
            <div className="card">
                <div className="card-header">
                    <h5 className="mb-0 h6">Flash deals</h5>
                    <div className="pull-right clearfix">
                        <form >
                            <div className="box-inline pad-rgt pull-left">
                                <div className style={{ minWidth: 200 }}>
                                    <input type="text" className="form-control" id="search" name="search" placeholder="Type name & Enter" fdprocessedid="y5oro" />
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
                <div className="card-body">

                    {isLoading ? <h2>Loading...</h2>
                        : (<table className="table table-responsive aiz-table p-0 footable customTableTD" >
                            <thead>
                                <tr >
                                    <th >#</th>
                                    <th width="10%">Product</th>
                                    <th width="15%" style={{ display: 'table-cell' }}>Title</th>
                                    <th >Banner</th>
                                    <th width="15%" style={{ display: 'table-cell' }} >Start Date</th>
                                    <th >End Date</th>
                                    <th >Featured</th>
                                    <th width="20%" style={{ display: 'table-cell' }}>Options</th>
                                </tr>
                            </thead>
                            <tbody>
                                {data && data.map((item, i) => {
                                    return <tr key={item._id}>
                                        <td>{i + 1}</td>
                                        <td>{item.product}</td>
                                        <td>{item.title}</td>
                                        {/* <td>{item.banner}</td> */}
                                        <td style={{ display: 'table-cell' }}>
                                            <div className="row gutters-5 w-200px w-md-300px mw-100">
                                                <div className="col-auto">
                                                    <img src={item.banner} alt="Image" className="size-50px img-fit" />
                                                </div>
                                                <div className="col">
                                                    <span className="text-muted text-truncate-2">{item.name}</span>
                                                </div>
                                            </div>
                                        </td>
                                        <td>{item.start_date}</td>
                                        <td >{item.end_date}</td>
                                        <td >{item.featured}</td>
                                        <td >
                                            {/* <Link to="#" className="btn btn-soft-primary btn-icon btn-circle btn-sm" title="View Details">
                                                <i className="las la-eye" />
                                            </Link> */}
                                            <Link to={`edit/${item._id}`} className="btn btn-soft-primary btn-icon btn-circle btn-sm" title="Edit">
                                                <i className="las la-edit" />
                                            </Link>
                                            <button type="button" onClick={() => deleteFlashDealData(item._id)} className="btn btn-soft-danger btn-icon btn-circle btn-sm">
                                                <i className="las la-trash" />
                                            </button>
                                        </td>
                                    </tr>
                                })}
                            </tbody>
                        </table>)
                    }

                    <div className="clearfix">
                        <div className="pull-right">
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default FlashDeals;