import { Link } from "react-router-dom";
import { useDeleteRoleMutation, useGetRolesQuery } from "../../all-products/allproductsApi/allProductsApi";

function AllRoles() {

    const { isLoading, data } = useGetRolesQuery();
    console.log(data);

    const [deleteRoleD, response] = useDeleteRoleMutation();

    const deleteRoleData = (id) => {
        deleteRoleD(id)
    };

    if (response.isSuccess === true) {
        alert('Role deleted Successfully')
    }

    return (
        <>
            <div className="aiz-main-content">
                <div className="px-15px px-lg-25px">
                    <div className="aiz-titlebar text-left mt-2 mb-3">
                        <div className="row align-items-center">
                            <div className="col-md-6">
                                <h1 className="h3">All Roles</h1>
                            </div>
                            <div className="col-md-6 text-md-right">
                                <Link to="/admin/roles/create" className="btn btn-circle btn-info">
                                    <span>Add New Role</span>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="card">
                        <div className="card-header">
                            <h5 className="mb-0 h6">Roles</h5>
                        </div>
                        <div className="card-body">
                            {isLoading ? <h2>Loading...</h2>
                                : <table className="table aiz-table footable footable-1 breakpoint-lg" style={{}}>
                                    <thead>
                                        <tr className="footable-header">
                                            <th width="10%" style={{ display: 'table-cell' }}>ID</th>
                                            <th style={{ display: 'table-cell' }}>Name</th>
                                            <th width="10%" style={{ display: 'table-cell' }}>Options</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {data && data.map((item, i) => {
                                            return <tr className="footable-empty footableIcon" key={item._id}>
                                                <td >{item._id}</td>
                                                <td >{item.name || item.role_name}</td>
                                                <td className="text-right footable-last-visible" style={{ display: 'table-cell' }}>

                                                    <Link to={`edit/${item._id}`} className="btn btn-soft-primary btn-icon btn-circle btn-sm" title="Edit">
                                                        <i className="las la-edit" />
                                                    </Link>

                                                    <button type="button" onClick={() => deleteRoleData(item._id)} className="btn btn-soft-danger btn-icon btn-circle btn-sm">
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
                <div className="bg-white text-center py-3 px-15px px-lg-25px mt-auto">
                </div>
            </div>

        </>
    )
}
export default AllRoles;