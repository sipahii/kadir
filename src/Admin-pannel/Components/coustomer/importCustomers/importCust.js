function ImportCustomers() {
    return (
        <>
            <div className="container-fluid">
                <div className="row size-column">
                    <div className="col-md-12">
                        <div className="alert alert-info">
                            <ul>
                                <li>
                                    1. Your CSV data should be in the format below. The first line
                                    of your CSV file should be the column headers as in the table
                                    example. Also make sure that your file is UTF-8 to avoid
                                    unnecessary encoding problems.
                                </li>
                                <li>2. If the column you are trying to import is date make sure that is formatted in format Y-m-d (2023-08-10).
                                </li>
                                <li>3. Make sure you configure the default contact permission in Setup-Customers to get the best results like auto assigning contact permissions and email notification settings based on the permission.
                                </li>
                                <li>4. Duplicate email rows won't be imported.</li>
                            </ul>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-6">
                            <h4>Import Customers</h4>
                        </div>
                        <div className="col-md-6 text-right">
                            <button type="button" className="btn btn-primary">Download Sample</button>
                        </div>

                    </div>
                    <div className="card mt-3 " style={{ height: 500 }}>
                        <div className="card-body mb-3">

                            <table class="table " style={{ width: "2500px", }}>
                                <thead className="table-secondary">
                                    <tr>

                                        <th scope="col">FirstName <br />Contact field</th>
                                        <th scope="col">Lastname <br />Contact field</th>
                                        <th scope="col">Email <br />Contact field</th>
                                        <th scope="col">Contact PhoneNumber <br />Contact field</th>
                                        <th scope="col">Position <br />Contact field</th>
                                        <th scope="col">Company</th>
                                        <th scope="col">Vat</th>
                                        <th scope="col">Phonenumber</th>
                                        <th scope="col">Country</th>
                                        <th scope="col">City</th>
                                        <th scope="col">Zipcode</th>
                                        <th scope="col">State</th>
                                        <th scope="col">Address</th>
                                        <th scope="col">Website</th>
                                        <th scope="col">Billing Street</th>
                                        <th scope="col">Billing City</th>
                                        <th scope="col">Billing State</th>
                                        <th scope="col">Billing Zip</th>
                                        <th scope="col">Billing Country</th>
                                        <th scope="col">Shipping Street </th>
                                        <th scope="col">Shipping City </th>
                                        <th scope="col">Shipping State </th>
                                        <th scope="col">Shipping Zip </th>
                                        <th scope="col">Shipping Country </th>
                                        <th scope="col">Longitude </th>
                                        <th scope="col">Strip Id </th>
                                        <th scope="col">IsSupplier </th>
                                        <th scope="col">Father's Name </th>

                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <th scope="row">Sample Data</th>
                                        <td>Sample Data</td>
                                        <td>64d4be607f69b@example.com</td>
                                        <td>@Sample Data</td>
                                        <td>@mdo</td>
                                        <td>@mdo</td>
                                        <td>@mdo</td>
                                        <td>@mdo</td>
                                        <td>@mdo</td>
                                        <td>@mdo</td>
                                        <td>@mdo</td>
                                        <td>@mdo</td>
                                        <td>@mdo</td>
                                        <td>@mdo</td>
                                        <td>@mdo</td>
                                        <td>@mdo</td>
                                        <td>@mdo</td>
                                        <td>@mdo</td>
                                        <td>@mdo</td>
                                        <td>@mdo</td>
                                        <td>@mdo</td>
                                        <td>@mdo</td>
                                        <td>@mdo</td>
                                        <td>@mdo</td>
                                        <td>@mdo</td>
                                        <td>@mdo</td>
                                    </tr>

                                </tbody>
                            </table>
                        </div>
                        <div className="row mb-3">
                            <div className="col-md-6 mt-3">
                                <label htmlFor="* Choose CSV File" className="ml-2"><small>*</small> Choose CSV File</label>
                                <div className="col-sm-12">
                                    <input type="file" name="" id="" className="form-control" />
                                </div>
                            </div>
                        </div>
                        <div className="row mb-3">
                            <div className="col-md-6">
                                <label htmlFor="*" className="ml-2">Groups</label>
                                <div className="col-sm-12">
                                    <select className="form-select">
                                        <option value=""></option>
                                    </select>
                                </div>
                            </div>
                        </div>
                        <div className="row mb-3">
                            <div className="col-md-6">
                                <label htmlFor="" className="ml-2">Default password for all contacts</label>
                                <div className="col-sm-12">
                                    <input type="text" className="form-control" />
                                </div>
                            </div>
                        </div>
                        <div className="row mb-3">
                            <div className="col-md-6 ml-2">
                                <button type="button" className="btn btn-primary mr-2">Import </button>
                                <button type="button" className="btn btn-primary mr-2">Simulate Import</button>
                            </div>
                        </div>

                    </div>
                </div>
            </div >
        </>
    );
}
export default ImportCustomers