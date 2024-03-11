import { useState } from "react";

function ProductsPriceStock() {
    const [prodPriceStockVal, setProdPriceStockVal] = useState({ unitPrice: '', dateRange: '', discount: '', earnPoint: '', currentStock: '', sku: '', externalLink: '', externalLinkBtn: "", flat: '' });

    const onChangeHandler = (e) => {
        const inpName = e.target.name;
        const inpVal = e.target.value;
        const clonedObj = { ...prodPriceStockVal };
        clonedObj[inpName] = inpVal;
        // setProdPriceStockVal(clonedObj)
    };
    const getData = () => {
        // console.log(prodPriceStockVal)
    }

    return (
        <>
            <div className="card mt-2 rest-part">
                <div className="card-header">
                    <h4 className="mb-0">Product price &amp; stock</h4>
                </div>
                <div className="card-body">
                    <div className="row align-items-end">
                        <div className="col-md-6 form-group">
                            <label className="title-color">Unit price</label>
                            <input type="number" min={0} step="0.01" placeholder="Unit price" name="unit_price" className="form-control" defaultValue={5000} required fdprocessedid="0v4oa" />
                        </div>
                        <div className="col-md-6 form-group">
                            <label className="title-color">Purchese price</label>
                            <input type="number" min={0} step="0.01" placeholder="Purchase price" name="purchase_price" className="form-control" defaultValue={4000} required fdprocessedid="6w85f" />
                        </div>
                        <div className="col-md-4 form-group">
                            <label className="title-color">Tax</label>
                            <label className="text-info title-color">Percent ( % )</label>
                            <input type="number" min={0} defaultValue={18} step="0.01" placeholder="Tax" name="tax" className="form-control" required fdprocessedid="s1cjk5" />
                            <input name="tax_type" defaultValue="percent" className="d-none" />
                        </div>
                        <div className="col-md-4 form-group">
                            <label className="title-color">Discount</label>
                            <input type="number" min={0} defaultValue={0} step="0.01" placeholder="Discount" name="discount" className="form-control" required fdprocessedid="yxlxe6" />
                        </div>
                        <div className="col-md-4 form-group">
                            <label className="title-color">Discount type </label>
                            <select className="js-example-basic-multiple js-states js-example-responsive demo-select2 w-100 select2-hidden-accessible" name="discount_type" data-select2-id={20} tabIndex={-1} aria-hidden="true">
                                <option value="percent">Percent</option>
                                <option value="flat" selected data-select2-id={22}>Flat</option>
                            </select><span className="select2 select2-container select2-container--default" dir="ltr" data-select2-id={21} style={{ width: '363.862px' }}><span className="selection"><span className="select2-selection select2-selection--single" role="combobox" aria-haspopup="true" aria-expanded="false" tabIndex={0} aria-disabled="false" aria-labelledby="select2-discount_type-51-container"><span className="select2-selection__rendered" id="select2-discount_type-51-container" role="textbox" aria-readonly="true" title="Flat">Flat</span><span className="select2-selection__arrow" role="presentation"><b role="presentation" /></span></span></span><span className="dropdown-wrapper" aria-hidden="true" /></span>
                        </div>
                        <div className="col-12 sku_combination table-responsive form-group" id="sku_combination"><table className="table table-bordered physical_product_show">
                            <thead>
                                <tr>
                                    <td className="text-center">
                                        <label htmlFor className="control-label">Variant</label>
                                    </td>
                                    <td className="text-center">
                                        <label htmlFor className="control-label">Variant Price</label>
                                    </td>
                                    <td className="text-center">
                                        <label htmlFor className="control-label">SKU</label>
                                    </td>
                                    <td className="text-center">
                                        <label htmlFor className="control-label">Quantity</label>
                                    </td>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>
                                        <label htmlFor className="control-label">10Ml</label>
                                    </td>
                                    <td>
                                        <input type="number" name="price_10Ml" defaultValue={5000} min={0} step="0.01" className="form-control" required />
                                    </td>
                                    <td>
                                        <input type="text" name="sku_10Ml" defaultValue="MTP-10Ml" className="form-control" required />
                                    </td>
                                    <td>
                                        <input type="number" name="qty_10Ml" defaultValue={1} min={1} max={1000000} step={1} className="form-control" required />
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                        </div>
                        <div className="col-md-3 form-group physical_product_show" id="quantity">
                            <label className="title-color">Total Quantity</label>
                            <input type="number" min={0} defaultValue={27} step={1} placeholder="Quantity" name="current_stock" className="form-control" required fdprocessedid="gny5jm" readOnly="readonly" />
                        </div>
                        <div className="col-md-3 form-group" id="minimum_order_qty">
                            <label className="title-color">Minimum order quantity</label>
                            <input type="number" min={1} defaultValue={1} step={1} placeholder="Minimum order quantity" name="minimum_order_qty" className="form-control" required fdprocessedid="wabmv" />
                        </div>
                        <div className="col-md-3 form-group physical_product_show" id="shipping_cost">
                            <label className="title-color">Shipping cost </label>
                            <input type="number" min={0} defaultValue={0} step={1} placeholder="Shipping cost" name="shipping_cost" className="form-control" required fdprocessedid="pvn15" />
                        </div>
                        <div className="col-md-3 form-group physical_product_show" id="shipping_cost">
                            <label className="title-color">Shipping cost multiply with quantity </label>
                            <label className="switcher title-color">
                                <input className="switcher_input" type="checkbox" name="multiplyQTY" id />
                                <span className="switcher_control" />
                            </label>
                        </div>
                    </div>
                </div>
            </div>


        </>
    )
}
export default ProductsPriceStock;