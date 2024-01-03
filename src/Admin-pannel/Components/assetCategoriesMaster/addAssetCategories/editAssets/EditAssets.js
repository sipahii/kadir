import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Tabs } from 'react-bootstrap';
import Modal from 'react-bootstrap/Modal';
import Tab from 'react-bootstrap/Tab';
import { base_Url_Assets } from '../../../../../server';
import { useParams } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';


function EditAssets () {
    const [assetStatus, setAssetStatus] = useState(null)
    const [category, setCategory] = useState(null)
    const [subCategory, setSubCategory] = useState(null)
    const [suplier, setSuplier] = useState(null)
    const [department, setDepartment] = useState(null)
    const [subDepartment, setSubDepartment] = useState(null)
    const [assigin, setAssigin] = useState(null)
    const [customer, setCustomer] = useState(null)

    const [staffTest,setStaffTest] = useState()
    // console.log('staffTest----',staffTest);
 
    // onClickShow

    const [employ, setEmploy] = useState(false)
    const [assiginCustomer, setAssiginCustomer] = useState(false)
    const [assignSuplier, setAssignSuplier] = useState(false)

    // onClickShow

    useEffect(() => {
        const clone = {...staffTest}
        setStaffTest(clone)
    },[])

    const [add, setAdd] = useState({
        id: '',
        modelNo: '',
        name: '',
        description: '',
        unit_price: '',
        assetStatus: '',
        dateOfPurchase: '',
        category: '',
        subCategory: '',
        supplier: '',
        department: '',
        subDepartment: '',
        dateOfManufacture: '',
        yearOfValuation: '',
        warranty: '',
        depriciation: '',
        location: '',
        note: '',
        serviceTag:'',
        assignTo:staffTest,
        assetAssign:false,
        staff_id:'',
        user_id:'',
        seller_id:''
        
        // image:'',
        // purchaseReceipt:''

    })
    const HandleChange = (e) => {
        const clone = { ...add }
        const val = e.target.value
        const name = e.target.name
        clone[name] = val
        setAdd(clone)
    }

    useEffect(() => {
        selectAssetsStatus()
        selectCategory()
        selectSubCategory()
        selectSuplier()
        selectSubDepartment()
        selectDepartment()
        selectAssign()
        selectCustomer()
    }, [])

    const selectAssetsStatus = async () => {
        const getSelectAssetsStatus = await axios.get(`${base_Url_Assets}assetStatus`)
        // console.log(getSelectAssetsStatus);
        setAssetStatus(getSelectAssetsStatus.data)
    }

    const selectCategory = async () => {
        const getSelectCategory = await axios.get(`${base_Url_Assets}assetCategories`)
        setCategory(getSelectCategory.data)
    }

    const selectSubCategory = async () => {
        const getSelectSubCategory = await axios.get(`${base_Url_Assets}assetCategories`)
        setSubCategory(getSelectSubCategory.data)
    }

    const selectSuplier = async () => {
        const getSelectSuplier = await axios.get(`${base_Url_Assets}sellerList`)
        // console.log('------',getSelectSuplier);
        setSuplier(getSelectSuplier.data)
    }

    const selectDepartment = async () => {
        const getDepartment = await axios.get(`${base_Url_Assets}assetEmpDepartment`)
        setDepartment(getDepartment.data)
    }

    const selectSubDepartment = async () => {
        const getSubDepartment = await axios.get(`${base_Url_Assets}assetEmpDepartment`)
        setSubDepartment(getSubDepartment.data)
    }

    const selectAssign = async () => {
        const getAssign = await axios.get(`${base_Url_Assets}staff`)
        setAssigin(getAssign.data)
    }

    const selectCustomer = async () => {
        const getCustomer = await axios.get(`${base_Url_Assets}customer`)
        // console.log(getCustomer);
        setCustomer(getCustomer.data)
    }


    // const handleClick = () => {
    //     postData(add)

    // }

    const [img, setImg] = useState('')

    const handleImage = (e) => {
        setImg(e.target.files[0])
    }

    const [purchageImg, setPurchageImg] = useState('')

    const handleImage2 = (e) => {
        setPurchageImg(e.target.files[0])
    }

    // const handleApi = async() => {


    //     const postImg = await axios.post(`${base_Url_Assets}cloudinaryImage/addImage`, formData)
    //     console.log(postImg)
    // }

    // useEffect(() => {
    //     handleApi()
    // },[])



    const postData = async () => {
        const formData = new FormData()
        formData.append('image', img)
        formData.append('id', add.id)
        formData.append('name', add.name)
        formData.append('assetStatus', add.assetStatus)
        formData.append('category', add.category)
        formData.append('dateOfManufacture', add.dateOfManufacture)
        formData.append('dateOfPurchase', add.dateOfPurchase)
        formData.append('department', add.department)
        formData.append('subDepartment', add.subDepartment)
        formData.append('depriciation', add.depriciation)
        // formData.append('image',add.image)
        formData.append('modelNo', add.modelNo)
        formData.append('location', add.location)
        formData.append('note', add.note)
        formData.append('purchaseReceipt', purchageImg)
        formData.append('subCategory', add.subCategory)
        formData.append('supplier', add.supplier)
        formData.append('unit_price', add.unit_price)
        formData.append('warranty', add.warranty)
        formData.append('yearOfValuation', add.yearOfValuation)
        formData.append('serviceTag', add.serviceTag)

        formData.append('assignTo', add.assignTo)
        formData.append('assetAssign', add.assetAssign)
        formData.append('staff_id', add.staff_id)
        formData.append('user_id', add.user_id)
        formData.append('seller_id', add.seller_id)
        

    //    console.log('add----',add)
        // const postApi = await axios.post(`${base_Url_Assets}asset/add_assets`, formData)
        // console.log('postapi----', postApi)
    }



    const employs = (staff) => {
        // console.log(staff);
        setStaffTest(staff)

        const clone = {...add,assetAssign:true,assignTo:staff}
        setAdd(clone)
       

        setEmploy(true)
        setAssiginCustomer(false)
        setAssignSuplier(false)
    }

    const asignCustomer = (staff) => {
        const clone = {...add,assetAssign:true,assignTo:staff}
        setAdd(clone)
        setAssiginCustomer(true)
        setEmploy(false)
        setAssignSuplier(false)
    }

    const asignSupliyer = (staff) => {
        const clone = {...add,assetAssign:true,assignTo:staff}
        setAdd(clone)
        setAssignSuplier(true)
        setEmploy(false)
        setAssiginCustomer(false)
    }

    const params = useParams()
    const getAssetId = async () => {
        const getByIdData = await axios.get(`${base_Url_Assets}asset/${params.id}`)
        setAdd(getByIdData.data)
    }

    useEffect(() => {
        getAssetId()
    }, [])

    const toastSuccessMessage = () => {
        toast.success("Assets updated Successfully.", {
            position: "top-center"
        })
    };

    const editHandle = async () => {
        const responce = await axios.put(`${base_Url_Assets}asset/Update_assets/${params.id}`,add)
        // console.log(responce);
        if (responce.status == '200') {
            toastSuccessMessage()
        }
    }
    return (
        <>
        <div
        className="modal show"
        style={{ display: 'block', position: 'initial' }}
    >
        <Modal.Dialog>
            <Modal.Header closeButton>
                <Modal.Title>Add Asset</Modal.Title>
            </Modal.Header>

            <Modal.Body>
                <div className='border-1'>
                    <Tabs
                        defaultActiveKey="basic"
                        id="justify-tab-example"
                        className="mb-3"
                        justify
                    >
                        <Tab eventKey="basic" title="Basic Info">
                            <div className="aiz-main-content">
                                <div className="px-15px px-lg-25px">
                                    <div className="aiz-titlebar text-left mt-2 mb-3">
                                        <div className="row align-items-center">

                                            {/* <div className="col-md-6 text-md-right">
                                <Link to="/admin/roles/create" className="btn btn-circle btn-info">
                                    <span>Add New Role</span>
                                </Link>
                            </div> */}
                                        </div>
                                    </div>
                                    <div className="card">

                                        <div className="card-body">

                                            <section className="form-section">
                                                <div className="row">
                                                    {/* <form action=""> */}
                                                    <div className="col-lg-3">
                                                        <div>
                                                            <label htmlFor='Asset Id'>Asset ID</label>
                                                            <input type="text" className="form-control" name='id' value={add.id} id="exampleInputAssetId" aria-describedby="assetId" placeholder="Asset Id" onChange={HandleChange} />
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-3">
                                                        <div>
                                                            <label htmlFor='Asset Model No'>Asset Model No</label>
                                                            <input type="text" className="form-control" name='modelNo' value={add.modelNo} id="exampleInputAssetModelNo" aria-describedby="assetModelNo" placeholder="Asset Model No" onChange={HandleChange} />
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-3">
                                                        <div>
                                                            <label htmlFor='Asset Model No'>serviceTag</label>
                                                            <input type="text" className="form-control" name='serviceTag' value={add.serviceTag} id="exampleInputAssetModelNo" aria-describedby="assetModelNo" placeholder="Service Tag" onChange={HandleChange} />
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-3">
                                                        <div>
                                                            <label htmlFor='Asset Model No'>Name</label>
                                                            <input type="text" className="form-control" name='name' value={add.name} id="exampleInputName" aria-describedby="emailHelp" placeholder="Name" onChange={HandleChange} />
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-3">
                                                        <div>
                                                            <label htmlFor='Asset Model No'>Description</label>

                                                            <input type="text" className="form-control" name='description' value={add.description} id="exampleInputDescription" aria-describedby="Description" placeholder="Description" onChange={HandleChange} />
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-3 mt-3">
                                                        <div>
                                                            <label htmlFor='Asset Model No'>Unit Price</label>

                                                            <input type="number" className="form-control" name='unit_price' value={add.unit_price} id="exampleUnitPrice" aria-describedby="emailHelp" placeholder="Unit Price" onChange={HandleChange} />
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-3 mt-3">
                                                        <label htmlFor='assetStatus'>Asset Status</label>
                                                        <div>
                                                            <select id='assetStatus' className="form-select" name='assetStatus' value={add.assetStatus} aria-label="Default select example" onChange={HandleChange}>
                                                                <option>Open this select menu</option>
                                                                {assetStatus && assetStatus?.map((item) => {
                                                                    return <option value={item?.id}>{item?.name}</option>
                                                                })}
                                                            </select>
                                                        </div>

                                                    </div>
                                                    <div className="col-lg-3 mt-3">
                                                        <div>
                                                            <label htmlFor='Asset Model No'>Date Of Purchase</label>
                                                            <input type="date" className="form-control" name='dateOfPurchase' value={add.dateOfPurchase} id="exampleUnitPrice" aria-describedby="emailHelp" placeholder="Unit Price" onChange={HandleChange} />
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-3 mt-3">
                                                        <label htmlFor='Asset Model No'>Category</label>
                                                        <select className="form-select" aria-label="Default select example" name='category' value={add.category} onChange={HandleChange}>
                                                            <option selected>Type</option>
                                                            {category && category?.map((item) => {
                                                                return <option value={item?._id}>{item.name}</option>
                                                            })}
                                                        </select>
                                                    </div>
                                                    <div className="col-lg-3 mt-3">
                                                        <label htmlFor='Asset Model No'>Sub Category</label>
                                                        <select className="form-select" name='subCategory' value={add.subCategory} aria-label="Default select example" onChange={HandleChange}>
                                                            <option selected>---select---</option>
                                                            {subCategory && subCategory?.map((item) => {
                                                                return <option value={item?._id}>{item?.name}</option>
                                                            })}
                                                        </select>
                                                    </div>
                                                    <div className="col-lg-3 mt-3">
                                                        <label htmlFor='Asset Model No'><b>Supplier</b></label>
                                                        <select className="form-select" name='supplier' value={add.supplier} aria-label="Default select example" onChange={HandleChange}>
                                                            <option selected>---select---</option>
                                                            {suplier && suplier?.map((item) => {
                                                                return <option value={item?._id}>{item?.firstname + ' ' + item?.lastname}</option>
                                                            })}
                                                        </select>
                                                    </div>
                                                    <div className="col-lg-3 mt-3">
                                                        <label htmlFor='Asset Model No'>Department</label>
                                                        <select className="form-select" aria-label="Default select example" name='department' value={add.department} onChange={HandleChange}>
                                                            <option selected>---select---</option>
                                                            {department && department?.map((item) => {
                                                                return <option value={item?._id}>{item?.name}</option>
                                                            })}

                                                            <option value={1}>Ready to ship</option>
                                                        </select>
                                                    </div>
                                                    <div className="col-lg-3 mt-3">
                                                        <label htmlFor='Asset Model No'>Sub Department</label>
                                                        <select className="form-select" name='subDepartment' value={add.subDepartment} aria-label="Default select example" onChange={HandleChange}>
                                                            <option selected>---select---</option>
                                                            {subDepartment && subDepartment?.map((item) => {
                                                                return <option value={item?._id}>{item?.name}</option>
                                                            })}
                                                        </select>
                                                    </div>
                                                    <div className="col-lg-3 mt-3">
                                                        <button type='button' onClick={editHandle} className="btn btn-primary mr-3">Save</button>
                                                        <button className="btn btn-danger">Close</button>
                                                    </div>
                                                    {/* </form> */}
                                                </div>
                                            </section>

                                            <div className="aiz-pagination">
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="bg-white text-center py-3 px-15px px-lg-25px mt-auto">
                                </div>
                            </div>
                        </Tab>
                        <Tab eventKey="other Info" title="other Info">
                            <div className="aiz-main-content">
                                <div className="px-15px px-lg-25px">
                                    <div className="aiz-titlebar text-left mt-2 mb-3">
                                        {/* <form action=""> */}
                                        <div className="row align-items-center">
                                            <div className="col-lg-3 mt-3">
                                                <div>
                                                    <label htmlFor='Asset Model No'>Date Of Manufacture
                                                    </label>
                                                    <input type="date" className="form-control" name='dateOfManufacture' value={add.dateOfManufacture} id="exampleDateOfManufacture" aria-describedby="emailHelp" onChange={HandleChange} />
                                                </div>

                                            </div>
                                            <div className="col-lg-3 mt-3">
                                                <div>
                                                    <label htmlFor='Asset Model No'>Year Of Valuation</label>
                                                    <input type="date" className="form-control" name='yearOfValuation' value={add.yearOfValuation} id="exampleYearOfValuation" aria-describedby="emailHelp" onChange={HandleChange} />
                                                </div>

                                            </div>
                                            <div className="col-lg-3 mt-3">
                                                <div>
                                                    <label htmlFor='Asset Model No'>Warranety In  Month</label>
                                                    <input type="number" className="form-control" name='warranty' value={add.warranty} id="exampleUnitPrice" aria-describedby="emailHelp" onChange={HandleChange} />
                                                </div>

                                            </div>
                                            <div className="col-lg-3 mt-3">
                                                <div>
                                                    <label htmlFor='Asset Model No'>Depreciation In Month
                                                    </label>
                                                    <input type="text" className="form-control" name='depriciation' value={add.depriciation} id="exampleUnitPrice" aria-describedby="emailHelp" onChange={HandleChange} />
                                                </div>
                                            </div>
                                            <div className="col-lg-3 mt-3">
                                                <div>
                                                    <label htmlFor='Asset Model No'>Location</label>
                                                    <input type="text" className="form-control" name='location' value={add.location} id="exampleLocation" aria-describedby="emailHelp" onChange={HandleChange} />
                                                </div>
                                            </div>
                                            {/* <div className="col-lg-3 mt-3">
                                                <div>
                                                    <label htmlFor='Asset Model No'>Date Of Purchase</label>
                                                    <input type="text" className="form-control" id="exampleUnitPrice" aria-describedby="emailHelp" placeholder="Unit Price" />
                                                </div>
                                            </div> */}
                                            <div className="col-lg-3 mt-3">
                                                <div>
                                                    <label htmlFor='Asset Model No'>Image</label>
                                                    <input type="file" className="form-control" name='file' id="exmpleImage" aria-describedby="emailHelp" onChange={handleImage} />
                                                </div>
                                            </div>
                                            <div className="col-lg-3 mt-3">
                                                <div>
                                                    <label htmlFor='Asset Model No'>Purchase Receipt</label>
                                                    <input type="file" className="form-control" name='file' id="examplePurchaseReceipt" aria-describedby="emailHelp" onChange={handleImage2} />
                                                </div>
                                            </div>
                                        </div>
                                        <div>
                                            <label htmlFor='Asset Model No'>
                                                <b>Note</b>
                                            </label>
                                            <textarea type="text" name='note' value={add.note} className="w-100" style={{ height: "100px" }} id="exampleNote" aria-describedby="emailHelp" onChange={HandleChange} />
                                        </div>
                                        {/* </form> */}
                                    </div>
                                    <div className="col-lg-3 mt-3 d-flex justifycontentCenter">
                                        <button className="btn btn-primary mr-3">Save</button>
                                        <button className="btn btn-danger">Close</button>
                                    </div>
                                </div>

                            </div>
                        </Tab>
                        <Tab eventKey="asset-asigin" title="Asset Assigin">
                            <div className="aiz-main-content">
                                <div className="px-15px px-lg-25px">

                                    <div className="card">

                                        <div className="card-body">

                                            <section className="form-section">
                                                <div className="row">
                                                    {/* <form action=""> */}

                                                    {/* <div className="col-lg-3 mt-3">
                                                        <label htmlFor='Assign Employee'><b>Assign To</b></label>
                                                        <select className="form-select" aria-label="Default select example">
                                                            <option selected>---select---</option>
                                                            <option onClick={() => setEmploy(!employ)}>staff</option>
                                                            <option>user</option>
                                                            <option>seller</option>
                                                        </select>
                                                    </div> */}

                                                    <div className="col-lg-3">
                                                        <h2>Assign To</h2>
                                                        <button className="btn btn-primary mr-3 mb-3" name='assignTo' onClick={()=>employs('staff')}>Assign Employee</button>
                                                        <button className="btn btn-primary mr-3 mb-3" name='assignTo' onClick={()=>asignCustomer('user')}>Assign Customer</button>
                                                        <button className="btn btn-primary mb-3" name='assignTo' onClick={()=>asignSupliyer('suplyer')}>Assign suplier</button>
                                                    </div>

                                                    {employ && (
                                                        <div className="col-lg-3 mt-3">
                                                            <label htmlFor='Assign Employee'><b>Assign Employee</b></label>
                                                            <select className="form-select" name='staff_id' value={add.staff_id} aria-label="Default select example" onChange={HandleChange}>
                                                                <option selected>---select---</option>
                                                                {assigin && assigin?.map((item) => {
                                                                    return <option value={item?._id}>{item?.firstname}</option>
                                                                })}

                                                            </select>
                                                        </div>
                                                    )}

                                                    {assiginCustomer && (
                                                        <div className="col-lg-3 mt-3">
                                                        <label htmlFor='Assign Employee'><b>Assign Customer</b></label>
                                                        <select className="form-select" name='user_id' value={add.user_id} aria-label="Default select example" onChange={HandleChange}>
                                                            <option selected>---select---</option>
                                                            {customer && customer?.map((item) => {
                                                                return <option value={item?._id}>{item?.firstname}</option>
                                                            })}

                                                        </select>
                                                    </div>
                                                    )}

                                                    {assignSuplier && (
                                                        <div className="col-lg-3 mt-3">
                                                        <label htmlFor='Assign Employee'><b>Assign suplier</b></label>
                                                        <select className="form-select" name='seller_id' value={add.seller_id} aria-label="Default select example" onChange={HandleChange}>
                                                            <option selected>---select---</option>
                                                            {suplier && suplier?.map((item) => {
                                                                return <option value={item?._id}>{item?.firstname}</option>
                                                            })}
                                                        </select>
                                                    </div>
                                                    )}
                                                    {/* </form> */}
                                                </div>
                                                <div className="col-lg-3  d-flex justifycontentCenter">
                                                    <button className="btn btn-primary mr-3">Save</button>
                                                    <button className="btn btn-danger">Close</button>
                                                </div>
                                            </section>

                                            <div className="aiz-pagination">
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="bg-white text-center py-3 px-15px px-lg-25px mt-auto">
                                </div>
                            </div>
                        </Tab>

                    </Tabs>
                </div>
            </Modal.Body>

            <Modal.Footer>
                {/*  <Button variant="secondary">Close</Button>
                <Button variant="primary">Save</Button> */}
            </Modal.Footer>
        </Modal.Dialog>
        <ToastContainer/>
    </div>
        </>
    )
}
export default EditAssets