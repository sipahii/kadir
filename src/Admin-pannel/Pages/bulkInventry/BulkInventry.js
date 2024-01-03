import axios from "axios";
import { useState } from "react";

function BulkInventry() {


    const [file, setFile] = useState(null);

    const handleFile = (event) => {
        setFile(event.target.files[0])
    }
    const handleUpload = async (event) => {
        event.preventDefault();
        const formData = new FormData();
        formData.append('product', file);
        console.log(formData?.get('product'))
        try {
            const res = await axios.post(`https://onlineparttimejobs.in/api/bulkimport/bulkImportStock`, formData);
            alert('Bulk Import Successfully')
        } catch (error) {
            alert('Bulk Import Failed.')
        }
    };


    return (
        <>
            <div className="aiz-main-content">
                <div className="px-15px px-lg-25px">
                    <div className="card">
                        <div className="card-header">
                            <h5 className="mb-0 h6">Bulk Inventry Import</h5>
                        </div>
                        <div className="card-body">
                            <div className="alert alert-pragraph" style={{ color: '#004085', backgroundColor: '#cce5ff', borderColor: '#b8daff', marginBottom: 0, marginTop: 10 }}>
                                <strong>Step 1:</strong>
                                <p >1. Download the skeleton file and fill it with proper data.</p>
                                <p>2. You can download the example file to understand how the data must be filled.</p>
                                <p>3. Once you have downloaded and filled the skeleton file, upload it in the form below and submit.</p>
                                <p>4. After uploading products you need to edit them and set product's images and choices.</p>
                            </div>
                            <br />
                            <div>
                                <a href="https://onlineparttimejobs.in/api/bulkimport/inventoryFormat" download>
                                    <button className="btn btn-info">Download CSV</button>
                                </a>
                            </div>
                           </div>
                    </div>
                    <div className="card">
                        <div className="card-header">
                            <h5 className="mb-0 h6"><strong>Upload Product File</strong></h5>
                        </div>



                        <div className="card-body">
                            <form className="form-horizontal" onSubmit={handleUpload} encType="multipart/form-data">
                                <div className="form-group row">
                                    <div className="col-sm-9">
                                        <div className="custom-file">
                                            <label className="custom-file-label">
                                                <input type="file" name="file" className="selected-files" required onChange={handleFile} />
                                                {/* <span className="custom-file-name">Choose File</span> */}
                                            </label>
                                        </div>
                                    </div>
                                </div>
                                <div className="form-group mb-0">
                                    <button type="submit" className="btn btn-info">Upload CSV</button>
                                </div>
                            </form>
                        </div>


                    </div>
                </div>
                <div className="bg-white text-center py-3 px-15px px-lg-25px mt-auto">
                    {/*p class="mb-0">&copy;  v6.3.3</p*/}
                </div>
            </div>

        </>
    )
}
export default BulkInventry