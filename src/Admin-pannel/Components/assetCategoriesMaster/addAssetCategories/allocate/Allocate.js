import axios from "axios"
import { useEffect, useState } from "react"
import { base_Url_Assets } from "../../../../../server"
import { ToastContainer, toast } from "react-toastify"
import { Link, useParams } from "react-router-dom"
import { AiFillEdit } from "react-icons/ai"
import { GrView } from "react-icons/gr"

function Allocate() {
    const [get, setGet] = useState(null)
    const [pickUp, setPickUp] = useState(null)
    // const [assetStatus, setAssetStatus] = useState(null)
    // const [category, setCategory] = useState(null)
    // const [subCategory, setSubCategory] = useState(null)
    const [suplier, setSuplier] = useState(null)
    // const [department, setDepartment] = useState(null)
    // const [subDepartment, setSubDepartment] = useState(null)
    const [assigin, setAssigin] = useState(null)
    const [customer, setCustomer] = useState(null)

    const [staffTest, setStaffTest] = useState()
    // console.log('staffTest----',staffTest);

    // onClickShow

    const [employ, setEmploy] = useState(false)
    const [assiginCustomer, setAssiginCustomer] = useState(false)
    const [assignSuplier, setAssignSuplier] = useState(false)

    const param = useParams()
    const [assetsId, setAssetsId] = useState(param)
    console.log(assetsId);

    // onClickShow

    const sendAsetId = () => {
        const clone = { ...add, assetId: assetsId.id }
        setAdd(clone)
    }

    useEffect(() => {
        const clone = { ...staffTest }
        setStaffTest(clone)
        sendAsetId()
    }, [])

    const [add, setAdd] = useState({
        id: '',
        // modelNo: '',
        // name: '',
        // description: '',
        // unit_price: '',
        // assetStatus: '',
        // dateOfPurchase: '',
        // category: '',
        // subCategory: '',
        // supplier: '',
        // department: '',
        // subDepartment: '',
        // dateOfManufacture: '',
        // yearOfValuation: '',
        // warranty: '',
        // depriciation: '',
        // location: '',
        // note: '',
        // serviceTag:'',
        assignTo: staffTest,
        assetAssign: false,
        staff_id: '',
        user_id: '',
        seller_id: '',
        pickupLocation: ''

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
        // selectAssetsStatus()
        // selectCategory()
        // selectSubCategory()
        selectSuplier()
        // selectSubDepartment()
        // selectDepartment()
        selectAssign()
        selectCustomer()
        pickUpPoint()
    }, [])

    // const selectAssetsStatus = async () => {
    //     const getSelectAssetsStatus = await axios.get(`${base_Url_Assets}assetStatus`)
    //     // console.log(getSelectAssetsStatus);
    //     setAssetStatus(getSelectAssetsStatus.data)
    // }

    // const selectCategory = async () => {
    //     const getSelectCategory = await axios.get(`${base_Url_Assets}assetCategories`)
    //     setCategory(getSelectCategory.data)
    // }

    // const selectSubCategory = async () => {
    //     const getSelectSubCategory = await axios.get(`${base_Url_Assets}assetCategories`)
    //     setSubCategory(getSelectSubCategory.data)
    // }

    const pickUpPoint = async () => {
        const getPickup = await axios.get(`${base_Url_Assets}pickupPoints`)
        setPickUp(getPickup.data)
    }

    const selectSuplier = async () => {
        const getSelectSuplier = await axios.get(`${base_Url_Assets}sellerList`)
        // console.log('------',getSelectSuplier);
        setSuplier(getSelectSuplier.data)
    }

    // const selectDepartment = async () => {
    //     const getDepartment = await axios.get(`${base_Url_Assets}assetEmpDepartment`)
    //     setDepartment(getDepartment.data)
    // }

    // const selectSubDepartment = async () => {
    //     const getSubDepartment = await axios.get(`${base_Url_Assets}assetEmpDepartment`)
    //     setSubDepartment(getSubDepartment.data)
    // }

    const selectAssign = async () => {
        const getAssign = await axios.get(`${base_Url_Assets}staff`)
        setAssigin(getAssign.data)
    }

    const selectCustomer = async () => {
        const getCustomer = await axios.get(`${base_Url_Assets}customer`)
        // console.log(getCustomer);
        setCustomer(getCustomer.data)
    }




    const handleClick = () => {
        postData(add)

    }

    // const [img, setImg] = useState('')

    // const handleImage = (e) => {
    //     setImg(e.target.files[0])
    // }

    // const [purchageImg, setPurchageImg] = useState('')

    // const handleImage2 = (e) => {
    //     setPurchageImg(e.target.files[0])
    // }

    // const handleApi = async() => {


    //     const postImg = await axios.post(`${base_Url_Assets}cloudinaryImage/addImage`, formData)
    //     console.log(postImg)
    // }

    // useEffect(() => {
    //     handleApi()
    // },[])


    const toastSuccessMessage = () => {
        toast.success("Assets category updated Successfully.", {
            position: "top-center"
        })
    };
    const postData = async () => {
        // const formData = new FormData()
        // formData.append('image', img)
        // formData.append('id', add.id)
        // formData.append('name', add.name)
        // formData.append('assetStatus', add.assetStatus)
        // formData.append('category', add.category)
        // formData.append('dateOfManufacture', add.dateOfManufacture)
        // formData.append('dateOfPurchase', add.dateOfPurchase)
        // formData.append('department', add.department)
        // formData.append('subDepartment', add.subDepartment)
        // formData.append('depriciation', add.depriciation)
        // // formData.append('image',add.image)
        // formData.append('modelNo', add.modelNo)
        // formData.append('location', add.location)
        // formData.append('note', add.note)
        // formData.append('purchaseReceipt', purchageImg)
        // formData.append('subCategory', add.subCategory)
        // formData.append('supplier', add.supplier)
        // formData.append('unit_price', add.unit_price)
        // formData.append('warranty', add.warranty)
        // formData.append('yearOfValuation', add.yearOfValuation)
        // formData.append('serviceTag', add.serviceTag)

        // formData.append('assignTo', add.assignTo)
        // formData.append('assetAssign', add.assetAssign)
        // formData.append('staff_id', add.staff_id)
        // formData.append('user_id', add.user_id)
        // formData.append('seller_id', add.seller_id)


        //    console.log('add----',add)
        const postApi = await axios.post(`${base_Url_Assets}assetStatusTransaction/add_assetStatus`, add)
        console.log('postapi----', postApi)
    }



    const employs = (staff) => {
        // console.log(staff);
        setStaffTest(staff)

        const clone = { ...add, assetAssign: true, assignTo: staff }
        setAdd(clone)


        setEmploy(true)
        setAssiginCustomer(false)
        setAssignSuplier(false)
    }

    const asignCustomer = (staff) => {
        const clone = { ...add, assetAssign: true, assignTo: staff }
        setAdd(clone)
        setAssiginCustomer(true)
        setEmploy(false)
        setAssignSuplier(false)
    }

    const asignSupliyer = (staff) => {
        const clone = { ...add, assetAssign: true, assignTo: staff }
        setAdd(clone)
        setAssignSuplier(true)
        setEmploy(false)
        setAssiginCustomer(false)
    }

    const getApiData = async () => {
        const res = await axios.get(`${base_Url_Assets}assetStatusTransaction/asset/${param.id}`)
        setGet(res.data.count)
    }

    useEffect(() => {
        getApiData()
    }, [])

    const handleDelete = async (id) => {
        await axios.delete(`${base_Url_Assets}assetstatustransaction/delete_assetstatus/${id}`)
        getApiData()
    }
    return (
        <>
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

                                    <div className="col-lg-3 mt-3">
                                        <label htmlFor='Assign Employee'><b>Pick Up Points</b></label>
                                        <select className="form-select" name='pickupLocation' value={add.pickupLocation} aria-label="Default select example" onChange={HandleChange}>
                                            <option selected>---select---</option>
                                            {pickUp && pickUp?.map((item) => {
                                                return <option value={item?._id}>{item?.pickupPoint_name}</option>
                                            })}

                                        </select>
                                    </div>

                                    <div className="col-lg-3">
                                        <h2>Assign To</h2>
                                        <button className="btn btn-primary mr-3 mb-3" name='assignTo' onClick={() => employs('staff')}>Assign Employee</button>
                                        <button className="btn btn-primary mr-3 mb-3" name='assignTo' onClick={() => asignCustomer('user')}>Assign Customer</button>
                                        <button className="btn btn-primary mb-3" name='assignTo' onClick={() => asignSupliyer('seller')}>Assign suplier</button>
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
                                    <button className="btn btn-primary mr-3" onClick={handleClick}>Save</button>
                                    <button className="btn btn-danger">Close</button>
                                </div>
                            </section>

                            <section className="form-section">
                                <div className="row">
                                    <div className="col-lg-12 mt-3">

                                    </div>
                                </div>
                            </section>

                            <table className="table table-3 position-relative">
                                <thead>
                                    <tr>
                                        <th class="table-secondary" scope="col">Id</th>
                                        <th class="table-secondary" scope="col">Assets Name</th>
                                        <th class="table-secondary" scope="col">Service Tag</th>
                                        <th class="table-secondary" scope="col">created Date</th>
                                        <th class="table-secondary" scope="col">Status</th>
                                        {/* <th class="table-secondary" scope="col">Name</th>
                                        <th class="table-secondary" scope="col">Unit Price</th>
                                        <th class="table-secondary" scope="col">Date of Purchase</th>
                                        <th class="table-secondary" scope="col">Allocate</th> */}
                                        <th class="table-secondary" scope="col">Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {get && get?.map((item) => {
                                        console.log('getitem-----', item);
                                        return <tr key={item?.id}>
                                            <td scope="row">{item?._id}</td>
                                            <td>{item?.assetId?.name}</td>
                                            <td>{item?.assetId?.serviceTag}</td>
                                            <td>{item?.createdAt}</td>
                                            <td>{item?.statusId?.name}</td>
                                            <td>
                                                {/* <Link className="btn btn-primary btn-icon btn-circle btn-sm me-2 btn-circle-2" title="View" to={`/admin/asset/edit/${item?._id}`}>
                                                    <AiFillEdit className="icon-icon" />
                                                </Link> */}
                                                <button type="button" onClick={() => handleDelete(item?._id)} className="btn btn-danger btn-icon btn-circle btn-sm btn-circle-2" title="delete" fdprocessedid="yghhlt">
                                                    <i className="las la-trash icon-icon">
                                                    </i>
                                                </button>

                                                <Link className="ms-2 btn btn-primary btn-icon btn-circle btn-sm me-2 btn-circle-2" title="View" to={`/admin/asset/details/${item?._id}`}>

                                                    <GrView />
                                                </Link>
                                            </td>
                                        </tr>
                                    })}

                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
                <div className="bg-white text-center py-3 px-15px px-lg-25px mt-auto">
                </div>
                <ToastContainer />
            </div>
        </>
    )
}
export default Allocate