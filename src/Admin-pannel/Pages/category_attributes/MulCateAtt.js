
import axios from "axios";
import Multiselect from "multiselect-react-dropdown"
import { useEffect, useState } from "react";
import { MultiselectOption } from "../../common/MultiSelectOption";
import { Button } from "bootstrap";
import { RxCross1 } from "react-icons/rx";
import { useParams } from "react-router-dom";
import { useGetAllProductsQuery } from "../../Components/all-products/allproductsApi/allProductsApi";


function MulCateAtt({ data, item, i, addNewAttributeData, onChangeHandler, setValue, changeData, setVal }) {
    const [finalCatD, setFinalCatD] = useState(item.category);
    const token = window.localStorage.getItem('token')
    const [categ, setCateg] = useState([]);
    const getData = async () => {
        const res = await axios.get(`https://onlineparttimejobs.in/api/category/admin`, {
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
                'Authorization': 'Bearer ' + token
            }
        })
        setCateg(res.data)
    }
    useEffect(() => {
        getData()
    }, [])



    const [finalCatD2, setFinalCatD2] = useState(item.attributeSet);
    const [finalCatD3, setFinalCatD3] = useState(item.attributeSet);
    const [data1, setData1] = useState()
    const getDatas = async () => {
        const res = await axios.get('https://onlineparttimejobs.in/api/attributeSetMaster/admin', {
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
                'Authorization': 'Bearer ' + token
            }
        })
        setData1(res.data)
    }

    useEffect(() => {
        getDatas()
    }, [])
    const [proAtt, setProAtt] = useState()

    const removeRowAt = (id, indx) => {
        const clone = [...proAtt]

        const getobj = clone[indx]
        const separateArr = getobj.list

        const mapedData = separateArr.filter((item) => {
            return id !== item.attribute._id
        })
        getobj.list = mapedData

        clone.splice(indx, 1, getobj)

        setProAtt(clone);
    }
    const changeValues = (e, val) => {
        const clone = [...proAtt]
        const indx = e.target.id

        let getobj = { ...clone[indx] }
        // const separateArr = getobj.list

        const mapedData = getobj.list.map((item) => {
            if (val == item.attribute._id) {
                return { ...item, value: e.target.value }
            } else {
                return item
            }
        })
        getobj.list = mapedData
        clone.splice(indx, 1, getobj)
        setProAtt(clone)

    }

    const getAttributes = async () => {
        const res = await axios.post('https://onlineparttimejobs.in/api/attributeSetMaster/categ/get', { id: finalCatD2 })
        setProAtt(res.data);
    }

    const [sel, setSel] = useState()


    const onchangeImagehandle1 = async (e, id) => {
        const inpVal = e.target.files[0];
        const images = new FormData();
        images.delete('image');
        images.append('image', inpVal);
        let objj = {};
        try {
            const res2 = await axios.post(`https://onlineparttimejobs.in/api/cloudinaryImage/addImage`, images)
            objj = { public_id: res2.data.public_id, url: res2.data.url }
        } catch (error) {
            console.log(" Image  not uploded")
        }
        images.delete('image');
        const maped = data.map((item) => {
            if (item.language_id == id) {
                const obj = { ...item, [e.target.name]: objj }
                return obj
            } else {
                return item
            }
        })
        if (objj?.url) {
            setVal(maped)
        }
    }

    const sendDatas = (id) => {
        const maped = data.map((item) => {
            if (item.language_id == id) {
                const obj = { ...item, category: finalCatD, attributeSets: proAtt, product: finalCatD3 }
                return obj
            } else {
                return item
            }
        })
        setVal(maped)
    }
    const params = useParams()
    const { data: productsList } = useGetAllProductsQuery(token)
    const [prolist, setProlist] = useState()
    useEffect(() => {
        if (productsList) {
            const clone = []
            for (let i = 0; i < productsList.length; i++) {
                const element = productsList[i];
                clone.push({ ...element, name: element.product.name, uid: element._id.uid })
            }
            setProlist(clone)
        }
    }, [productsList])
    return <div className="card" >
        <div className="card-header">
            <h5 className="mb-0 h6">Add New Category Attribute {item?.lable}</h5>
        </div>
        <div className="card-body">
            <form id="create-course-form" >
                <div className="form-group mb-3">
                    <label htmlFor="name">Attribute Navigation</label>
                    <input type="text" placeholder="Navigation" id="name" value={item.navigation} onChange={(e) => { onChangeHandler(e, item.language_id) }} name="navigation" className="form-control" required fdprocessedid="8s3s9v" />
                </div>
                <div className="form-group mb-3">
                    <label htmlFor="name">Attribute Name</label>
                    <input type="text" placeholder="Name" id="name" value={item.name} onChange={(e) => { onChangeHandler(e, item.language_id) }} name="name" className="form-control" required fdprocessedid="8s3s9v" />
                </div>

                <div className="form-group mb-3">
                    <label htmlFor="name">Attribute Description</label>
                    <input type="text" placeholder="Description" id="description" value={item.description} onChange={(e) => { onChangeHandler(e, item.language_id) }} name="description" className="form-control" required fdprocessedid="8s3s9v" />
                </div>
                <div className="form-group mb-3">
                    <label htmlFor="name">Icon</label>
                    <input type="file" onChange={(e) => { onchangeImagehandle1(e, item.language_id) }} name="icon_img" className="form-control" required fdprocessedid="8s3s9v" />
                    {item?.icon_img?.url && <img style={{ width: "150px", height: "150px" }} src={item?.icon_img?.url} />}

                </div>
                <div className="form-group mb-3">
                    <label htmlFor="name">Banner Img</label>
                    <input type="file" onChange={(e) => { onchangeImagehandle1(e, item.language_id) }} name="banner_img" className="form-control" required fdprocessedid="8s3s9v" />
                    {item?.banner_img?.url && <img style={{ width: "150px", height: "150px" }} src={item?.banner_img?.url} />}
                </div>

                <div className="form-group mb-3">
                    <label htmlFor="name">Category Child Name</label>
                    <Multiselect
                        isObject={true}
                        displayValue="name"
                        options={categ}
                        showCheckbox
                        selectedValues={item?.category}
                        onRemove={(selectedCat) => {
                            const selectedIds = selectedCat.map((cat) => {
                                return cat
                            })
                            setFinalCatD(selectedIds)
                            // setLangData(selectedIds)
                        }}
                        onSelect={(selectedCat) => {
                            const selectedIds = selectedCat.map((cat) => {
                                return cat
                            })
                            setFinalCatD(selectedIds)
                            // setLangData(selectedIds)
                        }}
                    />

                </div>



                <div className="form-group mb-3">
                    <label htmlFor="name">Product</label>
                    <div>
                        <Multiselect
                            isObject={true}
                            displayValue="name"
                            options={prolist}
                            showCheckbox
                            selectedValues={[]}
                            onRemove={(selectedCat) => {
                                const selectedIds = selectedCat.map((cat) => {
                                    return cat.uid
                                })
                                setFinalCatD3(selectedIds)
                            }}
                            onSelect={(selectedCat) => {
                                const selectedIds = selectedCat.map((cat) => {
                                    return cat.uid
                                })
                                setFinalCatD3(selectedIds)
                            }}
                        />

                    </div>
                </div>




                <div className="form-group mb-3">
                    <label htmlFor="name">Attribute</label>
                    <div>
                        <Multiselect
                            isObject={true}
                            displayValue="name"
                            options={data1}
                            showCheckbox
                            selectedValues={sel}
                            onRemove={(selectedCat) => {
                                const selectedIds = selectedCat.map((cat) => {
                                    return cat._id
                                })
                                setFinalCatD2(selectedIds)
                            }}
                            onSelect={(selectedCat) => {
                                const selectedIds = selectedCat.map((cat) => {
                                    return cat._id
                                })
                                setFinalCatD2(selectedIds)
                            }}
                        />
                        <button onClick={getAttributes} style={{ margin: "10px 0" }} type="button" class="btn btn-info">Get Data</button>
                    </div>
                </div>




                {true && <div className="form-group row">
                    <div className="col-md-12">

                        <div  >
                            {proAtt && proAtt?.map((item, i) => {
                                return <div className='mainboxatt' key={i}>
                                    <div className='col-4'>{item.attributeSetMaster.name}</div>
                                    <div>
                                        {item?.list?.map((val, v) => {
                                            return <div key={v} style={{ display: "flex", alignContent: "baseline", margin: "7px 0" }}>
                                                <label className="col-md-3 col-from-label">{val.attribute.name}</label>
                                                <input placeholder="Value" name={v._id} value={val.value} id={i} className="form-control" onChange={
                                                    (e) => {
                                                        changeValues(e, val.attribute._id)
                                                    }
                                                } />
                                                <div style={{ fontSize: "17px", margin: "0 5px" }}> <RxCross1 onClick={() => { removeRowAt(val?.attribute._id, i) }} /></div>
                                            </div>
                                        })}
                                    </div>
                                </div>

                            })}

                        </div>

                    </div>
                </div>}


                <div class="form-check">
                    <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                    <label onClick={() => { sendDatas(item.language_id) }} class="form-check-label" for="flexCheckDefault">
                        Save Data (This is Mandatory)
                    </label>
                </div>









                {data.length == i + 1 ? <div className="form-group mb-3 text-right">
                    <button type="submit" className="btn btn-primary" fdprocessedid="uzw7ye" onClick={() => { setValue(i - 1) }}>Prev</button>
                    <button type="submit" className="btn btn-primary" fdprocessedid="uzw7ye" onClick={addNewAttributeData}>{params?.id ? 'Update' : 'Save'}</button>
                </div>
                    :
                    <div className="form-group mb-3 text-right">
                        {i !== 0 && <button type="submit" className="btn btn-primary" fdprocessedid="uzw7ye" onClick={() => { setValue(i - 1) }}>Prev</button>}
                        <button type="submit" className="btn btn-primary" fdprocessedid="uzw7ye" onClick={() => { setValue(i + 1) }}>Next</button>
                    </div>

                }

            </form>
        </div>
    </div>
}

export default MulCateAtt