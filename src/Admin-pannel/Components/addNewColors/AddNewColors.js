import { useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import { useAddColorMutation } from '../all-products/allproductsApi/allProductsApi';

function AddNewColors() {

    const [inputval, setInputVal] = useState({ name: '', color_code: '' });

    const [addColor, response] = useAddColorMutation();

    const onChangeHandler = (e) => {
        const inpName = e.target.name;
        const inpVal = e.target.value;
        const clonedObj = { ...inputval };
        clonedObj[inpName] = inpVal;
        setInputVal(clonedObj)
    };

    const addColorData = (e) => {
        e.preventDefault();
        addColor(inputval)
        console.log(inputval)
        document.getElementById("create-course-form").reset();
    };

    const toastSuccessMessage = () => {
        toast.success("Color added Successfully", {
            position: "top-center"
        })
    };

    if (response.isSuccess === true) {
        toastSuccessMessage()
    };
    if (response.isError === true) {
        alert('!Color not added')
    }

    return (
        <>
            <div className="card">
                <div className="card-header">
                    <h5 className="mb-0 h6">Add New Color</h5>
                </div>
                <div className="card-body">
                    <form id='create-course-form' onSubmit={addColorData}>
                        <input type="hidden" name="_token" defaultValue="mFQ16X9Zo13qx9C2bzuKYymExbrY6MHLe0ZCOO2a" />
                        <div className="form-group mb-3">
                            <label htmlFor="name">Name</label>
                            <input type="text" placeholder="Name" name="name" className="form-control" defaultValue required fdprocessedid="kwk34" onChange={onChangeHandler} />
                        </div>
                        <div className="form-group mb-3">
                            <label htmlFor="name">Color Code</label>
                            <input type="text" placeholder="Color Code" name="color_code" className="form-control" defaultValue required fdprocessedid="4cvz5b" onChange={onChangeHandler} />
                        </div>
                        <div className="form-group mb-3 text-right">
                            <button type="submit" className="btn btn-primary" fdprocessedid="yix9lq">Save</button>
                        </div>
                    </form>
                </div>
                <ToastContainer />
            </div>
        </>
    )
}
export default AddNewColors;