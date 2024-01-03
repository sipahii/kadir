import { BsFillArrowRightCircleFill } from "react-icons/bs";
import { Link, useNavigate } from "react-router-dom";

import assetIcon from "../../../assets/img/dashboard-iconic-pic/addnew.png"
import assetIcon0 from "../../../assets/img/dashboard-iconic-pic/unAssigned.png"
import assetIcon1 from "../../../assets/img/dashboard-iconic-pic/request150x150.png"
import assetIcon2 from "../../../assets/img/dashboard-iconic-pic/alert150x150.png"
import assetIcon3 from "../../../assets/img/dashboard-iconic-pic/Employee_80x.png"
import assetIcon4 from "../../../assets/img/dashboard-iconic-pic/images.jpg"

import footerImg from '../../../assets/img/dashbFooterImg/footer-0.png'
import footerImg0 from '../../../assets/img/dashbFooterImg/footer1.png'
import footerImg1 from '../../../assets/img/dashbFooterImg/footer3.png'
import footerImg2 from '../../../assets/img/dashbFooterImg/footer4.png'
import footerImg3 from '../../../assets/img/dashbFooterImg/footer5.png'
import footerImg4 from '../../../assets/img/dashbFooterImg/footer6.png'
import { useEffect, useState } from "react";
import axios from "axios";
import { base_Url_Assets } from "../../../server";

