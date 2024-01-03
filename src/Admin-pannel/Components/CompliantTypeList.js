import { Link } from "react-router-dom";
// import { useDeleteAttributesMutation, useGetAttributesQuery } from "../all-products/allproductsApi/allProductsApi";
import { useEffect } from "react";
import { useDeleteAttributesMutation, useDeleteComplaintTypeMutation, useGetAttributesQuery, useGetTComplaintTypeQuery } from "./all-products/allproductsApi/allProductsApi";

function CompliantTypeList() {

    const { isLoading, data } = useGetTComplaintTypeQuery();


    const [deleteComplaintType, response] = useDeleteComplaintTypeMutation();

    const deleteComplaintTypeData = (id) => {
        deleteComplaintType(id)
    };

    useEffect(() => {
        if (response.isSuccess === true) {
            alert('Deleted Successfully')
        }
    }, [response.isSuccess])

    return (
        <>
            <div className=" col-lg-7 ">
                <div className="card">
                    <div className="card-header row gutters-5">
                        <div className="col text-center text-md-left">
                        </div>

                        <div className="col-md-4">
                            <form >
                                <div className="input-group input-group-sm">
                                    <input type="text" className="form-control" id="search" name="search" placeholder="Search" fdprocessedid="jv5p0d" />
                                </div>
                            </form>
                        </div>
                    </div>

                    <div className="card-body">

                        {isLoading ? <h2>Loading...</h2>
                            : <table className="table aiz-table mb-0 footable footable-1 breakpoint-xl" style={{}}>
                                <thead>
                                    <tr className="footable-header">
                                        <th className="footable-first-visible" style={{ display: 'table-cell' }}>#</th><th style={{ display: 'table-cell' }}>Name</th><th style={{ display: 'table-cell' }}>Active</th>
                                        <th className="text-right footable-last-visible" style={{ display: 'table-cell' }}>Options</th>
                                    </tr>
                                </thead>
                                <tbody>

                                    {data && data.map((item, i) => {
                                        return <tr key={i}>
                                            <td className="footable-first-visible" style={{ display: 'table-cell' }}>{i + 1}</td>
                                            <td style={{ display: 'table-cell' }}>{item.name}</td>
                                            <td style={{ display: "table-cell" }}>
                                                <label className="aiz-switch aiz-switch-success mb-0">
                                                    <input
                                                        // onChange={() => { changeStatus(item) }}
                                                        type="checkbox"
                                                        checked={item.isActive}
                                                    />
                                                    <span className="slider round" />
                                                </label>
                                            </td>

                                            <td className="text-right footable-last-visible" style={{ display: 'table-cell' }}>
                                                {/* <Link to="#" className="btn btn-soft-info btn-icon btn-circle btn-sm">
                                                <i className="las la-cog" />
                                            </Link> */}
                                                <Link to={`edit/${item._id}`} className="btn btn-soft-primary btn-icon btn-circle btn-sm">
                                                    <i className="las la-edit" />
                                                </Link>
                                                <button type="button" onClick={() => deleteComplaintTypeData(item._id)} className="btn btn-soft-danger btn-icon btn-circle btn-sm confirm-delete">
                                                    <i className="las la-trash" />
                                                </button>
                                            </td>
                                        </tr>
                                    })}

                                </tbody>
                            </table>
                        }
                    </div>
                </div>
            </div>
        </>
    )
}
export default CompliantTypeList;