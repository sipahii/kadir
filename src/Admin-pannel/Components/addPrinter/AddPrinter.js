import { useState } from "react";
import { useUpdateMoneyFormatMutation } from "../all-products/allproductsApi/allProductsApi";

function AddPrinter() {

    const [inputVal, setInputval] = useState({
        title: "", type: '', profile:'', charactersperlie: "", path: ''
    });

    const onChangeHandler = (e) => {
        const inpName = e.target.name;
        const inpval = e.target.value;
        const clonedObj = { ...inputVal };
        clonedObj[inpName] = inpval;
        setInputval(clonedObj)
    };

    const [addAddPrinterD, response] = useUpdateMoneyFormatMutation();

    const submitAddPrinterD = (e) => {
        e.preventdefault()
        const abc = { ...inputVal }
        console.log('abc----', abc)
        addAddPrinterD(abc)
        document.getElementById("create-course-form").reset();
    };

    return (
        <>
            <div className="container">
                <div className="row card">
                    <div className="">

                        <div className="card-header gutters-5">
                            <h5 class="mb-md-0 h6">Add Printer</h5>
                        </div>
                        <div className="col-lg-12">
                            <p>Please fill in the information below. The field labels marked with * are required input fields.</p>
                        </div>
                        <div className="col-lg-6">
                            <form id="create-course-form" onSubmit={submitAddPrinterD}>
                                <div className="mb-3">
                                    <label htmlFor="exampleInputEmail1" className="form-label">Title</label>
                                    <input type="text" name="title" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" onChange={onChangeHandler} />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="sellect" className="form-label">Type *</label>
                                    <select class="form-select" name="type" aria-label="Default select example" onChange={onChangeHandler}>
                                        <option value={'Network'}>Network</option>
                                        <option value={'Windows'}>Windows</option>
                                        <option value={'Linux'}>Linux</option>
                                    </select>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="sellect" className="form-label">Profile *</label>
                                    <select class="form-select" name="profile" aria-label="Default select example" onChange={onChangeHandler}>
                                        <option value={'Default'}>Default</option>
                                        <option value={'Simple'}>Simple</option>
                                        <option value={'Starbranded'}>Star-branded</option>
                                    </select>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="exampleInputEmail1" className="form-label">Characters per line *</label>
                                    <input type="text" name="charactersperlie" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" onChange={onChangeHandler} />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="exampleInputEmail1" className="form-label">Path *</label>
                                    <input type="text" name="path" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" onChange={onChangeHandler} />
                                </div>
                                <button className="btn btn-primary">Add Printer</button>
                            </form>

                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}
export default AddPrinter
