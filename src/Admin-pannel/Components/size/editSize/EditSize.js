import React, { useState } from 'react'

function EditSize() {
    const [inputval, setInputval] = useState({
        size: '',
        size_code: '',
    });

    const onChangeHandler = (e) => {
        const inpName = e.target.name;
        const inpval = e.target.value;
        const clonedObj = { ...inputval };
        clonedObj[inpName] = inpval;
        // setInputval(clonedObj)
    };

    const submitEditSizeData = () => {
        console.log(inputval)
        document.getElementById("create-course-form").reset();
    }


    return (
        <>
            <div className="aiz-main-content">
                <div className="px-15px px-lg-25px">
                    <div className="aiz-titlebar text-left mt-2 mb-3">
                        <h5 className="mb-0 h6">Size Information</h5>
                    </div>
                    <div className="col-lg-8 mx-auto">
                        <div className="card">
                            <div className="card-body p-0">

                                <form className="p-4" id="create-course-form">
                                    <input name="_method" type="hidden" defaultValue="POST" />
                                    <input type="hidden" name="_token" defaultValue="OYVyMvB5l5XFeIwEEQ5zsdWWv6zkLTpL7gdSZoZV" />
                                    <div className="form-group row">
                                        <label className="col-sm-3 col-from-label" htmlFor="name">
                                            Size
                                        </label>
                                        <div className="col-sm-9">
                                            <input type="text" placeholder="size" id="name" name="size" className="form-control" required fdprocessedid="k7r6hm" onChange={onChangeHandler} />
                                        </div>
                                    </div>

                                    <div className="form-group row">
                                        <label className="col-sm-3 col-from-label" htmlFor="code">
                                            Size Code
                                        </label>
                                        <div className="col-sm-9">
                                            <input type="text" placeholder="Size Code" id="code" name="size_code" className="form-control" required fdprocessedid="pbqdsr" onChange={onChangeHandler} />
                                        </div>
                                    </div>

                                    <div className="form-group mb-0 text-right">
                                        <button type="button" className="btn btn-primary" onClick={submitEditSizeData}>Save</button>
                                    </div>
                                </form>

                            </div>
                        </div>
                    </div>
                </div>
                <div className="bg-white text-center py-3 px-15px px-lg-25px mt-auto">
                    {/*p class="mb-0">&copy;  v6.3.3</p*/}
                </div>
            </div>

        </>
    )
}

export default EditSize