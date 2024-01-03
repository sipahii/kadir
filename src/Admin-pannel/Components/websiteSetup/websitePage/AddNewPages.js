import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useAddPagesMutation, useEditPageListMutation, useGetPagesQuery } from "../../all-products/allproductsApi/allProductsApi";


function AddNewPagesComp() {

    const { data } = useGetPagesQuery();

    const [sendData] = useAddPagesMutation()
    const [sendEdit] =useEditPageListMutation()
    const [state, setState] = useState({
        title: "",
        link: "",
        addContent: "",
        metaTitle: "",
        metadDescription: "",
        keywords: "",
        meta_image: ""

    })
    const params = useParams()

    const chengeHandle = (e) => {
        const clone = { ...state }
        clone[e.target.name] = e.target.value
        setState(clone)
    }

    const getDetails = () => {
        const clone = {...state}
        if (params.id) {
            sendEdit(params.id , clone)
        } else {
            sendData(state);
        }
    }

    useEffect(() => {
        const filterdData = data?.find((item) => {
            return params.id === item._id
        })
        let setObj = {...state , ...filterdData}
        if (filterdData) {
            setState(setObj)
        }
    }, [data, params])
    return (
        <>
            <div className="aiz-main-content">
                <div className="px-15px px-lg-25px">
                    <div className="aiz-titlebar text-left mt-2 mb-3">
                        <div className="row align-items-center">
                            <div className="col">
                                {params.id ? <h1 className="h3">Edit Page</h1> : <h1 className="h3">Add New Page</h1>}
                            </div>
                        </div>
                    </div>
                    <div className="card">
                        <form action="https://mmslfashions.in/admin/website/custom-pages" method="POST" encType="multipart/form-data">
                            {/* <input type="hidden" name="_token" defaultValue="bZlht2QD73bDkPhHtuYc3AVcfnrS42HFjF5kM5xe" />	 */}

                            <div className="card-header">
                                <h6 className="fw-600 mb-0">Page Content</h6>
                            </div>
                            <div className="card-body">
                                <div className="form-group row">
                                    <label className="col-sm-2 col-from-label" htmlFor="name">Title <span className="text-danger">*</span></label>
                                    <div className="col-sm-10">
                                        <input type="text" className="form-control" placeholder="Title" name="title" value={state.title} onChange={chengeHandle} required fdprocessedid="68qobo" />
                                    </div>
                                </div>
                                <div className="form-group row">
                                    <label className="col-sm-2 col-from-label" htmlFor="name">Link <span className="text-danger">*</span></label>
                                    <div className="col-sm-10">
                                        <div className="input-group d-block d-md-flex">
                                            <div className="input-group-prepend "><span className="input-group-text flex-grow-1">https://onlineparttimejobs.in/api/</span></div>
                                            <input type="text" className="form-control w-100 w-md-auto" value={state.link} onChange={chengeHandle} placeholder="Slug" name="link" required fdprocessedid="8d8jxb" />
                                        </div>
                                        <small className="form-text text-muted">Use character, number, hypen only</small>
                                    </div>
                                </div>
                                <div className="form-group row">
                                    <label className="col-sm-2 col-from-label" htmlFor="name">Add Content <span className="text-danger">*</span></label>
                                    <div className='col-sm-10'>
                                        <input type="text" className="form-control" placeholder="Add Content" name="addContent" onChange={chengeHandle} value={state.addContent} required="" fdprocessedid="68qobo" />
                                    </div>
                                </div>
                            </div>
                            <div className="card-header">
                                <h6 className="fw-600 mb-0">Seo Fields</h6>
                            </div>
                            <div className="card-body">
                                <div className="form-group row">
                                    <label className="col-sm-2 col-from-label" htmlFor="name">Meta Title</label>
                                    <div className="col-sm-10">
                                        <input type="text" className="form-control" placeholder="Title" value={state.metaTitle} name="metaTitle" onChange={chengeHandle} fdprocessedid="z0d9" />
                                    </div>
                                </div>
                                <div className="form-group row">
                                    <label className="col-sm-2 col-from-label" htmlFor="name">Meta description</label>
                                    <div className="col-sm-10">
                                        <textarea className="resize-off form-control" onChange={chengeHandle} value={state.metadDescription} placeholder="Description" name="metadDescription" />
                                    </div>
                                </div>
                                <div className="form-group row">
                                    <label className="col-sm-2 col-from-label" htmlFor="name">Keywords</label>
                                    <div className="col-sm-10">
                                        <textarea className="resize-off form-control" placeholder="Keyword, Keyword" name="keywords" value={state.keywords} onChange={chengeHandle} />
                                        <small className="text-muted">Separate with coma</small>
                                    </div>
                                </div>
                                <div className="form-group row">
                                    <label className="col-sm-2 col-from-label" htmlFor="name">Meta Image</label>
                                    <div className="col-sm-10">
                                        <div className="input-group " data-toggle="aizuploader" data-type="image" >
                                            <div className="input-group-prepend">
                                                <div className="input-group-text bg-soft-secondary font-weight-medium">Browse</div>
                                            </div>
                                            <div className="form-control file-amount">
                                                <input type="file" name="meta_image" onChange={chengeHandle} value={state.meta_image} className="selected-files" />
                                            </div>
                                        </div>
                                        <div className="file-preview">
                                        </div>
                                    </div>

                                </div>
                                <div className="text-right">
                                    <button type="button" onClick={getDetails} className="btn btn-primary" fdprocessedid="5mek4g">Save Page</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
                <div className="bg-white text-center py-3 px-15px px-lg-25px mt-auto">
                    {/*p class="mb-0">&copy;  v6.3.3</p*/}
                </div>
            </div>

        </>
    )
}
export default AddNewPagesComp;