import axios from "axios";
import { useEffect, useState } from "react"

function MultiLangFormBlogCateg({ data, item, i, params, sendData, onChangeHandler, setValue }) {

    const token = window.localStorage.getItem('token')

    return <div className="card">
        <div className="card-header">
            <h5 className="mb-0 h6">{params?.uid ? 'Update' : 'Add'} Blog Information ({item?.lable})</h5>
        </div>
        <div className="card-body">

            <form id="create-course-form" className="form-horizontal">
                <div className="form-group row">
                    <label className="col-md-3 col-form-label">
                        Name
                        <span className="text-danger">*</span>
                    </label>
                    <div className="col-md-9">
                        <input type="text" placeholder="Name" id="title" name="name" value={item?.name} className="form-control" required onChange={(e) => { onChangeHandler(e, item.language_id) }} />
                    </div>
                </div>

                {i == 0 && <div className="form-group row">
                    <label className="col-md-3 col-form-label">Slug
                        <span className="text-danger">*</span></label>
                    <div className="col-md-9">
                        <input type="text" placeholder="Slug" name="slug" value={item?.slug} id="slug" className="form-control" required onChange={(e) => { onChangeHandler(e, item.language_id) }} />
                    </div>
                </div>}
                <div className="col-lg-12 mt-3" style={{ display: 'flex', justifyContent: 'end' }}>
                    {data.length == i + 1 ? <div className="form-group text-right mt-4">
                        <button type="button" className="btn btn-primary" fdprocessedid="uzw7ye" onClick={sendData}>Save</button>
                        <button className="btn btn-danger ms-2">Cancel</button>
                    </div>
                        :
                        <div className="form-group text-right mt-4">
                            {i !== 0 && <button type="submit" className="btn btn-primary" fdprocessedid="uzw7ye" onClick={() => { setValue(i - 1) }}>Prev</button>}
                            <button type="submit" className="btn btn-primary" fdprocessedid="uzw7ye" onClick={() => { setValue(i + 1) }}>Next</button>
                        </div>
                    }
                </div>
            </form>
        </div>
    </div>
}
export default MultiLangFormBlogCateg