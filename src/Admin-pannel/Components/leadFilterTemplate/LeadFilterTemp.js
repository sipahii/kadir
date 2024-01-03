import { AiOutlineSearch } from 'react-icons/ai'
function LeadFilterTemp() {
    return (
        <>
            <div className="container-fluid">
                <div className="row size-column">
                    <div className="card">
                        <div className="card-body">
                            <div className="row">
                                <div className="col-md-6">
                                    <h5>Lead Filter Templates
                                    </h5>
                                </div>
                                <div className="col-md-3"></div>
                                <div className="col-md-3">
                                    <button className="btn btn-primary form-control">Add Lead Filter</button>
                                </div>
                            </div>
                            <hr className="border border-2 border-secondary opacity-50" />
                            <div className='row'>
                                <div className="col-md-3 ">
                                    <div className=" d-flex">
                                        <select class="form-select mr-2 " aria-label="Default select example" >
                                            <option selected>0</option>
                                            <option value="10">10</option>
                                            <option value="25">25</option>
                                            <option value="50">50</option>
                                            <option value="100">100</option>
                                            <option value="4">all</option>
                                        </select>
                                        <button type="button " className="btn btn-outline-secondary">
                                            Export
                                        </button>
                                    </div>

                                </div>
                                <div className="col-md-3"></div>
                                <div className="col-md-3"></div>
                                <div className="col-md-3">
                                    <div className="input-group">
                                        <span className="input-group-text" id="basic-addon1">
                                            <AiOutlineSearch />
                                        </span>
                                        <input
                                            type="search"
                                            className="form-control"
                                            placeholder="Search"
                                            aria-label=""
                                            aria-describedby="basic-addon1"
                                        />
                                    </div>

                                </div>
                            </div>
                            <div className='row mb-3 g-3 mt-3'>
                                <div className='col-md-12'>
                                    <div className='table-responsive'>
                                        <table className='table table-hover table-striped'>
                                            <thead className='table-secondary'>
                                                <tr>
                                                    <th ><select name="#" id=""></select></th>
                                                    <th>Filter Name </th>


                                                </tr>

                                            </thead>
                                            <tbody></tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                            <div className='row mb-3 g-3'>
                                <div className='col-md-12'>
                                    <ul className="pagination justify-content-end pagination-primary">
                                        <li className="page-item"><a className="btn disabled" role='button' href="#">Previous</a></li>
                                        <li className="page-item"><a className="btn disabled btn-primary" role='button' href="#">1</a></li>
                                        <li className="page-item"><a className="btn disabled" role='button' href="#">Next</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}
export default LeadFilterTemp