function AssetsDashboardAdminComp() {
  const [totalAsets, setTotalAsets] = useState(null)
  const [assignedAsset, setAssignedAsset] = useState(null)
  const [totalAssignedAsset, setTotalAssignedAsset] = useState(null)
  const [unassignAsset, setUnassignAsset] = useState(null)
  const [totalEmloye, setTotalEmloye] = useState(null)
  const [userCount, setUserCount] = useState(null)
  const [userActive, setUserActive] = useState(null)
  const [inActiveUser, setInActiveUser] = useState(null)
  const [latest, setLatest] = useState(null)
  const [register, setRegister] = useState(null)
  const [topAssetsList, setTopAssetsList] = useState(null)
  const [topPickUpPoint, setTopPickUpPoint] = useState(null)
  const [customer, setCustomer] = useState(null)
  const [topCategory, setTopCategory] = useState(null)
  // console.log('topAssetsList',topAssetsList)


  const navigate = useNavigate()

  const changeRoute = (str) => {
    if (str === 'customer-list') {
      navigate('customer-list')
    }
    if (str === 'all_orders') {
      navigate('all_orders')
    }
    if (str === 'categories') {
      navigate('categories')
    }
    if (str === 'products/all') {
      navigate('products/all')
    }
    if (str === 'seller') {
      navigate('seller')
    }
    if (str === 'pick_up_points') {
      navigate('pick_up_points')
    }
    if (
      str === 'newasset-category'
    ) {
      navigate('newasset-category')
    }
  }

  useEffect(() => {
    getApi()
    getTopList()
  }, [])

  const getApi = async () => {
    const res = await axios.get(`${base_Url_Assets}assetReport/DashBoard`)
    // console.log('res....',res.data.latestAsset)
    setLatest(res.data.latestAsset)
    setRegister(res.data.user)
    setTotalAsets(res.data.Asset_count)
    setAssignedAsset(res.data.assignedAsset)
    setUnassignAsset(res.data.unassignAsset)
    setTotalAssignedAsset(res.data.totalAssignedAsset)
    setTotalEmloye(res.data.employeeCount)
    setUserCount(res.data.userCount)
    setUserActive(res.data.userCount)
    setInActiveUser(res.data.InActiveUser)
    setTopCategory(res.data.topCategory)
  }

  const getTopList = async () => {
    const res = await axios.get(`${base_Url_Assets}assetReport/dashboardreport`)
    setTopAssetsList(res.data.topAssetList)
    setTopPickUpPoint(res.data.topPickupPoint)
    setCustomer(res.data.topCustomer)
  }



  return (
    <>
      <div className="aiz-main-content">
        <div className="px-15px px-lg-25px">

          <div className="row gutters-10">
            <div className="col-lg-12">
              <div className="row gutters-10">
                <div className="col-md-3 col-sm-6 col-xs-12">
                  <div style={{ width: "100%", cursor: "pointer" }} onClick={() => changeRoute('newasset-category')} className="bg-grad-2 text-white rounded-lg mb-4 overflow-hidden d-flex">
                    <div className="p-3">
                      <div className="">
                        <img src={assetIcon} alt="k" />
                      </div>
                    </div>
                    <div className="px-3 pt-3">
                      <div className="opacity-50">
                        <span className="fs-12 d-block">Add</span>
                        New Asset
                      </div>
                      <div className="h3 fw-700 mb-3">
                        +
                      </div>
                    </div>

                  </div>
                </div>
                <div className="col-md-3 col-sm-6 col-xs-12 ">
                  <div style={{ width: "100%", cursor: "pointer" }} /* onClick={() => changeRoute('all_orders')} */ className="bg-grad-3 text-white rounded-lg mb-4 overflow-hidden  d-flex">
                    <div className="p-3">
                      <div className="">
                        <img src={assetIcon1} alt="k" />
                      </div>
                    </div>
                    <div className="px-3 pt-3 ">
                      <div className="opacity-50">
                        <span className="fs-12 d-block">Total</span>
                        Assets                      </div>
                      <div className="h3 fw-700 mb-3">{totalAsets}</div>
                    </div>

                  </div>
                </div>
                <div className="col-md-3 col-sm-6 col-xs-12 ">
                  <div style={{ width: "100%", cursor: "pointer" }} /* onClick={() => changeRoute('all_orders')} */ className="bg-grad-3 text-white rounded-lg mb-4 overflow-hidden  d-flex">
                    <div className="p-3">
                      <div className="">
                        <img src={assetIcon1} alt="k" />
                      </div>
                    </div>
                    <div className="px-3 pt-3 ">
                      <div className="opacity-50">
                        <span className="fs-12 d-block">Total</span>
                        Request
                      </div>
                      <div className="h3 fw-700 mb-3">32</div>
                    </div>

                  </div>
                </div>
                <div className="col-md-3 col-sm-6 col-xs-12">
                  <div style={{ width: "100%", cursor: "pointer" }} /* onClick={() => changeRoute('customer-list')} */ className="bg-grad-2 text-white rounded-lg mb-4 overflow-hidden d-flex">
                    <div className="p-3">
                      <div className="">
                        <img src={assetIcon3} alt="k" />
                      </div>
                    </div>
                    <div className="px-3 pt-3">
                      <div className="opacity-50">
                        <span className="fs-12 d-block">Total</span>
                        Employee
                      </div>
                      <div className="h3 fw-700 mb-3">
                        {/* {users?.count} */}
                        {totalEmloye}
                      </div>
                    </div>

                  </div>
                </div>
                {/* {isLoginPickup === 'false' && */}<div className="col-md-3 col-sm-6 col-xs-12">
                  <div className="bg-grad-1 text-white rounded-lg mb-4 overflow-hidden d-flex ">
                    <div className="p-3">
                      <div className="">
                        <img src={assetIcon2} alt="k" />
                      </div>
                    </div>
                    <div className="px-3 pt-3">
                      <div className="opacity-50">
                        <span className="fs-12 d-block">Asset</span>
                        Issue
                      </div>
                      <div className="h3 fw-700 mb-3">
                        {/* {coupens?.count} */}
                        42
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-3 col-sm-6 col-xs-12">
                  <div style={{ width: "100%", cursor: "pointer" }} /* onClick={() => changeRoute('categories')} */ className="bg-grad-1 text-white rounded-lg mb-4 overflow-hidden d-flex">
                    <div className="p-3">
                      <div className="">
                        <img src={assetIcon4} alt="k" />
                      </div>
                    </div>
                    <div className="px-3 pt-3">
                      <div className="opacity-50">
                        <span className="fs-12 d-block">Assigned </span>
                        Asset
                      </div>
                      <div className="h3 fw-700 mb-3">
                        {/* {category?.count} */}
                        {totalAssignedAsset}
                      </div>
                    </div>

                  </div>
                </div>

                {/* {isLoginPickup === 'false' &&  */}<div className="col-md-3 col-sm-6 col-xs-12">
                  <div style={{ width: "100%", cursor: "pointer" }} /* onClick={() => changeRoute('products/all')} */ className="bg-grad-4 text-white rounded-lg mb-4 overflow-hidden d-flex">
                    <div className="p-3">
                      <div className="">
                        <img src={assetIcon0} alt="k" />
                      </div>
                    </div>
                    <div className="px-3 pt-3">
                      <div className="opacity-50">
                        <span className="fs-12 d-block">Un Assigned</span>
                        Asset
                      </div>
                      <div className="h3 fw-700 mb-3">
                        {/* {product?.count} */}
                        {unassignAsset}
                      </div>
                    </div>

                  </div>

                </div>
                <div className="col-md-3 col-sm-6 col-xs-12">
                  <div style={{ width: "100%", cursor: "pointer" }} /* onClick={() => changeRoute('categories')} */ className="bg-grad-1 text-white rounded-lg mb-4 overflow-hidden d-flex">
                    <div className="p-3">
                      <div className="">
                        <img src={assetIcon4} alt="k" />
                      </div>
                    </div>
                    <div className="px-3 pt-3">
                      <div className="opacity-50">
                        <span className="fs-12 d-block">Assigned to</span>
                        Employee
                      </div>
                      <div className="h3 fw-700 mb-3">
                        {assignedAsset?.staff}
                      </div>
                    </div>

                  </div>
                </div>
                <div className="col-md-3 col-sm-6 col-xs-12">
                  <div style={{ width: "100%", cursor: "pointer" }} /* onClick={() => changeRoute('categories')} */ className="bg-grad-1 text-white rounded-lg mb-4 overflow-hidden d-flex">
                    <div className="p-3">
                      <div className="">
                        <img src={assetIcon4} alt="k" />
                      </div>
                    </div>
                    <div className="px-3 pt-3">
                      <div className="opacity-50">
                        <span className="fs-12 d-block">Assigned to</span>
                        Suplier
                      </div>
                      <div className="h3 fw-700 mb-3">
                        {/* {category?.count} */}
                        {assignedAsset?.seller}
                      </div>
                    </div>

                  </div>
                </div>
                <div className="col-md-3 col-sm-6 col-xs-12">
                  <div style={{ width: "100%", cursor: "pointer" }} /* onClick={() => changeRoute('categories')} */ className="bg-grad-1 text-white rounded-lg mb-4 overflow-hidden d-flex">
                    <div className="p-3">
                      <div className="">
                        <img src={assetIcon4} alt="k" />
                      </div>
                    </div>
                    <div className="px-3 pt-3">
                      <div className="opacity-50">
                        <span className="fs-12 d-block">Assigned to</span>
                        Customer
                      </div>
                      <div className="h3 fw-700 mb-3">
                        {/* {category?.count} */}
                        {assignedAsset?.user}
                      </div>
                    </div>

                  </div>
                </div>
                {/* {isLoginPickup === 'false' && <div className="col-md-3 col-sm-6 col-xs-12">
                  <div className="bg-grad-1 text-white rounded-lg mb-4 overflow-hidden">
                    <div className="px-3 pt-3">
                      <div className="opacity-50">
                        <span className="fs-12 d-block">Total Active</span>
                        Coupons
                      </div>
                      <div className="h3 fw-700 mb-3">{activeCoupen?.count}</div>
                    </div>
                    
                  </div>
                </div>} */}

                {/* <div className="col-3">
                  <div className="bg-grad-1 text-white rounded-lg mb-4 overflow-hidden">
                    <div className="px-3 pt-3">
                      <div className="opacity-50">
                        <span className="fs-12 d-block">Total</span>
                        Rejected Order
                      </div>
                      <div className="h3 fw-700 mb-3">{Rejected?.count ? Rejected?.count : 0}</div>
                    </div>
                    
                  </div>
                </div> */}




              </div>
            </div>


            <div className="col-lg-6">
              <div className="row gutters-10">

                {/* <div className="col-4">
                  <div style={{ width: "100%", cursor: "pointer" }} onClick={() => changeRoute('pick_up_points')} className="bg-grad-3 text-white rounded-lg mb-4 overflow-hidden">
                    <div className="px-3 pt-3">
                      <div className="opacity-50">
                        <span className="fs-12 d-block">Total</span>
                        pickuppoints
                      </div>
                      <div className="h3 fw-700 mb-3">{pickuppoints?.count}</div>
                    </div>
                    
                  </div>
                </div> */}



                {/* <div className="col-4">
                  <div className="bg-grad-1 text-white rounded-lg mb-4 overflow-hidden">
                    <div className="px-3 pt-3">
                      <div className="opacity-50">
                        <span className="fs-12 d-block">Total</span>
                        Cancelled Order
                      </div>
                      <div className="h3 fw-700 mb-3">{Cancel?.count}</div>
                    </div>
                    
                  </div>
                </div> */}
                {/* <div className="col-4">
                  <div className="bg-grad-1 text-white rounded-lg mb-4 overflow-hidden">
                    <div className="px-3 pt-3">
                      <div className="opacity-50">
                        <span className="fs-12 d-block">Total</span>
                        Pending Order
                      </div>
                      <div className="h3 fw-700 mb-3">{Pending?.count}</div>
                    </div>
                    
                  </div>
                </div> */}



                {/* <div className="col-4">
                  <div className="bg-grad-1 text-white rounded-lg mb-4 overflow-hidden">
                    <div className="px-3 pt-3">
                      <div className="opacity-50">
                        <span className="fs-12 d-block">Total</span>
                        Shipped Order
                      </div>
                      <div className="h3 fw-700 mb-3">99dd</div>
                    </div>
                    
                  </div>
                </div> */}

                {/* <div className="col-4">
                  <div className="bg-grad-1 text-white rounded-lg mb-4 overflow-hidden">
                    <div className="px-3 pt-3">
                      <div className="opacity-50">
                        <span className="fs-12 d-block">Total</span>
                        Delivered Order
                      </div>
                      <div className="h3 fw-700 mb-3">{delivered?.count}</div>
                    </div>
                    
                  </div>
                </div> */}

                {/* 
                <div className="col-4">
                  <div className="bg-grad-4 text-white rounded-lg mb-4 overflow-hidden">
                    <div className="px-3 pt-3">
                      <div className="opacity-50">
                        <span className="fs-12 d-block">Total</span>
                        Product
                      </div>
                      <div className="h3 fw-700 mb-3">{product?.count}</div>
                    </div>
                    
                  </div>
                </div> */}


              </div>
            </div>

          </div>

          <div className="card">
            <div className="card-header">
              <h6 className="mb-0">Top Asset List</h6>
            </div>
            <div className="card-body">
              <div className="aiz-carousel gutters-10 half-outside-arrow slick-initialized slick-slider" data-items={6} data-xl-items={5} data-lg-items={4} data-md-items={3} data-sm-items={2} data-arrows="true">
                <div className="slick-list draggable">
                  <div className="slick-track" style={{ opacity: 1, width: 2352, transform: 'translate3d(0px, 0px, 0px)' }}>
                    {topAssetsList && topAssetsList?.map((item) => {
                      return <div className="slick-slide slick-current slick-active" data-slick-index={0} aria-hidden="false" style={{ width: 196 }} key={item._id}>
                        <div>
                          <div className="carousel-box" style={{ width: '100%', display: 'inline-block' }}>
                            <div className="aiz-card-box border border-light rounded shadow-sm hov-shadow-md mb-2 has-transition bg-white">
                              <div className="position-relative">
                                <Link to="#" className="d-block" tabIndex={0}>
                                  <img className="img-fit mx-auto h-210px lazyloaded" src={item?.image} data-src="" alt="ACETA" />
                                </Link>
                              </div>
                              <div className="p-md-3 p-2 text-left">
                                <div className="fs-15">
                                  <span className="fw-700 text-primary">Name:{item?.name}</span>
                                </div>
                                <div className="fs-15">
                                  <span className="fw-700 text-primary">Service Tag:{item?.serviceTag}</span>
                                </div>
                                <div className="rating rating-sm mt-1">
                                  <i className="las la-star" /><i className="las la-star" /><i className="las la-star" /><i className="las la-star" /><i className="las la-star" />
                                </div>
                                {/* <h3 className="fw-600 fs-13 text-truncate-2 lh-1-4 mb-0">
                      <Link className="d-block text-reset" tabIndex={0}>ACETA</Link>
                    </h3> */}
                              </div>
                            </div>
                          </div></div></div>
                    })}
                  </div></div></div>
            </div>
          </div>

          <div className="card">
            <div className="card-header">
              <h6 className="mb-0">Top Top Category</h6>
            </div>
            <div className="card-body">
              <div className="aiz-carousel gutters-10 half-outside-arrow slick-initialized slick-slider" data-items={6} data-xl-items={5} data-lg-items={4} data-md-items={3} data-sm-items={2} data-arrows="true">
                <div className="slick-list draggable">
                  <div className="slick-track" style={{ opacity: 1, width: 2352, transform: 'translate3d(0px, 0px, 0px)' }}>
                    {topPickUpPoint && topPickUpPoint?.map((item) => {
                      return <div className="slick-slide slick-current slick-active" data-slick-index={0} aria-hidden="false" style={{ width: 196 }} key={item?._id}>
                        <div>
                          <div className="carousel-box" style={{ width: '100%', display: 'inline-block' }}>
                            <div className="aiz-card-box border border-light rounded shadow-sm hov-shadow-md mb-2 has-transition bg-white">
                              <div className="p-md-3 p-2 text-left">
                                {/* <div className="fs-15">
                                <span className="fw-700 text-primary">Revenue : 95</span>
                              </div> */}
                                <h3 className="fw-600 fs-13 text-truncate-2 lh-1-4 mb-0">
                                  <a className="d-block text-reset" tabIndex={0}>Name : {item?.subCategory?.name}</a>
                                  <a className="d-block text-reset" tabIndex={0}>Description : {item?.subCategory?.description}</a>
                                </h3>
                                <h3 className="fw-600 fs-13 text-truncate-2 lh-1-4 mb-0 d-block">
                                  <div className="d-block text-reset" tabIndex={0}>Created At : {item?.subCategory?.createdAt}</div>
                                  <div className="d-block text-reset" tabIndex={0}>Address : {item?.pickupPoint?.address}</div>
                                </h3>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                    })}
                  </div></div></div>
            </div>
          </div>

          <div className="card">
            <div className="card-header">
              <h6 className="mb-0">Top Customer</h6>
            </div>
            <div className="card-body">
              <div className="aiz-carousel gutters-10 half-outside-arrow slick-initialized slick-slider" data-items={6} data-xl-items={5} data-lg-items={4} data-md-items={3} data-sm-items={2} data-arrows="true">
                <div className="slick-list draggable">
                  <div className="slick-track" style={{ opacity: 1, width: 2352, transform: 'translate3d(0px, 0px, 0px)' }}>
                    {customer && customer?.map((item) => {
                      return <div className="slick-slide slick-current slick-active" data-slick-index={0} aria-hidden="false" style={{ width: 196 }} key={item._id}>
                        <div>
                          <div className="carousel-box" style={{ width: '100%', display: 'inline-block' }}>
                            <div className="aiz-card-box border border-light rounded shadow-sm hov-shadow-md mb-2 has-transition bg-white">
                              <div className="position-relative">
                                <Link to="#" className="d-block" tabIndex={0}>
                                  <img className="img-fit mx-auto h-210px lazyloaded" src={item?.image} data-src="" alt="ACETA" />
                                </Link>
                              </div>
                              <div className="p-md-3 p-2 text-left">
                                <div className="fs-15">
                                  <span className="fw-700 text-primary">First Name:{item?.firstname}</span>
                                </div>
                                <div className="fs-15">
                                  <span className="fw-700 text-primary">Last Name:{item?.lastname}</span>
                                </div>
                                <div className="rating rating-sm mt-1">
                                  <i className="las la-star" /><i className="las la-star" /><i className="las la-star" /><i className="las la-star" /><i className="las la-star" />
                                </div>
                                {/* <h3 className="fw-600 fs-13 text-truncate-2 lh-1-4 mb-0">
                      <Link className="d-block text-reset" tabIndex={0}>ACETA</Link>
                    </h3> */}
                              </div>
                            </div>
                          </div></div></div>
                    })}
                  </div></div></div>
            </div>
          </div>

          <div className="card">
            <div className="card-header">
              <h6 className="mb-0">Top Pickup Point</h6>
            </div>
            <div className="card-body">
              <div className="aiz-carousel gutters-10 half-outside-arrow slick-initialized slick-slider" data-items={6} data-xl-items={5} data-lg-items={4} data-md-items={3} data-sm-items={2} data-arrows="true">
                <div className="slick-list draggable">
                  <div className="slick-track" style={{ opacity: 1, width: 2352, transform: 'translate3d(0px, 0px, 0px)' }}>
                    {topPickUpPoint && topPickUpPoint?.map((item) => {
                      return <div className="slick-slide slick-current slick-active" data-slick-index={0} aria-hidden="false" style={{ width: 196 }} key={item?._id}>
                        <div>
                          <div className="carousel-box" style={{ width: '100%', display: 'inline-block' }}>
                            <div className="aiz-card-box border border-light rounded shadow-sm hov-shadow-md mb-2 has-transition bg-white">
                              <div className="p-md-3 p-2 text-left">
                                {/* <div className="fs-15">
                                <span className="fw-700 text-primary">Revenue : 95</span>
                              </div> */}
                                <h3 className="fw-600 fs-13 text-truncate-2 lh-1-4 mb-0">
                                  <a className="d-block text-reset" tabIndex={0}>Name : {item?.pickupPoint?.pickupPoint_name}</a>
                                  <a className="d-block text-reset" tabIndex={0}>Phone : {item?.pickupPoint?.phone}</a>
                                </h3>
                                <h3 className="fw-600 fs-13 text-truncate-2 lh-1-4 mb-0 d-block">
                                  <div className="d-block text-reset" tabIndex={0}>Email : {item?.pickupPoint?.email}</div>
                                  <div className="d-block text-reset" tabIndex={0}>Address : {item?.pickupPoint?.address}</div>
                                </h3>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                    })}
                  </div></div></div>
            </div>
          </div>

          <div className="col-lg-12 col-md-12 col-sm-12">
            <h5><strong>Latest List</strong></h5>
          </div>
          <table className="table table-3 position-relative  rounded-4">
            <thead>
              <tr>
                <th class="table-secondary" scope="col"> Id</th>
                <th class="table-secondary" scope="col">Image</th>
                <th class="table-secondary" scope="col"> Asset Id </th>
                <th class="table-secondary" scope="col">Asset Model No</th>
                <th class="table-secondary" scope="col">Name</th>
                <th class="table-secondary" scope="col">Unit Price</th>
                <th class="table-secondary" scope="col">Date of Purchase</th>
                <th class="table-secondary" scope="col">Date of Manufacture</th>

              </tr>
            </thead>
            <tbody>
              {latest && latest?.map((item) => {
                return <tr key={item?._id}>
                  <td>{item?._id}</td>
                  <td>
                    <span className="r-list-img">
                      <img src={item.image?.url} alt="asset img" />
                    </span>
                  </td>
                  <td>{item?.id}</td>
                  <td>{item?.modelNo}</td>
                  <td>{item?.name}</td>
                  <td>{item?.unit_price}</td>
                  <td>{item?.dateOfPurchase}</td>
                  <td>{item?.dateOfManufacture}</td>
                </tr>
              })}

            </tbody>
          </table>

          <div className="col-xs-12 my-3">
            <div className="panel panel-bd d-flex justify-content-center " style={{ backgroundColor: "white", borderRadius: "4px" }}>
              <div className="panel-body p-2">
                <div className="statistic-box text-center">
                  <span className="">
                    <h4>Total Asset: {totalAsets}</h4>
                  </span>
                  <div className="   bg-info" style={{
                    borderRadius: "100%", padding: "50%"
                  }}>
                  </div>
                </div>
              </div>
            </div>
          </div>


          <div className="row gutters-10">
            <div className="col-lg-12">
              <div className="row gutters-10">
                <div className="col-4">
                  <div style={{ width: "100%", cursor: "pointer" }} onClick={() => changeRoute('')} className="bg-grad-2 text-white rounded-lg mb-4 overflow-hidden">
                    <div className=" pt-3">
                      <div className="h3 px-3 fw-700 mb-3">
                        {userCount}
                      </div>
                      <div className=" px-3 opacity-50 py-4">
                        <span className="fs-12 d-block"><strong>Users Count</strong></span>
                      </div>
                      <div className="opacity-50 border-top text-end bg-primary  p-2">
                        <span className="fs-12 d-block"><strong>More Info</strong> <BsFillArrowRightCircleFill /></span>
                      </div>
                    </div>

                  </div>
                </div>
                <div className="col-4 ">
                  <div style={{ width: "100%", cursor: "pointer" }} /* onClick={() => changeRoute('all_orders')} */ className="bg-grad-3 text-white rounded-lg mb-4 overflow-hidden ">
                    <div className=" pt-3">
                      <div className="h3 px-3 fw-700 mb-3">
                        {/* {orders?.count} */}
                        {userActive}
                      </div>
                      <div className=" px-3 opacity-50 py-4">
                        <span className="fs-12 d-block"><strong>Active Users</strong></span>
                      </div>
                      <div className="opacity-50 border-top text-end bg-primary  p-2">
                        <span className="fs-12 d-block"><strong>More Info</strong> <BsFillArrowRightCircleFill /></span>
                      </div>
                    </div>


                  </div>
                </div>
                <div className="col-4">
                  <div style={{ width: "100%", cursor: "pointer" }} /* onClick={() => changeRoute('customer-list')} */ className="bg-grad-2 text-white rounded-lg mb-4 overflow-hidden">
                    <div className=" pt-3">
                      <div className="h3 px-3 fw-700 mb-3">
                        {/* {users?.count} */}
                        {inActiveUser}
                      </div>
                      <div className=" px-3 opacity-50 py-4">
                        <span className="fs-12 d-block"><strong>In Active Users</strong></span>
                      </div>
                      <div className="opacity-50 border-top text-end bg-primary  p-2">
                        <span className="fs-12 d-block"><strong>More Info</strong> <BsFillArrowRightCircleFill /></span>
                      </div>
                    </div>
                  </div>
                </div>
                {/* {isLoginPickup === 'false' && <div className="col-4">
                  <div className="bg-grad-1 text-white rounded-lg mb-4 overflow-hidden">
                    <div className="px-3 pt-3">
                      <div className="opacity-50">
                        <span className="fs-12 d-block">Total Active</span>
                        Coupons
                      </div>
                      <div className="h3 fw-700 mb-3">{activeCoupen?.count}</div>
                    </div>
                    
                  </div>
                </div>} */}

                {/* <div className="col-4">
                  <div className="bg-grad-1 text-white rounded-lg mb-4 overflow-hidden">
                    <div className="px-3 pt-3">
                      <div className="opacity-50">
                        <span className="fs-12 d-block">Total</span>
                        Rejected Order
                      </div>
                      <div className="h3 fw-700 mb-3">{Rejected?.count ? Rejected?.count : 0}</div>
                    </div>
                    
                  </div>
                </div> */}




              </div>
            </div>


            <div className="col-lg-6">
              <div className="row gutters-10">

                {/* <div className="col-4">
                  <div style={{ width: "100%", cursor: "pointer" }} onClick={() => changeRoute('pick_up_points')} className="bg-grad-3 text-white rounded-lg mb-4 overflow-hidden">
                    <div className="px-3 pt-3">
                      <div className="opacity-50">
                        <span className="fs-12 d-block">Total</span>
                        pickuppoints
                      </div>
                      <div className="h3 fw-700 mb-3">{pickuppoints?.count}</div>
                    </div>
                    
                  </div>
                </div> */}



                {/* <div className="col-4">
                  <div className="bg-grad-1 text-white rounded-lg mb-4 overflow-hidden">
                    <div className="px-3 pt-3">
                      <div className="opacity-50">
                        <span className="fs-12 d-block">Total</span>
                        Cancelled Order
                      </div>
                      <div className="h3 fw-700 mb-3">{Cancel?.count}</div>
                    </div>
                    
                  </div>
                </div> */}
                {/* <div className="col-4">
                  <div className="bg-grad-1 text-white rounded-lg mb-4 overflow-hidden">
                    <div className="px-3 pt-3">
                      <div className="opacity-50">
                        <span className="fs-12 d-block">Total</span>
                        Pending Order
                      </div>
                      <div className="h3 fw-700 mb-3">{Pending?.count}</div>
                    </div>
                    
                  </div>
                </div> */}



                {/* <div className="col-4">
                  <div className="bg-grad-1 text-white rounded-lg mb-4 overflow-hidden">
                    <div className="px-3 pt-3">
                      <div className="opacity-50">
                        <span className="fs-12 d-block">Total</span>
                        Shipped Order
                      </div>
                      <div className="h3 fw-700 mb-3">99dd</div>
                    </div>
                    
                  </div>
                </div> */}

                {/* <div className="col-4">
                  <div className="bg-grad-1 text-white rounded-lg mb-4 overflow-hidden">
                    <div className="px-3 pt-3">
                      <div className="opacity-50">
                        <span className="fs-12 d-block">Total</span>
                        Delivered Order
                      </div>
                      <div className="h3 fw-700 mb-3">{delivered?.count}</div>
                    </div>
                    
                  </div>
                </div> */}



                {/* 
                <div className="col-4">
                  <div className="bg-grad-4 text-white rounded-lg mb-4 overflow-hidden">
                    <div className="px-3 pt-3">
                      <div className="opacity-50">
                        <span className="fs-12 d-block">Total</span>
                        Product
                      </div>
                      <div className="h3 fw-700 mb-3">{product?.count}</div>
                    </div>
                    
                  </div>
                </div> */}


              </div>
            </div>

          </div>
          <div className="col-lg-12 col-md-12 col-sm-12">
            <h5><strong>Recent Registered</strong></h5>
          </div>
          <div style={{ overflowX: "auto" }}>
            <table className="table table-3 position-relative  rounded-4">
              <thead>
                <tr>
                  <th class="table-secondary" scope="col">Profile Id</th>
                  {/* <th class="table-secondary" scope="col">Profile Pictures</th> */}
                  <th class="table-secondary" scope="col">First Name
                  </th>
                  <th class="table-secondary" scope="col">Last Name</th>
                  <th class="table-secondary" scope="col">Phone Number</th>
                  <th class="table-secondary" scope="col">Email</th>
                  <th class="table-secondary" scope="col">Created Date</th>
                </tr>
              </thead>
              <tbody>
                {register && register?.map((item) => {
                  return <tr key={item?._id}>
                    <td>{item?._id}</td>
                    {/* <td>
                    <span className="r-list-img">
                      <img src={} alt="asset img" />
                    </span>
                  </td> */}
                    <td>{item?.firstname}</td>
                    <td>{item?.lastname}</td>
                    <td>{item?.mobile}</td>
                    <td>{item?.email}</td>
                    <td>{item?.createdAt}</td>
                  </tr>
                })}
              </tbody>
            </table>
          </div>



          <div className="card">
            <div className="card-header">
              <h6 className="mb-0">Top  products</h6>
            </div>
            <div className="card-body">
              <div className="aiz-carousel gutters-10 half-outside-arrow slick-initialized slick-slider" data-items={6} data-xl-items={5} data-lg-items={4} data-md-items={3} data-sm-items={2} data-arrows="true"><div className="slick-list draggable"><div className="slick-track" style={{ opacity: 1, width: 2352, transform: 'translate3d(0px, 0px, 0px)' }}><div className="slick-slide slick-current slick-active" data-slick-index={0} aria-hidden="false" style={{ width: 196 }}><div><div className="carousel-box" style={{ width: '100%', display: 'inline-block' }}>
                <div className="aiz-card-box border border-light rounded shadow-sm hov-shadow-md mb-2 has-transition bg-white">
                  <div className="position-relative">
                    <Link to="#" className="d-block" tabIndex={0}>
                      <img className="img-fit mx-auto h-210px lazyloaded" src={footerImg} data-src="" alt="ACETA" />
                    </Link>
                  </div>
                  <div className="p-md-3 p-2 text-left">
                    <div className="fs-15">
                      <span className="fw-700 text-primary">Laptop</span>
                    </div>
                    <div className="rating rating-sm mt-1">
                      <i className="las la-star" /><i className="las la-star" /><i className="las la-star" /><i className="las la-star" /><i className="las la-star" />
                    </div>
                    {/* <h3 className="fw-600 fs-13 text-truncate-2 lh-1-4 mb-0">
                      <Link className="d-block text-reset" tabIndex={0}>ACETA</Link>
                    </h3> */}
                  </div>
                </div>
              </div></div></div><div className="slick-slide slick-active" data-slick-index={1} aria-hidden="false" style={{ width: 196 }}><div><div className="carousel-box" style={{ width: '100%', display: 'inline-block' }}>
                <div className="aiz-card-box border border-light rounded shadow-sm hov-shadow-md mb-2 has-transition bg-white">
                  <div className="position-relative">
                    <Link to="#" className="d-block" tabIndex={0}>
                      <img className="img-fit mx-auto h-210px lazyloaded" src={footerImg1} data-src="https://mmslfashions.in/public/uploads/all/g7ZiaWNvwkLwNhl67jtfbUaIcwSzVarNuc7T8dLP.jpg" alt="Ammonium Nitrate" />
                    </Link>
                  </div>
                  <div className="p-md-3 p-2 text-left">
                    <div className="fs-15">
                      <span className="fw-700 text-primary">Router</span>
                    </div>
                    <div className="rating rating-sm mt-1">
                      <i className="las la-star" />
                      <i className="las la-star" />
                      <i className="las la-star" />
                      <i className="las la-star" />
                      <i className="las la-star" />
                    </div>
                    {/* <h3 className="fw-600 fs-13 text-truncate-2 lh-1-4 mb-0">
                      <Link className="d-block text-reset" tabIndex={0}>Ammonium Nitrate</Link>
                    </h3> */}
                  </div>
                </div>
              </div></div></div>
                <div className="slick-slide slick-active" data-slick-index={2} aria-hidden="false" style={{ width: 196 }}><div><div className="carousel-box" style={{ width: '100%', display: 'inline-block' }}>
                  <div className="aiz-card-box border border-light rounded shadow-sm hov-shadow-md mb-2 has-transition bg-white">
                    <div className="position-relative">
                      <Link to="#" className="d-block" tabIndex={0}>
                        <img className="img-fit mx-auto h-210px lazyloaded" src={footerImg2} data-src="https://mmslfashions.in/public/uploads/all/Wiv7vhbeLmejHSA4L7NNWgfAqundcpdd76tW7OiY.jpg" alt="MAP GRANULAR IN 50KG BAG" />
                      </Link>
                    </div>
                    <div className="p-md-3 p-2 text-left">
                      <div className="fs-15">
                        <span className="fw-700 text-primary">Apple Laptop</span>
                      </div>
                      <div className="rating rating-sm mt-1">
                        <i className="las la-star" />
                        <i className="las la-star" />
                        <i className="las la-star" />
                        <i className="las la-star" />
                        <i className="las la-star" />
                      </div>
                      {/* <h3 className="fw-600 fs-13 text-truncate-2 lh-1-4 mb-0">
                      <Link to= "https://mmslfashions.in/product/map-granular-in-50kg-bag-mIbGj" className="d-block text-reset" tabIndex={0}>MAP GRANULAR IN 50KG BAG</Link>
                    </h3> */}
                    </div>
                  </div>
                </div></div></div>
                <div className="slick-slide slick-active" data-slick-index={3} aria-hidden="false" style={{ width: 196 }}><div><div className="carousel-box" style={{ width: '100%', display: 'inline-block' }}>
                  <div className="aiz-card-box border border-light rounded shadow-sm hov-shadow-md mb-2 has-transition bg-white">
                    <div className="position-relative">
                      <Link to="#" className="d-block" tabIndex={0}>
                        <img className="img-fit mx-auto h-210px lazyloaded" src={footerImg3} data-src="https://mmslfashions.in/public/uploads/all/yVOr0O2yV6y4EcW47YAkrl2w77aQG5yXYGYLcZFD.png" alt="Ammonium Sulphate" />
                      </Link>
                    </div>
                    <div className="p-md-3 p-2 text-left">
                      <div className="fs-15">
                        <span className="fw-700 text-primary">Computer</span>
                      </div>
                      <div className="rating rating-sm mt-1">
                        <i className="las la-star" /><i className="las la-star" /><i className="las la-star" /><i className="las la-star" /><i className="las la-star" />
                      </div>
                      {/* <h3 className="fw-600 fs-13 text-truncate-2 lh-1-4 mb-0">
                      <Link to= "https://mmslfashions.in/product/ammonium-sulphate-3" className="d-block text-reset" tabIndex={0}>Ammonium Sulphate</Link>
                    </h3> */}
                    </div>
                  </div>
                </div></div></div>
                <div className="slick-slide slick-active" data-slick-index={4} aria-hidden="false" style={{ width: 196 }}><div><div className="carousel-box" style={{ width: '100%', display: 'inline-block' }}>
                  <div className="aiz-card-box border border-light rounded shadow-sm hov-shadow-md mb-2 has-transition bg-white">
                    <div className="position-relative">
                      <Link to="#" className="d-block" tabIndex={0}>
                        <img className="img-fit mx-auto h-210px lazyloaded" src={footerImg1} data-src="https://mmslfashions.in/public/uploads/all/v01lSDffgSnZK0HXzyIvBNgzdjnlIuolRvWXoCMA.jpg" alt="17:17:17" />
                      </Link>
                    </div>
                    <div className="p-md-3 p-2 text-left">
                      <div className="fs-15">
                        <span className="fw-700 text-primary">Router</span>
                      </div>
                      <div className="rating rating-sm mt-1">
                        <i className="las la-star" />
                        <i className="las la-star" />
                        <i className="las la-star" />
                        <i className="las la-star" />
                        <i className="las la-star" />
                      </div>
                      {/* <h3 className="fw-600 fs-13 text-truncate-2 lh-1-4 mb-0">
                      <Link to= "https://mmslfashions.in/product/171717" className="d-block text-reset" tabIndex={0}>17:17:17</Link>
                    </h3> */}
                    </div>
                  </div>
                </div></div></div>
                <div className="slick-slide slick-active" data-slick-index={5} aria-hidden="false" style={{ width: 196 }}><div><div className="carousel-box" style={{ width: '100%', display: 'inline-block' }}>
                  <div className="aiz-card-box border border-light rounded shadow-sm hov-shadow-md mb-2 has-transition bg-white">
                    <div className="position-relative">
                      <Link to="#" className="d-block" tabIndex={0}>
                        <img className="img-fit mx-auto h-210px lazyloaded" src={footerImg4} data-src="https://mmslfashions.in/public/uploads/all/Wiv7vhbeLmejHSA4L7NNWgfAqundcpdd76tW7OiY.jpg" alt="Ammonium Sulphate" />
                      </Link>
                    </div>
                    <div className="p-md-3 p-2 text-left">
                      <div className="fs-15">
                        <span className="fw-700 text-primary">Mother Board</span>
                      </div>
                      <div className="rating rating-sm mt-1">
                        <i className="las la-star" />
                        <i className="las la-star" />
                        <i className="las la-star" />
                        <i className="las la-star" />
                        <i className="las la-star" />
                      </div>
                      {/* <h3 className="fw-600 fs-13 text-truncate-2 lh-1-4 mb-0">
                      <Link to= "https://mmslfashions.in/product/ammonium-sulphate-xlnf4" className="d-block text-reset" tabIndex={0}>Ammonium Sulphate</Link>
                    </h3> */}
                    </div>
                  </div>
                </div></div></div>
                <div className="slick-slide" data-slick-index={6} aria-hidden="true" style={{ width: 196 }} tabIndex={-1}><div><div className="carousel-box" style={{ width: '100%', display: 'inline-block' }}>
                  <div className="aiz-card-box border border-light rounded shadow-sm hov-shadow-md mb-2 has-transition bg-white">
                    <div className="position-relative">
                      <Link to="#" className="d-block" tabIndex={-1}>
                        <img className="img-fit mx-auto h-210px lazyloaded" src={footerImg0} data-src="https://mmslfashions.in/public/uploads/all/Wiv7vhbeLmejHSA4L7NNWgfAqundcpdd76tW7OiY.jpg" alt="AMMONIUM NITRATE 10 KG BAG" />
                      </Link>
                    </div>
                    <div className="p-md-3 p-2 text-left">
                      <div className="fs-15">
                        <span className="fw-700 text-primary">Mouse</span>
                      </div>
                      <div className="rating rating-sm mt-1">
                        <i className="las la-star" />
                        <i className="las la-star" />
                        <i className="las la-star" />
                        <i className="las la-star" />
                        <i className="las la-star" />
                      </div>
                      {/* <h3 className="fw-600 fs-13 text-truncate-2 lh-1-4 mb-0">
                      <Link to= "https://mmslfashions.in/product/ammonium-nitrate-10-kg-bag-8FauO" className="d-block text-reset" tabIndex={-1}>AMMONIUM NITRATE 10 KG BAG</Link>
                    </h3> */}
                    </div>
                  </div>
                </div></div></div>
                <div className="slick-slide" data-slick-index={7} aria-hidden="true" style={{ width: 196 }} tabIndex={-1}><div><div className="carousel-box" style={{ width: '100%', display: 'inline-block' }}>
                  <div className="aiz-card-box border border-light rounded shadow-sm hov-shadow-md mb-2 has-transition bg-white">
                    <div className="position-relative">
                      <Link to="#" className="d-block" tabIndex={-1}>
                        <img className="img-fit mx-auto h-210px lazyloaded" src={footerImg3} data-src="https://mmslfashions.in/public/uploads/all/Wiv7vhbeLmejHSA4L7NNWgfAqundcpdd76tW7OiY.jpg" alt="Ammonium Sulphate" />
                      </Link>
                    </div>
                    <div className="p-md-3 p-2 text-left">
                      <div className="fs-15">
                        <span className="fw-700 text-primary">Computer</span>
                      </div>
                      <div className="rating rating-sm mt-1">
                        <i className="las la-star" /><i className="las la-star" /><i className="las la-star" /><i className="las la-star" /><i className="las la-star" />
                      </div>
                      {/* <h3 className="fw-600 fs-13 text-truncate-2 lh-1-4 mb-0">
                      <Link to= "https://mmslfashions.in/product/ammonium-sulphate-xlnf4-9XMAu" className="d-block text-reset" tabIndex={-1}>Ammonium Sulphate</Link>
                    </h3> */}
                    </div>
                  </div>
                </div>{/* </div></div><div className="slick-slide" data-slick-index={8} aria-hidden="true" style={{ width: 196 }} tabIndex={-1}><div><div className="carousel-box" style={{ width: '100%', display: 'inline-block' }}>
                <div className="aiz-card-box border border-light rounded shadow-sm hov-shadow-md mb-2 has-transition bg-white">
                  <div className="position-relative">
                    <Link to= "https://mmslfashions.in/product/17-17-17-50-kg-bag-mNH9f" className="d-block" tabIndex={-1}>
                      <img className="img-fit mx-auto h-210px lazyloaded" src="https://mmslfashions.in/public/uploads/all/Wiv7vhbeLmejHSA4L7NNWgfAqundcpdd76tW7OiY.jpg" data-src="https://mmslfashions.in/public/uploads/all/Wiv7vhbeLmejHSA4L7NNWgfAqundcpdd76tW7OiY.jpg" alt="17:17:17  50 KG BAG" />
                    </Link>
                  </div>
                  <div className="p-md-3 p-2 text-left">
                    <div className="fs-15">
                      <span className="fw-700 text-primary">ZK55.00</span>
                    </div>
                    <div className="rating rating-sm mt-1">
                      <i className="las la-star" /><i className="las la-star" /><i className="las la-star" /><i className="las la-star" /><i className="las la-star" />
                    </div>
                    <h3 className="fw-600 fs-13 text-truncate-2 lh-1-4 mb-0">
                      <Link to= "https://mmslfashions.in/product/17-17-17-50-kg-bag-mNH9f" className="d-block text-reset" tabIndex={-1}>17:17:17  50 KG BAG</Link>
                    </h3>
                  </div>
                </div>
              </div> */}
                </div></div>
                <div className="slick-slide" data-slick-index={9} aria-hidden="true" style={{ width: 196 }} tabIndex={-1}><div>
                  <div className="carousel-box" style={{ width: '100%', display: 'inline-block' }}>
                    <div className="aiz-card-box border border-light rounded shadow-sm hov-shadow-md mb-2 has-transition bg-white">
                      <div className="position-relative">
                        <Link to="#" className="d-block" tabIndex={-1}>
                          <img className="img-fit mx-auto h-210px ls-is-cached lazyloaded" src="https://mmslfashions.in/public/uploads/all/Wiv7vhbeLmejHSA4L7NNWgfAqundcpdd76tW7OiY.jpg" data-src="https://mmslfashions.in/public/uploads/all/Wiv7vhbeLmejHSA4L7NNWgfAqundcpdd76tW7OiY.jpg" alt="AMMONIUM NITRATE 25 KG BAG" />
                        </Link>
                      </div>
                      <div className="p-md-3 p-2 text-left">
                        <div className="fs-15">
                          <span className="fw-700 text-primary">ZK55.00</span>
                        </div>
                        <div className="rating rating-sm mt-1">
                          <i className="las la-star" /><i className="las la-star" /><i className="las la-star" /><i className="las la-star" /><i className="las la-star" />
                        </div>
                        <h3 className="fw-600 fs-13 text-truncate-2 lh-1-4 mb-0">
                          <Link to="https://mmslfashions.in/product/ammonium-nitrate-25-kg-bag-PJCsc" className="d-block text-reset" tabIndex={-1}>AMMONIUM NITRATE 25 KG BAG</Link>
                        </h3>
                      </div>
                    </div>
                  </div></div></div>
                <div className="slick-slide" data-slick-index={10} aria-hidden="true" style={{ width: 196 }} tabIndex={-1}><div><div className="carousel-box" style={{ width: '100%', display: 'inline-block' }}>
                  <div className="aiz-card-box border border-light rounded shadow-sm hov-shadow-md mb-2 has-transition bg-white">
                    <div className="position-relative">
                      <Link to="https://mmslfashions.in/product/ammonium-nitrate-5-kg-bag-oq9VC" className="d-block" tabIndex={-1}>
                        <img className="img-fit lazyload mx-auto h-210px" src="https://mmslfashions.in/public/assets/img/placeholder.jpg" data-src="https://mmslfashions.in/public/uploads/all/Wiv7vhbeLmejHSA4L7NNWgfAqundcpdd76tW7OiY.jpg" alt="AMMONIUM NITRATE 5 KG BAG" />
                      </Link>
                    </div>
                    <div className="p-md-3 p-2 text-left">
                      <div className="fs-15">
                        <span className="fw-700 text-primary">ZK55.00</span>
                      </div>
                      <div className="rating rating-sm mt-1">
                        <i className="las la-star" /><i className="las la-star" /><i className="las la-star" /><i className="las la-star" /><i className="las la-star" />
                      </div>
                      <h3 className="fw-600 fs-13 text-truncate-2 lh-1-4 mb-0">
                        <Link to="https://mmslfashions.in/product/ammonium-nitrate-5-kg-bag-oq9VC" className="d-block text-reset" tabIndex={-1}>AMMONIUM NITRATE 5 KG BAG</Link>
                      </h3>
                    </div>
                  </div>
                </div></div></div>
                <div className="slick-slide" data-slick-index={11} aria-hidden="true" style={{ width: 196 }} tabIndex={-1}><div><div className="carousel-box" style={{ width: '100%', display: 'inline-block' }}>
                  <div className="aiz-card-box border border-light rounded shadow-sm hov-shadow-md mb-2 has-transition bg-white">
                    <div className="position-relative">
                      <Link to="#" className="d-block" tabIndex={-1}>
                        <img className="img-fit lazyload mx-auto h-210px" src="https://mmslfashions.in/public/assets/img/placeholder.jpg" data-src="https://mmslfashions.in/public/uploads/all/Wiv7vhbeLmejHSA4L7NNWgfAqundcpdd76tW7OiY.jpg" alt="AMMONIUM NITRATE IN 50 KG BAG" />
                      </Link>
                    </div>
                    <div className="p-md-3 p-2 text-left">
                      <div className="fs-15">
                        <span className="fw-700 text-primary">ZK55.00</span>
                      </div>
                      <div className="rating rating-sm mt-1">
                        <i className="las la-star" /><i className="las la-star" /><i className="las la-star" /><i className="las la-star" /><i className="las la-star" />
                      </div>
                      <h3 className="fw-600 fs-13 text-truncate-2 lh-1-4 mb-0">
                        <Link to="#" className="d-block text-reset" tabIndex={-1}>AMMONIUM NITRATE IN 50 KG BAG</Link>
                      </h3>
                    </div>
                  </div>
                </div></div></div></div></div></div>
            </div>
          </div>
        </div >
        <div className="bg-white text-center py-3 px-15px px-lg-25px mt-auto">
          {/*p class="mb-0">&copy;  v6.3.3</p*/}
        </div>
      </div >

    </>
  )
}
export default AssetsDashboardAdminComp;