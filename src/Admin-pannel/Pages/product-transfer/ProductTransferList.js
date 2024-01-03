import { Table } from "react-bootstrap";
import { AiOutlineSearch } from "react-icons/ai";

function ProductTransferList() {
    return <div className="aiz-main-content">
        <div className="px-15px px-lg-25px">
            <div className="card" style={{ padding: "10px" }}>
                <h5>Transfer Record</h5>

                <div className="container-flued">
                    <div className="row">
                        <div className="col-3">
                            <div className="mb-3">
                                <label htmlFor="basic-url" className="form-label">Transfer Branch</label>
                                <select className="form-select" aria-label="Default select example">
                                    <option selected>Customer One</option>
                                    <option value="1">One</option>
                                    <option value="2">Two</option>
                                    <option value="3">Three</option>
                                </select>
                            </div>
                        </div>
                        <div className="col-3">
                            <div className="mb-3">
                                <label htmlFor="basic-url" className="form-label">Transfer Warehouse</label>
                                <select className="form-select" aria-label="Default select example">
                                    <option selected>Customer One</option>
                                    <option value="1">One</option>
                                    <option value="2">Two</option>
                                    <option value="3">Three</option>
                                </select>
                            </div>
                        </div>
                        <div className="col-3">
                            <label htmlFor="basic-url" className="form-label">From Date</label>
                            <input type="date" className="form-control" />
                        </div>
                        <div className="col-3">
                            <label htmlFor="basic-url" className="form-label">To Date</label>
                            <input type="date" className="form-control" />
                            <button type="button" style={{margin:"10px 0"}} class="btn btn-warning"><AiOutlineSearch/> Search</button>
                        </div>
                        

                    </div>
                </div>
                <Table striped bordered>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Transfer Date</th>
                            <th>Transfer Branch</th>
                            <th>Transfer Warehouse</th>
                            <th>Transfer By</th>
                            <th>Amount</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>

                        <tr>
                            <td>1</td>
                            <td>12/3/2022</td>
                            <td>OPKN</td>
                            <td>
                                UJKI
                            </td>
                            <td>Acita</td>
                            <td>300</td>
                            <td>###</td>
                        </tr>

                    </tbody>
                </Table>
            </div>
        </div>

    </div>
}
export default ProductTransferList