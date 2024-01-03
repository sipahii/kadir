import { useState } from "react";

function ProductsVedios() {
    const [prodvediosVal, setProdvediosVal] = useState({ vedioProvider: '', videoLink: '' });

    const onChangeHandler = (e) => {
        const inpName = e.target.name;
        const inpval = e.target.value;
        const clonedObj = { ...prodvediosVal };
        clonedObj[inpName] = inpval;
        // setProdvediosVal(clonedObj)
    };

    const getVedioData = () => {
        // console.log(prodvediosVal)
    }


    return (
        <>
            <div className="card">
                <div className="card-header">
                    <h5 className="mb-0 h6">Product Videos</h5>
                </div>
                <div className="card-body">

                    <div className="form-group row">
                        <label className="col-md-3 col-from-label">Video Provider</label>
                        <div className="col-md-8">
                            <select className="form-select" aria-label="Default select example" name="vedioProvider" onChange={onChangeHandler}>
                                <option value="youtube">Youtube</option>
                                <option value="dailymotion">Dailymotion</option>
                                <option value="vimeo">Vimeo</option>
                            </select>

                        </div>
                    </div>

                    <div className="form-group row">
                        <label className="col-md-3 col-from-label">Video Link</label>
                        <div className="col-md-8">
                            <input type="text" className="form-control" name="videoLink" placeholder="Video Link" fdprocessedid="2pggse" onChange={onChangeHandler} />
                            <small className="text-muted">Use proper link without extra parameter. Don't use short share link/embeded iframe code.</small>
                        </div>
                    </div>
                    <button type="button" onClick={getVedioData}>Click</button>
                </div>
            </div>
        </>
    )
}
export default ProductsVedios;