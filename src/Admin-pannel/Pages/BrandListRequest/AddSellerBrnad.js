import React, { useState } from 'react';
import { useAddNewBrandMutation } from '../../Components/all-products/allproductsApi/allProductsApi';
import axios from 'axios';


function AddSellerBrnad() {

    const selerId = window.localStorage.getItem('isSellerId')
    const [inputval, setInputval] = useState({ name: '', logo: null, attachments: null, meta_title: '', meta_description: '' });
    const [file, setFile] = useState(null);
    const [proof, setProof] = useState(null);
    const [addNewBrand, response] = useAddNewBrandMutation()

    const handleFile = (event) => {
        if (event.target.name === 'image') {
            setFile(event.target.files[0])
        } else {
            setProof(event.target.files[0])
        }

    }

    const onChangeHandler = (e) => {
        const inpName = e.target.name;
        const inpval = e.target.value;
        const clonedObj = { ...inputval };
        clonedObj[inpName] = inpval;
        setInputval(clonedObj)
    };

    const addNewBrandData = async (e) => {
        e.preventDefault();

        const clonedObj = { ...inputval, image: file, proof: proof, };
        console.log(clonedObj);

        const url = `https://onlineparttimejobs.in/api/brandSeller/add_Request`
        const formData = new FormData();

        formData.append('brand_name', clonedObj.name);
        formData.append('logo', file);
        formData.append('attachments', proof);
        formData.append('meta_title', clonedObj.meta_title);
        formData.append('meta_description', clonedObj.meta_description);
        formData.append('seller_id',  selerId);

        try {
            const res = await axios.post(url, formData);
            alert('Brnad Request Send Successfully')
        } catch (error) {
            alert('Brnad Request Send Fail !')
        }

    };



    return <div className="col-md-5">
        <div className="card">
            <div className="card-header">
                <h5 className="mb-0 h6">Add New Brand</h5>
            </div>
            <div className="card-body">
                <form id="create-course-form" onSubmit={addNewBrandData}>
                    <input type="hidden" name="_token" defaultValue="6klBhNOhEcSYzHAP1WU8ctR90lIocmkKBETVGkNx" required />
                    <div className="form-group mb-3">
                        <label htmlFor="name">Name</label>
                        <input type="text" placeholder="Name" name="name" onChange={onChangeHandler} className="form-control" required />
                    </div>

                    <div className="form-group mb-3">
                        <label htmlFor="name">Logo <small>(120x80)</small></label>
                        <div className="input-group" data-type="image" >
                            <div className="input-group-prepend">
                                <div className="input-group-text bg-soft-secondary font-weight-medium">Browse</div>
                            </div>
                            <div className="form-control file-amount">
                                <input type="file" className="selected-files" name='image' onChange={handleFile} required />
                            </div>
                        </div>
                        <div className="file-preview box sm">
                        </div>
                    </div>

                    <div className="form-group mb-3">
                        <label htmlFor="name">Proof <small>(120x80)</small></label>
                        <div className="input-group" data-type="image" >
                            <div className="input-group-prepend">
                                <div className="input-group-text bg-soft-secondary font-weight-medium">Browse</div>
                            </div>
                            <div className="form-control file-amount">
                                <input type="file" className="selected-files" name='attachments' onChange={handleFile} required />
                            </div>
                        </div>
                        <div className="file-preview box sm">
                        </div>
                    </div>

                    <div className="form-group mb-3">
                        <label htmlFor="name">Meta Title</label>
                        <input type="text" name='meta_title' className="form-control" placeholder="Meta Title" onChange={onChangeHandler} required />
                    </div>
                    <div className="form-group mb-3">
                        <label htmlFor="name">Meta description</label>
                        <textarea name="meta_description" rows={5} className="form-control" onChange={onChangeHandler} required />
                    </div>
                    <div className="form-group mb-3 text-right">
                        <button type="submit" className="btn btn-primary">Save</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
}
export default AddSellerBrnad
