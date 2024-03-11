import axios from "axios";
import { useState } from "react";
import { useGetCustomersQuery } from "../../Components/all-products/allproductsApi/allProductsApi";

let shipp
let billing
function AddAgreement() {

    const { data: customers } = useGetCustomersQuery();

    const [billingAddress, setBillingAddress] = useState();
    const [shippingAddress, setShippingAddress] = useState();
    const [customerId, setCustomerId] = useState();


    const changeHandelAddress = async (e) => {
        const shippingRes = await axios.get(`https://onlineparttimejobs.in/api/shippingAddress/customer/shipping/${e.target.value}`);
        setShippingAddress(shippingRes.data)

        const billingRes = await axios.get(`https://onlineparttimejobs.in/api/user/billAddress/${e.target.value}`);
        setBillingAddress(billingRes.data);
        shipp = shippingRes.data.address[0]._id
        billing = billingRes.data.address[0]._id
        setCustomerId(e.target.value)
    }



    const [values, setValues] = useState(
        {
            customer_id: customerId,
            shipping_adress: '',
            billing_address: '',
            initialTerm: "",
            renewalTerm: "",
            start_Date: "",
            end_Date: "",
            status: "",
            type: "customer",
        }
    )

    const [files, setFiles] = useState()

    const chanefile = (e) => {
        setFiles(e.target.files[0])
    }

    const changeHandelVal = (e) => {
        const clone = { ...values }
        clone[e.target.name] = e.target.value
        setValues(clone)
    }

    const sendData = async () => {
        const obj = {
            ...values, customer_id: customerId, shipping_adress: values?.shipping_adress ? values.shipping_adress : shipp, billing_address: values?.billing_address ? values.billing_address : billing,
        }
        console.log(files);

        const formData = new FormData()


        formData.append('customer_id', customerId);
        formData.append('shipping_adress', obj.shipping_adress);
        formData.append('billing_address', obj.billing_address);
        formData.append('initialTerm', obj.initialTerm);
        formData.append('renewalTerm', obj.renewalTerm);
        formData.append('start_Date', obj.start_Date);
        formData.append('end_Date', obj.end_Date);
        formData.append('status', obj.status);
        formData.append('type', 'customer');

        try {
            const res = await axios.post(`https://onlineparttimejobs.in/api/serviceAgreement/add_Agreement`, formData)
            alert('Agreement Add Successfully')
        } catch (error) {
            alert('Agreement Add FAIL...!!')
        }
    }
    return <>
        <div className="aiz-main-content">
            <div className="px-15px px-lg-25px">
                <div className="down-head">
                    <div className="col">
                        <h5 className="mb-md-0 h6">Add Agreement</h5>
                    </div>
                </div>
                <div className="card">

                    <form>
                        <div className="card-header row gutters-5">
                            <div className="col-lg-4 dropdown mb-2 mb-md-0">
                                <label for="exampleInputEmail1" class="form-label">Agreement Type</label>
                                <select
                                    className="form-select"
                                    disabled
                                    aria-label="Default select example"
                                >
                                    <option selected>Sellect Type</option>
                                    <option>Supplier</option>
                                    <option selected value="1">Customer</option>
                                </select>
                            </div>


                            <div className="col-lg-4 ml-auto">
                                <label for="exampleInputEmail1" class="form-label">Photo</label>
                                <input type="file" className="form-control" onChange={chanefile} name="agreementDoc" />
                            </div>



                            <div className="col-4 d-block">
                                <div>
                                    <label>Customer</label>
                                    <select name="customer" className="form-select" aria-label="Default select example" onChange={changeHandelAddress} >
                                        {customers && customers.map((item, i) => {
                                            return <option value={item._id} key={i}>{item?.firstname + " " + item?.lastname}</option>
                                        })}
                                    </select>
                                </div>
                            </div>

                            <div className="col-4 d-block">
                                <div>
                                    <label>Billing Adress</label>
                                    <select name="billing_address" className="form-select" aria-label="Default select example" onChange={changeHandelVal} >
                                        {billingAddress && billingAddress.address?.map((item, i) => {
                                            return <option selected value={item._id} key={i}>{item?.addressLine1 + ',' + item?.addressLine2 + ' ,' + item?.landmark + ' ,' + item?.zip + ', ' + item?.city + ' ,' + item?.state + ' ,' + item?.country}</option>
                                        })}
                                    </select>
                                </div>
                            </div>

                            <div className="col-4 d-block">
                                <div>
                                    <label>Shipping Adress</label>
                                    <select name="shipping_adress" className="form-select" aria-label="Default select example" onChange={changeHandelVal} >
                                        {shippingAddress && shippingAddress.address?.map((item, i) => {
                                            return <option selected value={item._id} key={i}>{item?.addressLine1 + ', ' + item?.addressLine2 + ' ,' + item?.landmark + ',' + item?.zip + ',' + item?.city + ',' + item?.state + ',' + item?.country}</option>
                                        })}
                                    </select>
                                </div>
                            </div>




                            <div className="col-lg-4 ml-auto">
                                <label for="exampleInputEmail1" class="form-label">Initial Term</label>
                                <input type="text" className="form-control" onChange={changeHandelVal} name="initialTerm" />
                            </div>
                            <div className="col-lg-4 ml-auto">
                                <label for="exampleInputEmail1" class="form-label">Renewal Term</label>
                                <input type="text" className="form-control" onChange={changeHandelVal} name="renewalTerm" />

                            </div>
                            <div className="col-lg-4">
                                <div className="form-group mb-0">
                                    <label for="exampleInputEmail1" class="form-label">Start Date</label>
                                    <input
                                        type="date"
                                        className="aiz-date-range form-control"
                                        name="start_Date"
                                        placeholder="Filter by date"
                                        data-format="DD-MM-Y"
                                        onChange={changeHandelVal}
                                        data-separator=" to "
                                        data-advanced-range="true"
                                        autoComplete="off"
                                        fdprocessedid="sq6vu7"
                                    />
                                </div>
                            </div>
                            <div className="col-lg-4">
                                <div className="form-group mb-0">
                                    <label for="exampleInputEmail1" class="form-label">End Date</label>
                                    <input
                                        type="date"
                                        className="aiz-date-range form-control"
                                        onChange={changeHandelVal}
                                        name="end_Date"
                                        placeholder="Filter by date"
                                        data-format="DD-MM-Y"
                                        data-separator=" to "
                                        data-advanced-range="true"
                                        autoComplete="off"
                                        fdprocessedid="sq6vu7"
                                    />
                                </div>
                            </div>
                            <div className="col-lg-4">
                                <div className="form-group mb-0">
                                    <label for="exampleInputEmail1" class="form-label">Status</label>
                                    <select
                                        className="form-select"
                                        onChange={changeHandelVal}
                                        name="status"
                                        aria-label="Default select example"
                                    >
                                        <option value='pending'>Pending</option>
                                        <option value="approve">Approve</option>
                                    </select>
                                </div>
                            </div>

                        </div>
                    </form>
                    <div className="col-auto" style={{ margin: "20px 0" }}>
                        <div className="form-group mb-0">
                            <button
                                type="button"
                                className="btn btn-primary"
                                onClick={sendData}
                                fdprocessedid="24gy4"
                            >
                                save
                            </button>
                            <button
                                type="button"
                                className="btn btn-info"
                                fdprocessedid="24gy4"
                            >
                                Cancle
                            </button>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </>
}
export default AddAgreement