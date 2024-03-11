import axios from "axios"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { base_Url_Assets } from "../../../../../server"


function DetailsSubDepartment() {
    const [view,setView] = useState(null)

    useEffect(() => {
        detailsHandle()
    },[])

    const params = useParams()

    const detailsHandle = async () => {
       const res  = await axios.get(`${base_Url_Assets}assetEmpSubDepartment/${params.id}`)
       setView(res.data)
    }

    return (
        <>
            <div className="aiz-main-content">
                <div className="px-15px px-lg-25px">
                    <div className="aiz-titlebar text-left mt-2 mb-3">
                        <div className="row align-items-center">
                            <div className="col-md-6">
                                <h1 className="h3">Details</h1>
                            </div>
                            {/* <div className="col-md-6 text-md-right">
                    <Link to="/admin/roles/create" className="btn btn-circle btn-info">
                        <span>Add New Role</span>
                    </Link>
                </div> */}
                        </div>
                    </div>
                    <div className="card">
                        <div className="card-header">
                            <h5 className="mb-0 h6"> Details</h5>
                            {/* <div className="col-md-6 text-md-right">
                        <Link to="/admin/add-asset-category" className="btn btn-circle btn-info">
                            <span>Add Asset Category</span>
                        </Link>
                    </div> */}
                        </div>
                        <div className="card-body">




                            <table className="table table-3 position-relative">
                                <thead>
                                    <tr>
                                        <th class="table-secondary" scope="col">Id</th>
                                        <th class="table-secondary" scope="col">Parent Department</th>
                                        <th class="table-secondary" scope="col">Name</th>
                                        <th class="table-secondary" scope="col">Description</th>
                                        <th class="table-secondary" scope="col">Created Date</th>
                                        <th class="table-secondary" scope="col">updatedAt Date</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {view && <tr>
                                        <td>{view?._id}</td>
                                        <td>{view?.parentDepartmentID}</td>
                                        <td>{view?.name}</td>
                                        <td>{view?.description}</td>
                                        <td>{view?.createdAt}</td>
                                        <td>{view?.updatedAt}</td>
                                    </tr>}
                                </tbody>
                            </table>
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
export default DetailsSubDepartment