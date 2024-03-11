import axios from "axios"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import Barcode from 'react-jsbarcode'
import { base_Url_Assets } from "../../../../../server"

function DetailsAssets () {
    const [view,setView] = useState(null)
    const param  = useParams()

    useEffect(() => {
        detailsHandle()
    },[])

    const detailsHandle = async() => {
        const res = await axios.get(`${base_Url_Assets}asset/${param.id}`)
        console.log(res);
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
                                <th class="table-secondary" scope="col">Image</th>
                                <th class="table-secondary" scope="col">service Tag</th>
                                <th class="table-secondary" scope="col">Asset Modle No</th>
                                <th class="table-secondary" scope="col">Name</th>
                                <th class="table-secondary" scope="col">Unit Price</th>
                                <th class="table-secondary" scope="col">Date of Purchase</th>
                                <th class="table-secondary" scope="col">Barcode</th>
                            </tr>
                        </thead>
                        <tbody>

                            {view && <tr>
                                <td>{view?.id}</td>
                                <td><img width={'100px'} src={view?.image?.url} alt="" /></td>
                                <td>{view?.serviceTag}</td>
                                <td>{view?.modelNo}</td>
                                <td>{view?.name}</td>
                                <td>{view?.unit_price}</td>
                                <td>{view?.dateOfPurchase}</td>
                                <td>{view?.id && <Barcode value={view?.id}/>}</td>
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
export default DetailsAssets