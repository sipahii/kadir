import { Link } from "react-router-dom"
import { useGetSmsTemplateQuery, useSmsDeleteMutation } from "../all-products/allproductsApi/allProductsApi"

function SmsList() {
    const { data, refetch } = useGetSmsTemplateQuery()
    const [deleteSms] = useSmsDeleteMutation()

    const deleteItem = (id) => {
        deleteSms(id)
        refetch()
    }
    return <div className="px-15px px-lg-25px">
        <div className="aiz-titlebar text-left mt-2 mb-3">
            <div className="row align-items-center">
                <div className="col-md-6">
                    <h1 className="h3">All SMS LIST</h1>
                </div>
            </div>
        </div>
        <div className="card">
            <form id="sort_sellers" method="GET">
                <div className="card-header row gutters-5"><div className="dropdown col-lg-2 mb-2 mb-md-0">   </div><div className="col-md-3 ml-auto"></div><div className="col-md-3-"><div className="form-group mb-0">
                    {/* <input type="text" className="form-control" id="search" name="search" placeholder="Type name or email & Enter" fdprocessedid="3vgavp" /> */}
                </div>
                    <Link className="btn btn-success" to="create" style={{ marginTop: 10, width: 150 }}>Add SMS</Link>
                </div>
                </div>
                <div className="card-body">
                    <table className="table aiz-table mb-0 footable footable-1 breakpoint-xl">
                        <thead>
                            <tr class="footable-header">

                                <th style={{ display: "table-cell" }}>#</th>
                                <th style={{ display: "table-cell" }}>Identifier</th>
                                <th data-breakpoints="lg" style={{ display: "table-cell" }}>Sms body</th>
                                <th data-breakpoints="lg" style={{ display: "table-cell" }}>status</th>
                                <th width="10%" class="footable-last-visible" style={{ display: "table-cell" }}>Options</th>
                            </tr>
                        </thead>
                        <tbody>
                            {data ? data.map((item, i) => {
                                return <tr key={item.id}>
                                    <td style={{ display: "table-cell" }}>{++i}</td>
                                    <td style={{ display: "table-cell" }}>{item.identifier}</td>
                                    <td style={{ display: "table-cell" }}>{item.sms_body}</td>
                                    <td style={{ display: "table-cell" }}>{item.status ? <span>Deleverd</span> : <span>Pending</span>}</td>
                                    <td style={{ display: "table-cell" }}>
                                        <Link className="btn btn-soft-primary btn-icon btn-circle btn-sm" title="View" to="#">
                                            <i class="las la-eye"></i>
                                        </Link>

                                        <Link class="btn btn-soft-info btn-icon btn-circle btn-sm" title="Approved" to={`edit/${item._id}`}>
                                            <i class="las la-edit"></i>
                                        </Link>

                                        <button onClick={() => deleteItem(item._id)} type="button" class="btn btn-soft-danger btn-icon btn-circle btn-sm confirm-delete">
                                            <i class="las la-trash"></i>
                                        </button>
                                    </td>
                                </tr>
                            }) : <>Loading....</>}
                        </tbody>
                    </table>
                </div>

            </form>
        </div>

    </div>
}
export default SmsList