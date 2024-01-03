import { useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import { useAddOrderConfigurationMutation } from '../../all-products/allproductsApi/allProductsApi';

function OrderConfiguration() {
    const [booleanVal, setBooleanVal] = useState(false)
    const [inputval, setInputVal] = useState({ minimum_order: false, set_min_order_amount: '' });

    const onChangeHandler = (e) => {
        const inpName = e.target.name;
        const inpVal = e.target.value;

        const clonedObj = { ...inputval };
        clonedObj[inpName] = inpVal;
        if (e.target.name == 'minimum_order') {

            clonedObj[inpName] = !booleanVal;
            setBooleanVal(clonedObj);
        }

        setInputVal(clonedObj)
    };

    const [addOrderConfigs, response] = useAddOrderConfigurationMutation();

    const addOrderConfigurationData = (e) => {
        e.preventDefault();
        addOrderConfigs(inputval)
        console.log(inputval)
        document.getElementById("create-course-form").reset();
    };

    const toastSuccessMessage = () => {
        toast.success("OrderConfiguration added Successfully", {
            position: "top-center"
        })
    };

    if (response.isSuccess === true) {
        toastSuccessMessage()
    };
    if (response.isError === true) {
        alert('!OrderConfiguration not added')
    }

    return (
        <>
            <div className="aiz-main-content">
                <div className="px-15px px-lg-25px">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="card">
                                <div className="card-header">
                                    <h5 className="mb-0 h6">Minimum Order Amount Settings</h5>
                                </div>
                                <form id='create-course-form' onSubmit={addOrderConfigurationData}>
                                    <div className="card-body">
                                        <input type="hidden" name="_token" defaultValue="kXMve4kNuwpLskUZw6eQaBIihyAaanRjWMC2zCTA" />

                                        <div className="form-group row">
                                            <div className="col-md-4">
                                                <label className="control-label">Minimum Order Amount Check</label>
                                            </div>
                                            <div className="col-md-8">
                                                <label className="aiz-switch aiz-switch-success mb-0">
                                                    <input type="checkbox" defaultValue={booleanVal} name="minimum_order" />
                                                    <span className="slider round" onChange={onChangeHandler} />
                                                </label>
                                            </div>
                                        </div>

                                        <div className="form-group row">
                                            <input type="hidden" name="types[]" defaultValue="minimum_order_amount" />
                                            <div className="col-md-4">
                                                <label className="control-label">Set Minimum Order Amount</label>
                                            </div>
                                            <div className="col-md-8">
                                                <input type="number" className="form-control" name="set_min_order_amount" placeholder="Minimum Order Amount" required fdprocessedid="65xqz" onChange={onChangeHandler} />
                                            </div>
                                        </div>

                                        <div className="form-group mb-0 text-right">
                                            <button type="submit" className="btn btn-sm btn-primary" fdprocessedid="am63ql">Save</button>
                                        </div>

                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>

                <ToastContainer />
            </div>
        </>
    )
}
export default OrderConfiguration;