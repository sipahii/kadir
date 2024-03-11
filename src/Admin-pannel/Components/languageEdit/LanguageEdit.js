import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { toast, ToastContainer } from 'react-toastify';
import { useEditLanguageMutation, useGetLanguageByIdQuery, useGetLanguagesQuery } from "../all-products/allproductsApi/allProductsApi";

function LanguageEdit() {
    const [inputval, setInputval] = useState({
        name: '',
        code: '',
        app_lang_code: ''
    });
    const params = useParams();

    const comboLangData = useGetLanguagesQuery();

    const { data } = useGetLanguageByIdQuery(params.id);

    useEffect(() => {
        const storeData = { ...data }
        setInputval(storeData)
    }, [data]);

    const [editLanguage, response] = useEditLanguageMutation();

    const onChangeHandler = (e) => {
        const inpName = e.target.name;
        const inpval = e.target.value;
        const clonedObj = { ...inputval };
        clonedObj[inpName] = inpval;
        setInputval(clonedObj)
    };
    const submitEditBrandData = (e) => {
        e.preventDefault();
        editLanguage({ id: params.id, data: inputval })
        console.log(inputval)
        document.getElementById("create-course-form").reset();
    };

    const toastSuccessMessage = () => {
        toast.success("Language Edited Successfully", {
            position: "top-center"
        })
    };

    if (response.isSuccess === true) {
        toastSuccessMessage()
    };
    if (response.isError === true) {
        alert('!Language not edited')
    };

    return (
        <>
            <div className="aiz-main-content">
                <div className="px-15px px-lg-25px">
                    <div className="aiz-titlebar text-left mt-2 mb-3">
                        <h5 className="mb-0 h6">Language Information</h5>
                    </div>
                    <div className="row">
                        <div className="col-lg-6 mx-auto">
                            <div className="card">
                                <div className="card-header">
                                    <h5 className="mb-0 h6">update Language Info</h5>
                                </div>
                                <div className="card-body p-0">
                                    <form className="p-4" id="create-course-form" onSubmit={submitEditBrandData}>
                                        <input type="hidden" name="_token" defaultValue="OlhMycqXuIcjZ16H1v7gFG49f12SloCusJTFh8sM" />
                                        <div className="form-group row">
                                            <div className="col-lg-3">
                                                <label className="control-label">Name</label>
                                            </div>
                                            <div className="col-lg-9">
                                                <input type="text" className="form-control" name="name" placeholder="Name" required fdprocessedid="g899eg" value={inputval?.name} onChange={onChangeHandler} />
                                            </div>
                                        </div>
                                        <div className="form-group row">
                                            <div className="col-lg-3">
                                                <label className="control-label">Code</label>
                                            </div>
                                            <div className="col-lg-9">
                                                <div >
                                                    <select className="form-select" name="code" aria-label="Default select example" onChange={onChangeHandler}>
                                                        {comboLangData.data && comboLangData.data.map((item) => {
                                                            return <option value={item.code} key={item._id}>{item.code}</option>
                                                        })}
                                                    </select>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="form-group row">
                                            <div className="col-lg-3">
                                                <label className="control-label">Flutter App Lang Code</label>
                                                <code><a target="_blank" href="https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes">Links for ISO 639-1 codes</a></code>
                                            </div>
                                            <div className="col-lg-9">
                                                <input type="text" value={inputval?.app_lang_code} className="form-control" name="app_lang_code" placeholder="Put ISO 639-1 code for your language" required fdprocessedid="mhu1n7" onChange={onChangeHandler} />
                                            </div>
                                        </div>
                                        <div className="form-group mb-0 text-right">
                                            <button type="submit" className="btn btn-sm btn-primary" fdprocessedid="nrx32">Save</button>
                                        </div>
                                    </form>
                                </div>
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
export default LanguageEdit;
