import React from 'react'

function ShippingConfiguration() {
    return (
        <>
            <div className="aiz-main-content">
                <div className="px-15px px-lg-25px">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="card">
                                <div className="card-header">
                                    <h5 className="mb-0 h6">Select Shipping Method</h5>
                                </div>
                                <div className="card-body">
                                    <form action="https://mmslfashions.in/admin/shipping_configuration/update" method="POST" encType="multipart/form-data">
                                        <input type="hidden" name="_token" defaultValue="yG9jLpRgd5N8rU1r6JOumPp4iFe6UqKm7Oj0VLfC" />                    <input type="hidden" name="type" defaultValue="shipping_type" />
                                        <div className="radio mar-btm">
                                            <input id="product-shipping" className="magic-radio" type="radio" name="shipping_type" defaultValue="product_wise_shipping" />
                                            <label htmlFor="product-shipping">
                                                <span>Product Wise Shipping Cost</span>
                                                <span />
                                            </label>
                                        </div>
                                        <div className="radio mar-btm">
                                            <input id="flat-shipping" className="magic-radio" type="radio" name="shipping_type" defaultValue="flat_rate" defaultChecked />
                                            <label htmlFor="flat-shipping">Flat Rate Shipping Cost</label>
                                        </div>
                                        <div className="radio mar-btm">
                                            <input id="seller-shipping" className="magic-radio" type="radio" name="shipping_type" defaultValue="seller_wise_shipping" />
                                            <label htmlFor="seller-shipping">Seller Wise Flat Shipping Cost</label>
                                        </div>
                                        <div className="radio mar-btm">
                                            <input id="area-shipping" className="magic-radio" type="radio" name="shipping_type" defaultValue="area_wise_shipping" />
                                            <label htmlFor="area-shipping">Area Wise Flat Shipping Cost</label>
                                        </div>
                                        <div className="radio mar-btm">
                                            <input id="weight-shipping" className="magic-radio" type="radio" name="shipping_type" defaultValue="carrier_wise_shipping" />
                                            <label htmlFor="weight-shipping">
                                                Carrier Wise Shipping Cost
                                            </label>
                                        </div>
                                        <div className="form-group mb-0 text-right">
                                            <button type="submit" className="btn btn-sm btn-primary" fdprocessedid="u0ma6">Save</button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="card">
                                <div className="card-header">
                                    <h5 className="mb-0 h6">Note</h5>
                                </div>
                                <div className="card-body">
                                    <ul className="list-group">
                                        <li className="list-group-item">
                                            1. Product Wise Shipping Cost calculation: Shipping cost is calculate by addition of each product shipping cost.
                                        </li>
                                        <li className="list-group-item">
                                            2. Flat Rate Shipping Cost calculation: How many products a customer purchase, doesn't matter. Shipping cost is fixed.
                                        </li>
                                        <li className="list-group-item">
                                            3. Seller Wise Flat Shipping Cost calculation: Fixed rate for each seller. If customers purchase 2 product from two seller shipping cost is calculated by addition of each seller flat shipping cost.
                                        </li>
                                        <li className="list-group-item">
                                            4. Area Wise Flat Shipping Cost calculation: Fixed rate for each area. If customers purchase multiple products from one seller shipping cost is calculated by the customer shipping area. To configure area wise shipping cost go to <a href="https://mmslfashions.in/admin/cities">Shipping Cities</a>.
                                        </li>
                                        <li className="list-group-item">
                                            5. Carrier Based Shipping Cost calculation: Shipping cost calculate in addition with carrier. In each carrier you can set free shipping cost or can set weight range or price range shipping cost. To configure carrier based shipping cost go to <a href="https://mmslfashions.in/admin/carriers">Shipping Carriers</a>.
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="card">
                                <div className="card-header">
                                    <h5 className="mb-0 h6">Flat Rate Cost</h5>
                                </div>
                                <form action="https://mmslfashions.in/admin/shipping_configuration/update" method="POST" encType="multipart/form-data">
                                    <div className="card-body">
                                        <input type="hidden" name="_token" defaultValue="yG9jLpRgd5N8rU1r6JOumPp4iFe6UqKm7Oj0VLfC" />                  <input type="hidden" name="type" defaultValue="flat_rate_shipping_cost" />
                                        <div className="form-group">
                                            <div className="col-lg-12">
                                                <input className="form-control" type="text" name="flat_rate_shipping_cost" defaultValue={100} fdprocessedid="2ejx2d" />
                                            </div>
                                        </div>
                                        <div className="form-group mb-0 text-right">
                                            <button type="submit" className="btn btn-sm btn-primary" fdprocessedid="55ulmo">Save</button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="card">
                                <div className="card-header">
                                    <h5 className="mb-0 h6">Note</h5>
                                </div>
                                <div className="card-body">
                                    <ul className="list-group">
                                        <li className="list-group-item">
                                            1. Flat rate shipping cost is applicable if Flat rate shipping is enabled.
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="card">
                                <div className="card-header">
                                    <h5 className="mb-0 h6">Shipping Cost for Admin Products</h5>
                                </div>
                                <form action="https://mmslfashions.in/admin/shipping_configuration/update" method="POST" encType="multipart/form-data">
                                    <div className="card-body">
                                        <input type="hidden" name="_token" defaultValue="yG9jLpRgd5N8rU1r6JOumPp4iFe6UqKm7Oj0VLfC" />                  <input type="hidden" name="type" defaultValue="shipping_cost_admin" />
                                        <div className="form-group">
                                            <div className="col-lg-12">
                                                <input className="form-control" type="text" name="shipping_cost_admin" defaultValue={50} fdprocessedid="48lxq9" />
                                            </div>
                                        </div>
                                        <div className="form-group mb-0 text-right">
                                            <button type="submit" className="btn btn-sm btn-primary" fdprocessedid="foe2xd">Save</button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="card">
                                <div className="card-header">
                                    <h5 className="mb-0 h6">Note</h5>
                                </div>
                                <div className="card-body">
                                    <ul className="list-group">
                                        <li className="list-group-item">
                                            1. Shipping cost for admin is applicable if Seller wise shipping cost is enabled.
                                        </li>
                                    </ul>
                                </div>
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

export default ShippingConfiguration