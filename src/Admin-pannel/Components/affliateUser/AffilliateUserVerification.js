import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useGetAffilliateUserVerificationByIdQuery, useUpdateAffilliateUserVerificationMutation, useUpdateVerificationInfoMutation } from '../all-products/allproductsApi/allProductsApi'
import { ToastContainer, toast } from 'react-toastify';
import axios from 'axios';

function AffilliateUserVerification() {
    const [inputval, setInputval] = useState({
        value: '', label: ''
    });

    const params = useParams()

    const [updateAffilliateVerification, response] = useUpdateAffilliateUserVerificationMutation();

    const { isLoading, data } = useGetAffilliateUserVerificationByIdQuery(params.id);
    console.log('verificationD---', data);
    useEffect(() => {
        const abc = { ...data }
        if (data) {
            setInputval(abc.informations[0])
        }
    }, [data])

    const onChangeHandler = (e) => {
        const inpName = e.target.name;
        const inpval = e.target.value;
        const clonedObj = { ...inputval };
        clonedObj[inpName] = inpval;
        setInputval(clonedObj)
    };

    // const [editVerificationInfo] = useUpdateVerificationInfoMutation(params.id);

    const submitVerificationInfo = async () => {

        const verificationD = {
            informations: [
                {
                    label: 'Email:',
                    value: inputval.value,
                }
            ]
        }
        try {
            const sendData = await axios.put(`https://onlineparttimejobs.in/api/affiliateUser/update_affiliateUser/${params.id}`, verificationD)
            // alert('Verification Info Updated')
            toastSuccessMessage()
        } catch (error) {
            console.log('error--', error)
            toastErrorMessage()
        }
    };


    const submitRejectData = (val) => {
        updateAffilliateVerification({ data: { approval: val }, id: params.id });
        // if (response.status === 'fulfilled') {
        //     toastErrorMessage()
        // };
    };

    const submitAcceptData = (val) => {
        updateAffilliateVerification({ data: { approval: val }, id: params.id });
        // if (response.isSuccess === true) {
        //     toastSuccessMessage()
        // };
    }







    const toastSuccessMessage = () => {
        toast.success("Verification Info Updated !", {
            position: "top-center"
        })
    };

    const toastErrorMessage = () => {
        toast.error("Verification Info not Updated !", {
            position: "top-center"
        })
    }

    console.log('response----', response)

    return (
        <>
            <div className="aiz-main-content">
                <div className="px-15px px-lg-25px">
                    <div className="card">
                        <div className="card-header">
                            <h5 className="mb-0 h6">Affiliate User Verification</h5>
                        </div>
                        <div className="card-body row">
                            <div className="col-md-4">
                                <h6 className="mb-4">User Info</h6>
                                <p className="text-muted">
                                    <strong>Name :</strong>
                                    <span className="ml-2">{data?.user_id?.firstname + " " + data?.user_id?.lastname}</span>
                                </p>
                                <p className="text-muted">
                                    <strong>Email</strong>
                                    <span className="ml-2">{data?.user_id?.email}</span>
                                </p>
                                <p className="text-muted">
                                    <strong>Address</strong>
                                    <span className="ml-2" />
                                </p>
                                <p className="text-muted">
                                    <span className="ml-2">{data && data.user_id.mobile}</span>
                                </p>

                            </div>
                            <div className="col-md-6">
                                <h6 className="mb-4">Verification Info</h6>
                                <table className="table table-striped table-bordered" cellSpacing={0} width="100%">
                                    <tbody>
                                        {data && data?.informations?.map((item, i) => {
                                            console.log('item---', item)
                                            return <tr key={i}>
                                                <th
                                                    className="text-muted">{inputval?.label}
                                                </th>
                                                <td>
                                                    <input type='text' className='form-control' name='value' value={inputval?.value} onChange={onChangeHandler} />
                                                </td>

                                            </tr>

                                        })}

                                    </tbody>
                                </table>
                                <div className="text-center">
                                    <button type='button' onClick={() => submitRejectData(false)} className="btn btn-sm btn-default d-innline-block">Reject</button>
                                    <button type='button' onClick={() => submitAcceptData(true)} className="btn btn-sm btn-dark d-innline-block">Accept</button>
                                </div>
                                <button type='button' onClick={submitVerificationInfo} className="btn btn-sm  ms-2 btn-dark d-innline-block">Update</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="bg-white text-center py-3 px-15px px-lg-25px mt-auto">
                    {/*p class="mb-0">&copy;  v6.3.3</p*/}
                </div>
                <ToastContainer />
            </div>

        </>
    )
}

export default AffilliateUserVerification