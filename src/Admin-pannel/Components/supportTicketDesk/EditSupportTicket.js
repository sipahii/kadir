import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import { useEditSupportTicketMutation, useGetSupportTicketByIdQuery } from '../all-products/allproductsApi/allProductsApi';
// import { useEditCouponMutation, useGetCouponByIdQuery } from '../../all-products/allproductsApi/allProductsApi';

function EditSupportTicket() {
   
    const [inputval, setInputval] = useState({
        code: '',
        subject: '',
        start_date: '',
        end_date: '',
        reply: ""
    });

    const params = useParams();

    const { data } = useGetSupportTicketByIdQuery(params.id);
    useEffect(() => {
        const obj = { ...data }
        setInputval(obj)
    }, [data]);

    const [editSupportTicket, response] = useEditSupportTicketMutation();

    const onChangeHandler = (e) => {
        const inpName = e.target.name;
        const inpval = e.target.value;
        const clonedObj = { ...inputval };
        clonedObj[inpName] = inpval;
        setInputval(clonedObj)
    };
    const submitEditSupportTicketData = (e) => {
        e.preventDefault();
        editSupportTicket({ id: params.id, data: inputval })
        document.getElementById("create-course-form").reset();
    };

    const toastSuccessMessage = () => {
        toast.success("Ticket Edited Successfully", {
            position: "top-center"
        })
    };

    useEffect(() => {
        if (response.isSuccess === true) {
            toastSuccessMessage()
        };
        if (response.isError === true) {
            alert('!Ticket not edited')
        };
    }, [response.isSuccess, response.isError])


    return (
        <>
            <div className="aiz-main-content">
                <div className="px-15px px-lg-25px">
                    <div className="aiz-titlebar text-left mt-2 mb-3">
                        <h5 className="mb-0 h6">Ticket Information</h5>
                    </div>
                    <div className="col-lg-8 mx-auto">
                        <div className="card">
                            <div className="card-body p-0">

                                <form className="p-4" id="create-course-form" onSubmit={submitEditSupportTicketData}>
                                    <div className="form-group row">
                                        <label className="col-sm-3 col-from-label" htmlFor="currency name">Code<i className="las la-language text-danger" title="Translatable" />
                                        </label>
                                        <div className="col-sm-9">
                                            <input type="number" placeholder="code" id="code" name="code" className="form-control" required fdprocessedid="zp6g3o" value={inputval?.code} onChange={onChangeHandler} />
                                        </div>
                                    </div>

                                    <div className="form-group row">
                                        <label className="col-sm-3 col-from-label">Subject</label>
                                        <div className="col-sm-9">
                                            <input type="text" className="form-control" name="subject" placeholder="subject" fdprocessedid="vrvrin" value={inputval?.subject} onChange={onChangeHandler} />
                                        </div>
                                    </div>

                                    <div className="form-group row">
                                        <label className="col-sm-3 col-from-label">Status</label>
                                        <div className="col-sm-9">
                                            <input type="text" className="form-control" name="status" placeholder="status" fdprocessedid="vrvrin" value={inputval?.status} onChange={onChangeHandler} />
                                        </div>
                                    </div>
                                    <div className="form-group row">
                                        <label className="col-sm-3 col-from-label">Reply</label>
                                        <div className="col-sm-9">
                                            <input type="text" className="form-control" name="reply" placeholder="reply" fdprocessedid="vrvrin" value={inputval?.reply} onChange={onChangeHandler} />
                                        </div>
                                    </div>

                                    <div className="form-group row">
                                        <label className="col-sm-3 col-from-label">Sending Date</label>
                                        <div className="col-sm-9">
                                            <input type="date" className="form-control" name="end_date" placeholder="end date" fdprocessedid="vrvrin" value={inputval?.end_date} onChange={onChangeHandler} />
                                        </div>
                                    </div>

                                    <div className="form-group mb-0 text-right">
                                        <button type="submit" className="btn btn-primary">Save</button>
                                    </div>

                                </form>
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

export default EditSupportTicket;