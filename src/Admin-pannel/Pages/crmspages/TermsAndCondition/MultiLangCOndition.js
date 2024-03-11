

import { useState } from "react"

function MultiLangCOndition({ data, item, i, addNewAttributeData, onChangeHandler, setValue }) {
    return <div className="card">
        <div className="card-header">
            <h5 className="mb-0 h6">Add Terms Condition ({item.lable})</h5>
        </div>
        <div className="card-body">
            <form id="create-course-form" >
                {/* <div className="form-group mb-3">
                    <label htmlFor="name">Title</label>
                    <input type="text" placeholder="Title" name="title" value={item.title} onChange={(e) => { onChangeHandler(e, item.language_id) }} className="form-control" required />
                </div> */}


                <div className="form-group mb-3">
                    <label htmlFor="name">Meta Title</label>
                    <input type="text" name='meta_title' value={item.meta_title} className="form-control" placeholder="Meta Title" onChange={(e) => { onChangeHandler(e, item.language_id) }} required />
                </div>
                <div className="form-group mb-3">
                    <label htmlFor="name">Description</label>
                    <textarea name="description" rows={5} value={item.description} className="form-control" onChange={(e) => { onChangeHandler(e, item.language_id) }} required />
                </div>
                <div className="form-group mb-3">
                    <label htmlFor="name">Meta description</label>
                    <textarea name="meta_description" rows={5} value={item.meta_description} className="form-control" onChange={(e) => { onChangeHandler(e, item.language_id) }} required />
                </div>
                <div className="form-group mb-3 text-right">
                    {data.length == i + 1 ? <div className="form-group mb-3 text-right">
                        <button type="submit" className="btn btn-primary" fdprocessedid="uzw7ye" onClick={() => { setValue(i - 1) }}>Prev</button>
                        <button type="submit" className="btn btn-primary" fdprocessedid="uzw7ye" onClick={addNewAttributeData}>Save</button>
                    </div>
                        :
                        <div className="form-group mb-3 text-right">
                            {i !== 0 && <button type="submit" className="btn btn-primary" fdprocessedid="uzw7ye" onClick={() => { setValue(i - 1) }}>Prev</button>}
                            <button type="submit" className="btn btn-primary" fdprocessedid="uzw7ye" onClick={() => { setValue(i + 1) }}>Next</button>
                        </div>

                    }
                </div>
            </form>
        </div>
    </div>
}
export default MultiLangCOndition