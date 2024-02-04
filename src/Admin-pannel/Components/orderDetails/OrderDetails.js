import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import {
  useAddOrderStatusMutation,
  useGetOrderDetailQuery,
  useGetOrderStartByIdQuery,
} from "../all-products/allproductsApi/allProductsApi";
import Spinner from "react-bootstrap/Spinner";
import ToggleStatus from "../toggleStatus/ToggleStatus";
import PodEnteris from "./podEnteris/PodEnteris";
import axios from "axios";
import html2pdf from "html2pdf.js";
function OrderDetails() {
  const [modalShow, setModalShow] = useState(false);
  const invoice = window.localStorage.getItem("invoice");
  const isPickupManagerId = window.localStorage.getItem("isPickupManagerId");
  const isDeleveryBoy = window.localStorage.getItem("isDeleveryBoy");
  const isSellerId = window.localStorage.getItem("isSellerId");
  const adminId = window.localStorage.getItem("adminId");

  const param = useParams();
  const [inputVal, setInputVal] = useState({
    orderId: param.id,
    orderStatusId: "6423edb20944088884f88cca",
    Note: "",
    userid: "641eabc2be788d5482d2f9cc",
  });
  const [shows, setShows] = useState(true);
  const onChangehandler = (e) => {
    const inVal = e.target.value;
    const inpName = e.target.name;
    const clone = { ...inputVal };
    clone[inpName] = inVal;
    setInputVal(clone);
    if (e.target.name == "orderStatusId") {
      setShows(false);
    }
  };
  const [addorderStD, resp] = useAddOrderStatusMutation();

  const submitOrderStd = () => {
    addorderStD({ data: inputVal, token: token });
    // setInputVal({
    //   orderId: param.id,
    //   orderStatusId: "6423edb20944088884f88cca",
    //   Note: "",
    //   userid: "641eabc2be788d5482d2f9cc",
    // })
  };

  const token = window.localStorage.getItem("token");
  const { data, isSuccess, isLoading, error } = useGetOrderDetailQuery({
    id: param.id,
    token: token,
  });
  const { data: orderStatusData } = useGetOrderStartByIdQuery();
  const [orderStatusD, setorderStatusD] = useState(orderStatusData);

  const toastSuccessMessage = () => {
    toast.success("Order Status Updated Successfully", {
      position: "top-center",
    });
  };

  useEffect(() => {
    if (resp.isSuccess === true) {
      toastSuccessMessage();
    }
    if (resp.isError === true) {
      alert("!Order Status not Updated");
    }
  }, [resp.isSuccess, resp.isError]);

  const [pickups, setPickups] = useState(null);

  const getPickupPoint = async () => {
    try {
      const res = await axios.get(
        `https://onlineparttimejobs.in/api/pickupPoints`,
        {
          headers: {
            "Content-type": "application/json; charset=UTF-8",
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setPickups(res.data);
    } catch (error) {
      alert("Server Error Fail to load pickup Points");
    }
  };
  useEffect(() => {
    if (isDeleveryBoy == "true") {
      return;
    }
    getPickupPoint();
    // setShows(false)
  }, []);

  const isSuperAdminLogin = window.localStorage.getItem("adminId");
  const isLogin = window.localStorage.getItem("showMainadmin");

  const [pickupData, setpickupData] = useState({
    pickupPoints: "6412fbd218fa66a37ed430d1",
    pickupPointManager: "6421e82ad69379b8d16c3608",
    staffid: isSuperAdminLogin,
    orderId: param.id,
    note: "",
  });

  const handelChange = (e) => {
    const clone = { ...pickupData };
    const val = e.target.value;

    if (e.target.name === "managerId") {
      const obj = pickups.find((item) => {
        if (item.pickupPoint_name === val) {
          return item;
        }
      });

      if (obj?.pickUpManagerSchema === null) {
        const obj3 = {
          ...pickupData,
          pickupPointManager: undefined,
          pickupPoints: obj._id,
        };
        setpickupData(obj3);
      } else {
        const obj2 = {
          ...pickupData,
          pickupPointManager: obj?.pickUpManagerSchema._id,
          pickupPoints: obj._id,
        };
        setpickupData(obj2);
      }
    } else {
      clone[e.target.name] = e.target.value;
      setpickupData(clone);
    }
  };

  const sendAssign = async () => {
    try {
      const res = await axios.post(
        `https://onlineparttimejobs.in/api/orderStatusTransaction/add_OrderStatusTrans`,
        pickupData,
        {
          headers: {
            "Content-type": "application/json; charset=UTF-8",
            Authorization: `Bearer ${token}`,
          },
        }
      );
      // addorderStD(inputVal)
      alert("Assign To PickUp Point Manager Successfully");
    } catch (error) {
      alert("Faild To Assign PickUp Point Manager !!");
    }
  };

  // DELEVERY BOY

  const [dataBoy, setdataBoy] = useState(null);

  const [boyBody, setBoyBody] = useState({
    orderId: param.id,
    deliveryBoy: "",
    staff_id: adminId ? adminId : isPickupManagerId,
    note: "",
  });

  const getData = async () => {
    const res = await axios.get(
      `https://onlineparttimejobs.in/api/deliveryBoy/pickupPoint`,
      {
        headers: {
          "Content-type": "application/json; charset=UTF-8",
          Authorization: `Bearer ${token}`,
        },
      }
    );
    setdataBoy(res.data);
  };

  const isDelevery = window.localStorage.getItem("isDeleveryBoy");

  const getData1 = async () => {
    try {
      const res = await axios.get(
        `https://onlineparttimejobs.in/api/orderStatusMaster/delivery`
      );
      setorderStatusD(res.data);
    } catch (error) {
      // alert('Status Not Load')
    }
  };

  useEffect(() => {
    if (isDelevery === "true") {
      getData1();
      // return
    }
    getData();
  }, []);

  const changeHandleBoy = (e) => {
    const clone = { ...boyBody };
    if (e.target.name === "deliveryBoy") {
      const obj2 = { ...boyBody, deliveryBoy: e.target.value };
      setBoyBody(obj2);
    } else {
      clone[e.target.name] = e.target.value;
      setBoyBody(clone);
    }
  };

  const sendAssignBoy = async () => {
    try {
      const res = await axios.post(
        "https://onlineparttimejobs.in/api/assignDeliveryBoy/add_AssignDeliveryBoy",
        boyBody,
        {
          headers: {
            "Content-type": "application/json; charset=UTF-8",
            Authorization: `Bearer ${token}`,
          },
        }
      );
      alert("Assign To Delevery Boy Successfully");
    } catch (error) {
      alert("Assign To Delevery Boy Failed");
    }
  };

  const printInvoice = () => {
    var fileName =
      data[0]?.user_firstname && data[0].user_lastname
        ? data[0]?.user_firstname + " " + data[0].user_lastname
        : data[0]?.billing?.bfirstname + " " + data[0]?.billing?.blastname;

    // var originalTitle = document.title;
    // document.title = fileName;
    // window.print();
    // document.title = originalTitle;
    htmlToPDF(fileName);
  };

  const createRow = () => {
    let row = "";
    debugger;
    data[0].products.forEach((item, i) => {
      row += `<tr key={i}>
          <td>${i + 1}</td>
          <td>${item.productId?.name}</td>
          <td>${item?.qty}</td>
          <td>${item?.price?.sale_rate}</td>
          <td>${item?.subTotal}</td>
          <td>${item?.tax}</td>
          <td>${item?.total}</td>
        </tr>`;
    });
    return row;
  };

  const htmlToPDF = (fileName) => {
    const html = `<!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Invoice</title>
      <script src="https://rawgit.com/eKoopmans/html2pdf/master/dist/html2pdf.bundle.js"></script>
      <style>
        table, td,th,tr{
            border: 1px solid;
            border-collapse: collapse;
        }
        th{
            background-color: #5e0c36;
            color: #fff;
            border: 1px #5e0c36;
        }
        td, th{
            padding: 10px;
            text-align: center;
        }
        table{
            padding: 10px
        }
      </style>
    </head>
    <body style="font-family: Arial, sans-serif;">
    
      <div class="invoice-container" style="width: 80%; margin: 0 auto; border: 1px solid #ccc;">
        <div class="invoice-header" style="text-align: center;  display: flex; justify-content: space-between; padding:0 20px; align-items: center;">
          <h1>Invoice</h1>
          <img src="/images/logo.png" alt="My Image" height="50" style={height:50px}>
        </div>
    
        <div class="invoice-details" style="display: flex; justify-content: space-between; flex-direction: column; padding: 0 20px; background-color: #5e0c36; color: #fff;">
          <div class="invoice" style="padding: 0;">
            <h4 style="color: #fff; padding: 10px;"><strong>Invoice Number:</strong> ${
              data[0]?.invoiceNo
            }</h4>
            <h4 style="color: #fff; padding: 10px;"><strong>Invoice Date:</strong> ${
              data[0]?.invoiceDate
            }</h4>
          </div>
        </div>
    
        <div class="wrapper">
          <div class="billing-address" style="display: flex; justify-content: space-between; padding: 0;">
            
            <div class="sold" style="flex:1">
                <h4  style="background-color: #5e0c36; color: #fff; padding: 10px;">Sold To:</h4>
                <span  style="padding: 10px; font-size: 16px;display: block; "><strong>Mamastycoon:</strong> Office No 106, Bin Alshaikh Holding, Bank Street,Doha,Qatar <br> <span style="color:#5e0c36"> Mobile:- 974 6636 2210</span></span>
            </div>
            <div style="padding: 0; flex:1">
                <h4  style="background-color: #5e0c36; color: #fff; padding: 10px;">Ship To:</h4>
                <span style="padding: 10px; font-size: 16px;display: block;"><strong>Shipping Address:</strong> <strong>Address Line 1:</strong>
                <ul>
                          <li>
                            <strong>Address Line 1:</strong>
                            <span>
                              <span>
                              ${
                                data[0]?.shipping?.addressLine1 ??
                                data[0]?.shipping?.baddressLine1 ??
                                "N/A"
                              }
                              </span>
                            </span>
                          </li>
                          <li>
                            <strong> Address Line 2: </strong>
                            <span>
                            ${
                              data[0]?.shipping?.addressLine2 ??
                              data[0]?.shipping?.baddressLine2 ??
                              "N/A"
                            }
                            </span>
                          </li>
                          <li>
                            <strong>City:</strong>
                            <span>
                            ${
                              data[0]?.shipping?.city ??
                              data[0]?.shipping?.bcity ??
                              "N/A"
                            }
                            </span>
                          </li>
                          <li>
                            <strong> State:</strong>
                            <span>
                            ${
                              data[0]?.shipping?.state ??
                              data[0]?.billing?.bstate ??
                              "N/A"
                            }
                            </span>
                          </li>
                          <li>
                            <strong>Province:</strong>
                            <span>
                            ${
                              data[0]?.shipping?.province ??
                              data[0]?.billing?.bprovince ??
                              "N/A"
                            }
                            </span>
                          </li>

                          <li>
                            <strong>Country:</strong>
                            <span>
                            ${
                              data[0]?.shipping?.country ??
                              data[0]?.billing?.bcountry ??
                              "N/A"
                            }
                            </span>
                          </li>

                          <li>
                            <strong>Name:</strong>
                            <span>
                            ${data[0]?.shipping?.bfirstname ?? ""} ${
      data[0]?.shipping?.blastname ?? ""
    }
                            </span>
                          </li>
                          <li>
                            <strong>Email:</strong>
                            <span>
                            ${
                              data[0].shipping?.email ??
                              data[0].billing?.bemail ??
                              "N/A"
                            }
                            </span>
                          </li>
                          <li>
                            <strong>Phone:</strong>
                            <span>
                            ${
                              data[0].shipping?.phone ??
                              data[0].billing?.bphone ??
                              "N/A"
                            }
                            </span>
                          </li>
                        </ul>
              </div>
          </div>
          <div style="padding: 10px;">
          <table style="width: 100%;">
            <thead>
                <tr>
                <th>S.No</th>
                <th>Product</th>
                <th>Quantity</th>
                <th>Unit Price</th>
                <th>Sub Total</th>
                <th>Tax</th>
                <th>Total</th>
            </tr>
           ${createRow()}
            <tr>
                <th colspan="6">Shiping Charge</th>
                <td colspan="2">  ${data[0].shippingCost}</td>
            </tr>
            <tr>
                <th colspan="6">Total</th>
                <td colspan="2">  ${data[0].grandTotal} </td>
            </tr>
            </thead>
          </table>
        </div>
        </div>
      </div>
    </body>
    </html>
    
    `;
    const options = {
      useCORS: true,
      margin: 10,
      filename: fileName || "invoice.pdf",
      image: { type: "jpeg", quality: 0.98 },
      html2canvas: { scale: 1 }, // Adjust the scale as needed
      jsPDF: { unit: "mm", format: "a4", orientation: "landscape" },
    };
    html2pdf(html, options)
      .outputPdf()
      .get("pdf")
      .then(async (outputData) => {});
  };

  console.log("orderdetailData--", data);
  return (
    <>
      {isLoading && (
        <Spinner
          animation="border"
          role="status"
          className="d-block"
          style={{ marginLeft: 15 + "px" }}
        >
          <span className="visually-hidden ">Loading...</span>
        </Spinner>
      )}

      {isSuccess && (
        <div className="aiz-main-content">
          <div className="px-15px px-lg-25px">
            <div className="card">
              <div className="row">
                <div className="col-lg-6">
                  <div className="card-header topCardHeader">
                    <h6 className="mb-0">
                      Order No - {data[0].order_referenceNo}
                    </h6>
                  </div>
                  <div className="card-header topCardHeader">
                    <h6 className="mb-0">
                      Invoice Date - {data[0]?.invoiceDate}
                    </h6>
                  </div>
                  <div className="card-header topCardHeader">
                    <h6 className="mb-0">Invoice No - {data[0]?.invoiceNo}</h6>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="card-header topCardHeader">
                    <h6 className="mb-0 order-creation-d">
                      Order Created On - {data[0]?.createdAt}
                    </h6>
                  </div>
                </div>
              </div>

              <div className="row p-3 printWrapper">
                <div className="col-lg-6 hideOnPrint">
                  <h6 className="heading-wrapper">General</h6>
                  <div className="p-3 orderStatus">
                    {/* <div className="d-flex align-items-center form-group">
                      <label htmlFor="update_delivery_status">
                        Order Status :
                      </label>
                      <select
                        className="form-select"
                        name="orderStatusId"
                        aria-label="Default select example"
                        defaultValue={""}
                        onChange={onChangehandler}

                        style={{ height: 38 + "px", fontSize: 13 + "px" }}>

                        {orderStatusData &&
                          orderStatusData.map((item, i) => {
                            return (
                              <option value={item._id} key={i}>
                                {item.orderStatusName}
                              </option>
                            );
                          })}
                      </select>
                    </div> */}

                    <div className="small-text-wraper">
                      <div className="customerName">
                        Customer Name:{" "}
                        <span>
                          {data[0]?.user_firstname && data[0].user_lastname
                            ? data[0]?.user_firstname +
                              " " +
                              data[0].user_lastname
                            : data[0]?.billing?.bfirstname +
                              " " +
                              data[0]?.billing?.blastname}
                        </span>
                      </div>
                    </div>
                    <div className="small-text-wraper">
                      <div className="customerName">
                        Customer Contact No:{" "}
                        <span>{data[0]?.contactDetail}</span>
                      </div>
                    </div>

                    {isLogin === "true" && (
                      <div className="assignPickup">
                        <h6>Assign To PickUp Point</h6>
                        <div className="d-flex align-items-center form-group">
                          <label htmlFor="update_delivery_status">
                            PickUp Manager :
                          </label>
                          <select
                            className="form-select"
                            name="managerId"
                            // aria-label="Default select example"
                            onChange={handelChange}
                            // value={data && data[0]?.status[0]?._id}

                            style={{ height: 38 + "px", fontSize: 13 + "px" }}
                          >
                            <option>Select PickUp Point</option>
                            {pickups &&
                              pickups.map((item) => {
                                return (
                                  <option key={item._id} id={item._id}>
                                    {item.pickupPoint_name}
                                  </option>
                                );
                              })}
                          </select>
                        </div>

                        <h6>Note..</h6>
                        <div
                          className="form-floating"
                          style={{ margin: "8px 0" }}
                        >
                          <textarea
                            name="note"
                            onChange={handelChange}
                            className="form-control"
                            placeholder="Leave a comment here"
                            id="floatingTextarea"
                          ></textarea>
                        </div>

                        <button
                          type="button"
                          className="btn btn-primary"
                          onClick={sendAssign}
                        >
                          Send
                        </button>
                      </div>
                    )}
                  </div>
                  <div className="btn-wrapper">
                    <button
                      type="button"
                      className="btn btn-primary"
                      onClick={() => setModalShow(true)}
                    >
                      POD Entry
                    </button>
                  </div>
                  <PodEnteris
                    show={modalShow}
                    data={data}
                    onHide={() => setModalShow(false)}
                  />
                </div>
                <div className="col-lg-6 hideOnPrint">
                  <h6 className="heading-wrapper">Order Notes</h6>
                  <div className="d-flex align-items-center form-group">
                    <label htmlFor="update_delivery_status">
                      Order Status :
                    </label>
                    <select
                      className="form-select"
                      name="orderStatusId"
                      aria-label="Default select example"
                      defaultValue={""}
                      onChange={onChangehandler}
                      value={
                        shows ? data[0]?.status[0]?._id : inputVal.orderStatusId
                      }
                      style={{ height: 38 + "px", fontSize: 13 + "px" }}
                    >
                      {/* <option value={data?.getOrderTrans[0]?.orderStatusId._id}>
                        {data?.getOrderTrans[0]?.orderStatusId.orderStatusName}
                      </option> */}
                      {orderStatusData &&
                        orderStatusData.map((item, i) => {
                          return (
                            <option value={item._id} key={i}>
                              {item.orderStatusName}
                            </option>
                          );
                        })}
                    </select>
                  </div>
                  <div className="form-group mt-3">
                    <textarea
                      className="form-control"
                      placeholder="Add Note"
                      name="Note"
                      rows={2}
                      onChange={onChangehandler}
                      value={inputVal.Note}
                    ></textarea>
                  </div>
                  <div className="toggle-wrapper">
                    <ToggleStatus />
                    <span>Send to Customer</span>
                  </div>
                  <div className="btn-wrapper">
                    <button
                      type="button"
                      onClick={submitOrderStd}
                      className="btn btn-primary"
                    >
                      Submit
                    </button>
                  </div>

                  {/* DELEVRY BOY */}

                  {isDeleveryBoy === "false" && (
                    <div className="assignPickup">
                      <h6>Assign To Delevery Boy</h6>
                      <div className="d-flex align-items-center form-group">
                        <label htmlFor="update_delivery_status">
                          Delevery Boy:
                        </label>
                        <select
                          className="form-select"
                          name="deliveryBoy"
                          aria-label="Default select example"
                          defaultValue={""}
                          onChange={changeHandleBoy}
                          style={{ height: 38 + "px", fontSize: 13 + "px" }}
                        >
                          <option>Select Delivery Boy</option>
                          {dataBoy &&
                            dataBoy.map((item) => {
                              <option>Select Option</option>;
                              return (
                                <option
                                  key={item._id}
                                  id={item._id}
                                  value={item._id}
                                >
                                  {item.firstname} {item?.lastname}
                                </option>
                              );
                            })}
                        </select>
                      </div>

                      <h6>Note..</h6>
                      <div
                        className="form-floating"
                        style={{ margin: "8px 0" }}
                      >
                        <textarea
                          name="note"
                          onChange={changeHandleBoy}
                          className="form-control"
                          placeholder="Leave a comment here"
                          id="floatingTextarea"
                        ></textarea>
                      </div>

                      <div style={{ display: "flex", justifyContent: "end" }}>
                        <button
                          type="button"
                          className="btn btn-primary"
                          onClick={sendAssignBoy}
                        >
                          Send
                        </button>
                      </div>
                    </div>
                  )}
                </div>

                {/* Billing */}
                <div className="col-md-4 hideOnPrint">
                  <div className="addressDetailSec">
                    <div className="addressDetailInfo">
                      <h6 className="heading-wrapper">Billing Address</h6>
                      {/* { data[0].btype === "billing" && ()} */}
                      <ul>
                        <li>
                          <strong>Address Line 1:</strong>
                          <span>{data[0].billing?.baddressLine1}</span>
                        </li>
                        <li>
                          <strong> Address Line 2: </strong>
                          <span>{data[0].billing?.baddressLine2}</span>
                        </li>
                        <li>
                          <strong>Province:</strong>
                          <span>{data[0].billing?.bprovince}</span>
                        </li>

                        <li>
                          <strong>ZIP:</strong>
                          <span>{data[0].billing?.bzip}</span>
                        </li>
                        <li>
                          <strong>City:</strong>
                          <span>{data[0].billing?.bcity}</span>
                        </li>
                        <li>
                          <strong> State:</strong>
                          <span>{data[0].billing?.bstate}</span>
                        </li>
                        <li>
                          <strong>Country:</strong>
                          <span>{data[0].billing?.bcountry}</span>
                        </li>

                        {/* <li>
                            <strong>Company*:</strong>
                            {data[0].bcompany}
                          </li> */}
                      </ul>
                    </div>
                  </div>
                </div>

                {data[0].products[0]?.deliveryType === "HOME DELIVERY" ? (
                  <div className="col-md-4">
                    <div className="addressDetailSec">
                      <div className="addressDetailInfo">
                        <h6 className="heading-wrapper">Shipping Address</h6>
                        <ul>
                          <li>
                            <strong>Address Line 1:</strong>
                            <span>
                              <span>
                                {" "}
                                {data[0].shipping?.addressLine1
                                  ? data[0].shipping?.addressLine1
                                  : data[0].shipping?.baddressLine1}
                              </span>
                            </span>
                          </li>
                          <li>
                            <strong> Address Line 2: </strong>
                            {/* <span>{data[0].shipping?.addressLine2}</span> */}
                            <span>
                              {" "}
                              {data[0].shipping?.addressLine2
                                ? data[0].shipping?.addressLine2
                                : data[0].shipping?.baddressLine2}
                            </span>
                          </li>
                          <li>
                            <strong>City:</strong>
                            <span>
                              {data[0].shipping?.city
                                ? data[0].shipping?.city
                                : data[0].shipping?.bcity}
                            </span>
                          </li>
                          <li>
                            <strong> State:</strong>
                            {/* <span>{data[0].shipping?.state}</span> */}
                            <span>
                              {data[0].shipping?.state
                                ? data[0].shipping?.state
                                : data[0].billing?.bstate}
                            </span>
                          </li>
                          <li>
                            <strong>Province:</strong>
                            {/* <span>{data[0].shipping?.province}</span> */}
                            <span>
                              {data[0].shipping?.province
                                ? data[0].shipping?.province
                                : data[0].billing?.bprovince}
                            </span>
                          </li>

                          <li>
                            <strong>Country:</strong>
                            {/* <span>{data[0].shipping?.country}</span> */}
                            <span>
                              {data[0].shipping?.country
                                ? data[0].shipping?.country
                                : data[0].billing?.bcountry}
                            </span>
                          </li>

                          <li>
                            <strong>Name:</strong>
                            <span>
                              {data[0]?.shipping?.bfirstname +
                                " " +
                                data[0]?.shipping?.blastname}
                            </span>
                          </li>
                          <li>
                            <strong>Email:</strong>
                            <span>
                              {data[0].shipping?.email
                                ? data[0].shipping?.email
                                : data[0].billing?.bemail}
                            </span>
                          </li>
                          <li>
                            <strong>Phone:</strong>
                            <span>
                              {data[0].shipping?.phone
                                ? data[0].shipping?.phone
                                : data[0].billing?.bphone}
                            </span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="col-md-4">
                    <div className="addressDetailSec">
                      <div className="addressDetailInfo">
                        <h6 className="heading-wrapper">
                          Pickup Point Address
                        </h6>
                        <ul>
                          <li>
                            <strong>PickUp Point Name:</strong>
                            <span>
                              {data[0].pickupAddress?.pickupPoint_name}
                            </span>
                          </li>
                          <li>
                            <strong>PickUp Point sManager:</strong>
                            {/* <span>{data[0]pickupAddress?.pickUpManagerSchema}</span> */}
                          </li>
                          <li>
                            <strong>Address:</strong>
                            <span>{data[0].pickupAddress?.address}</span>
                          </li>
                          {/* <li>
                            <strong> Location : </strong>
                            <span>{data[0]pickupAddress?.location}</span>

                          </li> */}
                          <li>
                            <strong>Province:</strong>
                            <span>{data[0].pickupAddress?.province}</span>
                          </li>
                          <li>
                            <strong> Phone:</strong>
                            <span>{data[0].pickupAddress?.phone}</span>
                          </li>
                          <li>
                            <strong>Email:</strong>
                            <span>{data[0].pickupAddress?.email}</span>
                          </li>

                          {/* <li>
                            <strong>PickUp Point Status:</strong>
                            <span>{data[0]pickupAddress?.pickUpPointStatus}</span>

                          </li> */}
                          {/* <li>
                            <strong>PickUp Manager Schema:</strong>
                            <span>{data[0]pickupAddress?.pickUpManagerSchema}</span>

                          </li> */}
                        </ul>
                      </div>
                    </div>
                  </div>
                )}

                <div className="col-md-4 hideOnPrint">
                  <div className="addressDetailSec">
                    <div className="addressDetailInfo">
                      <h6 className="heading-wrapper">Seller Address</h6>
                      <ul>
                        <li>
                          <strong>Seller Name:</strong>
                          <span>
                            {data[0]?.seller?.firstname +
                              " " +
                              data[0].Seller?.lastname}
                          </span>
                        </li>
                        <li>
                          <strong>Seller Company Name</strong>
                          <span>jk</span>
                        </li>

                        <li>
                          <strong>Address Line 1</strong>
                          <span>{data[0]?.seller?.addressLine1}</span>
                        </li>
                        <li>
                          <strong>Address line 2,</strong>
                          <span>{data[0]?.seller?.addressLine2}</span>
                        </li>
                        <li>
                          <strong>City</strong>
                          <span>{data[0]?.seller?.city}</span>
                        </li>
                        <li>
                          <strong>State</strong>
                          <span>{data[0]?.seller?.state}</span>
                        </li>

                        <li>
                          <strong>Country</strong>
                          <span>{data[0]?.seller?.country}</span>
                        </li>
                        <li>
                          <strong>Tax No</strong>
                          <span>{data[0]?.seller?.tax_number}</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              <div className="row p-3">
                <div className="col-lg-8">
                  <h6 className="heading-wrapper">Product Detail</h6>

                  <div className="row input-search-wrapper">
                    {/* <div className="col-lg-12 t-align-end">
                      <div className="">
                        <label>search:</label>
                        <input
                          className="search-inp"
                          type="number"
                          placeholder=""
                        />
                      </div>
                    </div> */}
                  </div>
                </div>
                <div className="col-lg-4">
                  <h6 className="heading-wrapper">Order Logs</h6>
                  <div className="order-date-sec">
                    {data[0].createdAt} Created
                  </div>
                </div>

                <div className="col-lg-12 table-responsive">
                  <table
                    className="table-bordered aiz-table invoice-summary table footable footable-1 breakpoint-xl"
                    style={{}}
                  >
                    <thead>
                      <tr className="bg-trans-dark footable-header">
                        <th
                          data-breakpoints="lg"
                          className="min-col footable-first-visible"
                          style={{ display: "table-cell" }}
                        >
                          S.No
                        </th>
                        <th width="10%" style={{ display: "table-cell" }}>
                          Product Image
                        </th>
                        <th
                          className="text-uppercase"
                          style={{ display: "table-cell" }}
                        >
                          Product
                        </th>
                        <th
                          className="text-uppercase"
                          style={{ display: "table-cell" }}
                        >
                          Variant
                        </th>

                        <th
                          data-breakpoints="lg"
                          className="min-col text-uppercase text-center"
                          style={{ display: "table-cell" }}
                        >
                          Quantity
                        </th>
                        <th
                          data-breakpoints="lg"
                          className="min-col text-uppercase text-center"
                          style={{ display: "table-cell" }}
                        >
                          Unit Price
                        </th>
                        <th
                          data-breakpoints="lg"
                          className="min-col text-uppercase text-center"
                          style={{ display: "table-cell" }}
                        >
                          Sub Total
                        </th>

                        <th
                          data-breakpoints="lg"
                          className="min-col text-uppercase text-center"
                          style={{ display: "table-cell" }}
                        >
                          TAX
                        </th>
                        {/* <th
                          data-breakpoints="lg"
                          className="min-col text-uppercase text-center"
                          style={{ display: "table-cell" }}
                        >
                          COUPON CODE
                        </th>
                        <th
                          data-breakpoints="lg"
                          className="min-col text-uppercase text-center"
                          style={{ display: "table-cell" }}
                        >
                          COUPON Discount
                        </th> */}

                        <th
                          data-breakpoints="lg"
                          className="min-col text-uppercase text-right footable-last-visible"
                          style={{ display: "table-cell" }}
                        >
                          Total
                        </th>
                        <th
                          data-breakpoints="lg"
                          className="min-col text-uppercase text-center footable-last-visible"
                          style={{ display: "table-cell" }}
                        >
                          Delivery Type
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {isSuccess &&
                        data[0].products?.map((item, i) => {
                          return (
                            <tr key={i}>
                              <td
                                className="footable-first-visible"
                                style={{ display: "table-cell" }}
                              >
                                {i + 1}
                              </td>
                              <td style={{ display: "table-cell" }}>
                                <Link to="#">
                                  <img
                                    height={50}
                                    src={
                                      item?.productId?.variations?.mainImage_url
                                        ?.url
                                    }
                                  />
                                </Link>
                              </td>
                              <td style={{ display: "table-cell" }}>
                                <strong>{item.productId?.name}</strong>
                                <small></small>
                                <br />
                              </td>
                              <td style={{ display: "table-cell" }}>
                                <strong>
                                  {item?.productId?.variations?.weight}
                                </strong>
                                <small></small>
                                <br />
                              </td>

                              <td
                                style={{
                                  display: "table-cell",
                                  textAlign: "right",
                                }}
                              >
                                {item?.qty}
                              </td>
                              <td
                                style={{
                                  display: "table-cell",
                                  textAlign: "right",
                                }}
                              >
                                <strong>{item?.price?.sale_rate}</strong>
                              </td>

                              <td
                                className="text-right"
                                style={{ display: "table-cell" }}
                              >
                                {item?.subTotal}
                              </td>

                              <td
                                className="text-right footable-last-visible"
                                style={{
                                  display: "table-cell",
                                  textAlign: "right",
                                }}
                              >
                                {item?.tax}
                              </td>

                              {/* <td
                                className="text-right footable-last-visible"
                                style={{ display: "table-cell" }}
                              >
                                {item[0].coupon_id?.code}
                              </td>
                              <td
                                className="text-right footable-last-visible"
                                style={{ display: "table-cell" }}
                              >
                                {item[0].coupon_id?.discount} in (  {item[0].coupon_id?.discount_type})
                              </td> */}
                              <td
                                className="text-right footable-last-visible"
                                style={{ display: "table-cell" }}
                              >
                                {item.total}
                              </td>
                              <td
                                className="text-center footable-last-visible"
                                style={{ display: "table-cell" }}
                              >
                                <span>{item.deliveryType}</span>
                                {/* {data[0].products[0]?.deliveryType} */}
                              </td>
                            </tr>
                          );
                        })}
                    </tbody>
                  </table>
                </div>

                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "end",
                  }}
                >
                  <div className="col-lg-3" style={{ alignSelf: "end" }}>
                    <div className="cartTotals">
                      <h5 className="cartTitle">Price Details</h5>

                      <div
                        className="subTotal"
                        style={{
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "space-between",
                        }}
                      >
                        <h6>Base Price</h6>
                        <p> {data[0].basePrice}</p>
                      </div>

                      <div
                        className="subTotal"
                        style={{
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "space-between",
                        }}
                      >
                        <h6>Coupon</h6>
                        <p>
                          {" "}
                          <span style={{ color: "rebeccapurple" }}>
                            {data[0].coupon_id?.code}
                          </span>{" "}
                          ( {data[0].coupon_id?.discount}{" "}
                          {data[0].coupon_id?.discount_type === "Percent"
                            ? "Percent"
                            : "Amount"}{" "}
                          )
                        </p>
                      </div>
                      <div
                        className="subTotal"
                        style={{
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "space-between",
                        }}
                      >
                        <h6>Discount Amount </h6>
                        <p> {data[0].discount}</p>
                      </div>

                      <div
                        className="subTotal"
                        style={{
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "space-between",
                        }}
                      >
                        <h6>Tax Amount</h6>
                        <p> {data[0].tax}</p>
                      </div>
                      <div
                        className="subTotal"
                        style={{
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "space-between",
                        }}
                      >
                        <h6>Shipping</h6>
                        <p> {data[0].shippingCost}</p>
                      </div>
                      <div
                        style={{
                          margin: "4px 0",
                          borderTop: "1px solid black",
                        }}
                      ></div>
                      <div
                        className="subTotal"
                        style={{
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "space-between",
                        }}
                      >
                        <h6>Grand Total</h6>
                        <p> {data[0].grandTotal}</p>
                      </div>
                    </div>
                  </div>
                  <div className="btn-wrapper hideOnPrint">
                    <button
                      type="button"
                      className="btn btn-primary"
                      onClick={printInvoice}
                    >
                      Print Invoice
                    </button>
                  </div>
                </div>

                {/* <div className="text-right">
                  <h6 style={{ textAlign: "right" }}>Base Price : {data[0].basePrice}</h6>
                  {data[0].coupon_id?.code && <div className="mb-2" style={{ textAlign: "end" }}>
                    <div className="pr-2">COUPON CODE : <strong> {data[0].coupon_id?.code} ( {data[0].coupon_id?.discount} ({data[0].coupon_id?.discount_type === 'Percent' ? 'Percent' : 'Amount'}) )</strong></div>
                  </div>}
                  <h6 style={{ textAlign: "right" }}>Discount Amount : {data[0].discount}</h6>
                  <h6 style={{ textAlign: "right" }}>Tax Amount : {data[0].tax}</h6>
                  <div className="mb-2"><big className="pr-2">Shipping Cost:<strong> {data[0].shippingCost}</strong></big></div>
                  <div><big className="pr-2">Grand Total:  <strong>{data[0].grandTotal}</strong></big></div>
                </div> */}
              </div>
            </div>
          </div>
          <div className="bg-white text-center py-3 px-15px px-lg-25px mt-auto"></div>
        </div>
      )}

      {error && <h6 className="ps-3">Data not found</h6>}
      <ToastContainer />
    </>
  );
}
export default OrderDetails;
