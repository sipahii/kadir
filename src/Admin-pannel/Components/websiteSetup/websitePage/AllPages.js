
import { useState } from "react";
import { Link } from "react-router-dom"
import { useDeletePageListMutation, useGetPagesQuery } from "../../all-products/allproductsApi/allProductsApi"

function AllPages() {
    const [lock, forceUpdate] = useState(false)
    const { isLoading, data, refetch } = useGetPagesQuery();
    const [deleteItem] = useDeletePageListMutation()

    const DeleteList = (id) => {
        deleteItem(id)
        // refetch()
        // forceUpdate(true)
    }
    console.log("ddd", data);
    return (
        <>
            <div className="card">
                <div className="card-header">
                    <h6 className="mb-0 fw-600">All Pages</h6>
                    <Link to="/admin/website-pages/custom-pages/create" className="btn btn-primary">Add New Page</Link>
                </div>
                <div className="card-body">
                    <table className="table aiz-table mb-0 footable footable-1 breakpoint-xl" style={{}}>
                        <thead>
                            <tr className="footable-header">
                                <th data-breakpoints="lg" className="footable-first-visible" style={{ display: 'table-cell' }}>#</th>
                                <th style={{ display: 'table-cell' }}>Name</th>
                                <th data-breakpoints="md" style={{ display: 'table-cell' }}>URL</th>
                                <th className="text-right footable-last-visible" style={{ display: 'table-cell' }}>Actions</th>
                            </tr>
                        </thead>
                        <tbody>

                            {data && data.map((item, i) => {
                                console.log('itemog web pages--', item)
                                return <tr key={item._id}>
                                    <td className="footable-first-visible" style={{ display: 'table-cell' }}>{i + 1}</td>
                                    <td style={{ display: 'table-cell' }}>
                                        <Link to="#" className="text-reset">{item.title}</Link>
                                    </td>
                                    <td style={{ display: 'table-cell' }}></td>
                                    <td className="text-right footable-last-visible" style={{ display: 'table-cell' }}>
                                        <a className="btn btn-soft-success btn-icon btn-circle btn-sm" href="#" target="_blank" title="View"><i className="las la-eye"></i></a>

                                        <Link className="btn btn-soft-primary btn-icon btn-circle btn-sm" to={`custom-pages/edit/${item._id}`} title="Edit"><i className="las la-edit"></i></Link>

                                        <button type="button" onClick={() => DeleteList(item._id)} className="btn btn-soft-danger btn-icon btn-circle btn-sm"><i className="las la-trash"></i></button>
                                    </td>
                                </tr>
                            })}

                        </tbody>
                    </table>
                </div>
            </div>
        </>
    )
}
export default AllPages