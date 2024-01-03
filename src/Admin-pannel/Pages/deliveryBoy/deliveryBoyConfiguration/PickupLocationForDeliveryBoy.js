import React, { useEffect, useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import { useGetBasicAffiliateQuery, useGetPickupLocationForDeliveryQuery, useUpdateAffiliateBasicMutation } from '../../../Components/all-products/allproductsApi/allProductsApi';

function PickupLocationForDeliveryBoy() {


    const [inputval, setInputval] = useState({
        lat: '',
        long: ''
    });
    const [statusD, setStatusD] = useState()

    const { data } = useGetPickupLocationForDeliveryQuery();
    useEffect(() => {
        const obj = { ...data }
        if (data) {
            setInputval(obj)
            // setStatusD(obj)
        }
    }, [data]);

    console.log('LocationDeliveryData---', data)

    const onChangeHandler = (e) => {
        // setStatusD(!statusD)
        const inpName = e.target.name;
        const inpval = e.target.value;
        const clonedObj = { ...inputval };
        clonedObj[inpName] = inpval;
        setInputval(clonedObj)
    };

    const [editLocationForDeliveryBoyD, response] = useUpdateAffiliateBasicMutation();

    const submitUpdateLocationForDeliveryBoy = (e) => {
        e.preventDefault();
        const abc = { ...inputval }
        editLocationForDeliveryBoyD(abc)
        document.getElementById("create-course-form").reset();
    };


    const toastSuccessMessage = () => {
        toast.success("Location Updated Successfully !", {
            position: "top-center"
        })
    };

    const toastErrorMessage = () => {
        toast.error("Location not Updated !", {
            position: "top-center"
        })
    }

    useEffect(() => {
        if (response.isSuccess === true) {
            toastSuccessMessage()
        };
    }, [response]);

    useEffect(() => {
        if (response.isError === true) {
            toastErrorMessage()
        };
    }, [response])


    console.log('response--', response)

    return (
        <>
            <div className="col-lg-6">
                <div className="card">
                    <div className="card-header">
                        <h6 className="mb-0 h6">Pickup Location For Delivery Boy</h6>
                    </div>
                    <div className="card-body">
                        <form className="form-horizontal" id='create-course-form' onSubmit={submitUpdateLocationForDeliveryBoy}>

                            <div className="form-group row">
                                <input
                                    type="hidden"
                                    name="type"
                                    defaultValue="user_registration_first_purchase"
                                />
                                <div className="col-lg-4">
                                    <label className="control-label">
                                        Longitude
                                    </label>
                                </div>
                                <div className="col-lg-6">

                                    <input type="number" className="form-control" name="lat" value={inputval?.lat}
                                        placeholder="" required fdprocessedid="k81gnb" onChange={onChangeHandler} />
                                </div>
                            </div>

                            <div className="form-group row">
                                <input
                                    type="hidden"
                                    name="type"
                                    defaultValue="user_registration_first_purchase"
                                />
                                <div className="col-lg-4">
                                    <label className="control-label">
                                        Latitude
                                    </label>
                                </div>
                                <div className="col-lg-6">

                                    <input type="number" className="form-control" name="long" value={inputval?.long}
                                        placeholder="" required fdprocessedid="k81gnb" onChange={onChangeHandler} />
                                </div>
                            </div>

                            <div className="form-group mb-0 text-right">
                                <button
                                    type="submit"
                                    className="btn btn-sm btn-primary"
                                    fdprocessedid="6fh7eo"
                                >
                                    Update
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
                <ToastContainer />
            </div>
        </>
    )
}

export default PickupLocationForDeliveryBoy