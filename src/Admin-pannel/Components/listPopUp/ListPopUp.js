import { Link } from "react-router-dom"

function ListPopUp() {
    return (
        <>
            <div className="aiz-main-content">
                <div className="px-15px px-lg-25px">
                    <div className="aiz-titlebar text-left mt-2 mb-3">
                        <div className="row align-items-center">
                            <div className="col-auto">
                                <h1 className="h3">
                                    Popup Master
                                </h1>
                            </div>
                            <div className="col text-right">
                                <Link to="/admin/add-pop-up" className="btn btn-circle btn-info">
                                    <span>
                                        Add Popup
                                    </span>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <br />
                    <div className="card">
                        <div className="card-header row gutters-5">
                            {/* <div className="col-md-4">
                                <h5 className="mb-md-0 h6">
                                    All Product
                                </h5>
                            </div> */}

                            <div className="col-lg-4">
                                <select className="form-select" aria-label="Default select example">
                                    <option selected>Page</option>
                                    <option value={1}>One</option>
                                    <option value={2}>Two</option>
                                    <option value={3}>Three</option>
                                </select>

                            </div>
                            <div className="col-lg-4">
                                <select className="form-select" aria-label="Default select example">
                                    <option selected>Status</option>
                                    <option value={1}>One</option>
                                    <option value={2}>Two</option>
                                    <option value={3}>Three</option>
                                </select>

                            </div>

                            <div className="col-lg-4">
                                <button type="button" className="btn btn-primary mr-3">Search</button>
                                <button type="button" className="btn btn-danger">Reset</button>
                            </div>





                        </div>

                        <div className="card-body">
                            <table className="table aiz-table mb-0 footable footable-1 breakpoint breakpoint-lg">
                                <thead>
                                    <tr>
                                        <th>Page</th>
                                        <th>URL</th>
                                        <th>Image</th>
                                        <th>Status</th>
                                        <th>Acton</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td className="text-center d-block">
                                            Nothing found
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}
export default ListPopUp