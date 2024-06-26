import React, { useEffect } from 'react';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import './AddPosComp.css';
import { FaPencilAlt } from 'react-icons/fa'
import { RiDeleteBin6Line } from 'react-icons/ri'
import ModalCombo from './../../../Pages/addComboProduct/ModalCombo';

// import { FiEdit } from 'react-icons/fi';
import RightSection from './RightSection';
import ColorFulTable from './ColorFulTable';
import TotalPayableComp from './TotalPayableComp';
import OrderTax from './OrderTax';
import Discount from './Discount';
import ThirdInput from './ThirdInput';
import ViewComp from './ViewComp';
import AddCustomer from './AddCustomer';
import { useAddPurchaseCartMutation } from '../../all-products/allproductsApi/allProductsApi';
import axios from 'axios';
import { AiFillAmazonCircle } from 'react-icons/ai';
import { FiEdit } from 'react-icons/fi';
import { token } from '../../../common/TokenArea';
import ModalProducts from './ModalProducts';
import UpdateCustomer from './UpdateCustomer';

function AddPosComp() {
  const [spinn, setSpinn] = useState(false);
  const [cutomerId, setCustomerId] = useState();
  const [usernameD, setUserNameD] = useState();
  const [viewCustomerD, setViewCustomerD] = useState();
  const [modalShow, setModalShow] = useState(false)
  const [showCombo, setShowCombo] = useState([])
  const [showCombo2, setShowCombo2] = useState([])
  const [cartDataa, setcartData] = useState(null)
  const [show, setShow] = useState(true);
  const [smShow, setSmShow] = useState(false);
  const [bringedDiscountVal, setBringedDiscountVal] = useState({ discount: '', discount_type: '' });
  const [bringedOrderTaxVal, setBringedOrderTaxVal] = useState({ order_tax: '' });
  const [sellerDetailD, setSellerDetailD] = useState();

  const token = window.localStorage.getItem('token');
  const sellerID = window.localStorage.getItem('isSellerId');
  const isSellerLogin = window.localStorage.getItem("isSellerLogin");

  const handDown = async (e) => {
    if (e.key === 'Enter') {
      const clone = e.target.value;
      setSpinn(true);
      try {
        const res = await axios.get(`https://onlineparttimejobs.in/api/customer/search/${clone}`, {
          headers: {
            'Content-type': 'application/json; charset=UTF-8',
            'Authorization': 'Bearer ' + token
          },
        })
        console.log('setViewCustomerD', res?.data)
        setViewCustomerD(res?.data)
        setSmShow(true);
        setSpinn(false);
      } catch (error) {
        alert('Something went wrong')
        setSmShow(false)
        setSpinn(false);
      }
    }
  };
  const handleChangeUserD = (e) => {
    setUserNameD(e.target.value)
  };
  const sendDataCus = (item) => {
    setUserNameD(item?.firstname + " " + item?.lastname)
    setCustomerId(item?._id)
    setSmShow(false)
  };
  const [setCart, { isLoading, data: cartData, isError: isCartsError }] = useAddPurchaseCartMutation();
  const bringDiscountInpVal = (discountVal) => {
    setBringedDiscountVal(discountVal)
  };
  const bringOrderTaxInpVal = (orderTaxVal) => {
    setBringedOrderTaxVal(orderTaxVal)
  };
  const SaveData = async (val) => {
    if (!val) {
      setModalShow(false)
      const arr = [...showCombo?.cart?.products]
      const aaa = arr.map((item) => {
        return { productId: item.productId, variantId: item.uid, qty: 1, sku: item?.prices?.sku, seller_id: item?.prices?.seller_id }
      });
      try {
        setSpinn(true)
        const resp = await axios.post('https://onlineparttimejobs.in/api/pos/cart/get', { products: aaa, shippingCost: 0, discount_type: bringedDiscountVal.discount_type, discount: bringedDiscountVal.discount, order_tax: bringedOrderTaxVal.order_tax },
          {
            headers: {
              'Content-type': 'application/json; charset=UTF-8',
              'Authorization': 'Bearer ' + token
            },
          }
        );
        setShowCombo(resp?.data)
        setSpinn(false)
      } catch (error) {
        setSpinn(false)
        alert("Server !Error")
      }
    } else {
      setModalShow(false)
      const arr = [...showCombo, ...val]
      const aaa = arr.map((item) => {
        // console.log('itemProdIDCheck----', item)
        return { productId: item.productId, variantId: item.uid, qty: 1, sku: item?.prices?.sku, seller_id: item?.prices?.seller_id }
      });

      try {
        setSpinn(true)
        const resp = await axios.post('https://onlineparttimejobs.in/api/pos/cart/get',
          { products: aaa, shippingCost: 0, discount_type: bringedDiscountVal.discount_type, discount: bringedDiscountVal.discount, order_tax: bringedOrderTaxVal.order_tax },
          {
            headers: {
              'Content-type': 'application/json; charset=UTF-8',
              'Authorization': 'Bearer ' + token
            },
          }
        );
        // setShowCombo(resp?.data?.cart?.products);
        setShowCombo(resp?.data);
        setShowCombo2(resp?.data);
        setSpinn(false)
      } catch (error) {
        setSpinn(false)
        alert("Server !Error")
      }
    }
  };
  let totalPosProductsItem = 0;
  let totalPosProductsPrice = 0;
  for (let i = 0; i < showCombo?.cart?.products?.length; i++) {
    totalPosProductsItem = totalPosProductsItem + showCombo?.cart?.products[i]?.qty;
    totalPosProductsPrice = totalPosProductsPrice + showCombo?.cart?.products[i]?.sale_rate
  };


  const getSellerdetailDataForAdmin = async () => {
    const res = await axios.get(`https://onlineparttimejobs.in/api/sellerList/65ce27b41e8c7bc1a1065ba9`, {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    });
    console.log('SellerDetailForAdmin--', res?.data)
    setSellerDetailD(res?.data)
  };

  // const getSellerdetailDataForSeller = () => {
  //   const res = axios.get(`https://onlineparttimejobs.in/api/sellerList/${sellerID}`, {
  //     headers: {
  //       'Authorization': `Bearer ${token}`
  //     }
  //   });
  //   console.log('SellerDetailForSeller--', res?.data)
  //   setSellerDetailD(res?.data)
  // };

  useEffect(() => {
    // if (isSellerLogin === true) {
    //   getSellerdetailDataForSeller();
    // }
    getSellerdetailDataForAdmin();
  }, []);


  return (
    <>
      <div className='main_pos_wrapper'>
        <div className='leftside'>
          {spinn && <div className="preloaderCount">
            <div className="spinner-border" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
          </div>}
          <form>
            <div className='topInp'>
              <input type='text' placeholder='Type here' name='UsernameD' autoComplete='off' onKeyDown={handDown} onChange={handleChangeUserD} value={usernameD}></input>
              {/* <input type='text' name='user' placeholder='Type here' onKeyDown={handDown}></input> */}
              <UpdateCustomer viewCustomerD={viewCustomerD} cutomerId={cutomerId} />
              <ViewComp viewCustomerD={viewCustomerD} cutomerId={cutomerId} />
              <AddCustomer />
            </div>
            {smShow && viewCustomerD?.map((item, i) => {
              return <span onClick={() => sendDataCus(item)} style={{ backgroundColor: 'gainsboro', padding: '5px', marginTop: '4px', marginBottom: '5px', border: '1px solid black', display: 'block', width: '100%', cursor: 'pointer' }}>{item?.firstname + " " + item?.lastname}</span>
            })}
            {/* <div className='secInp'>
              <select className="form-select" aria-label="Default select example">
                <option value="2">Two</option>
                <option value="3">Three</option>
              </select>
            </div> */}
            <ThirdInput setCart={setCart} setcartData={setcartData} setModalShow={setModalShow} setShow={setShow} />
          </form>
          {modalShow && <ModalProducts
            show={modalShow}
            onHide={() => setModalShow(false)}
            cartData={cartDataa}
            SaveData={SaveData}
            showCombo={showCombo2}
          />}
          <div className='table_wrapper'>
            <div style={{ height: '380px' }}>
              <table className='table'>
                <thead>
                  <tr>
                    <th>Product</th>
                    <th>Variant</th>
                    <th>Price</th>
                    <th>Qty</th>
                    <th>Subtotal</th>
                    <th>
                      <RiDeleteBin6Line />
                    </th>
                  </tr>
                </thead>
                {/* <tbody style={{ height: '310px' }} > */}
                <tbody>
                  {showCombo && showCombo?.cart?.products?.map((item, i) => {
                    console.log("getApi----", item)
                    return <tr key={i}>
                      <td style={{ display: 'table-cell' }}>
                        <span className='txt-bold ps-1'>{item?.productName}</span>
                      </td>
                      <td style={{ display: 'table-cell' }}>
                        {/* <span className='txt-bold ps-1'></span> */}{item?.variant?.weight}
                      </td>
                      <td className='txt-bold ps-1 text-end' style={{ display: 'table-cell' }}>{item?.sale_rate}</td>
                      <td className='txt-bold ps-1 text-end' style={{ display: 'table-cell' }}>{item?.qty}</td>
                      <td className='txt-bold ps-1 text-end' style={{ display: 'table-cell' }}>{item?.subtotal}</td>
                      <td className='txt-bold ps-1' style={{ display: 'table-cell' }}></td>
                    </tr>
                  })}
                </tbody>
              </table>
            </div>
            <table className='font-bold' >
              <tr>
                <td>Items</td>
                <td>{totalPosProductsItem}</td>
                <td>Total</td>
                <td className='text-right'>{totalPosProductsPrice}</td>
              </tr>
              <tr>
                <OrderTax SaveData={SaveData} bringOrderTaxInpVal={bringOrderTaxInpVal} showCombo={showCombo2} />
                <Discount SaveData={SaveData} bringDiscountInpVal={bringDiscountInpVal} showCombo={showCombo2} />
              </tr>
            </table>
            <TotalPayableComp showCombo={showCombo2} totalPosProductsPrice={totalPosProductsPrice} bringedDiscountVal={bringedDiscountVal} bringedOrderTaxVal={bringedOrderTaxVal} />
          </div>
          <ColorFulTable showCombo={showCombo2} totalPosProductsPrice={totalPosProductsPrice} bringedDiscountVal={bringedDiscountVal} bringedOrderTaxVal={bringedOrderTaxVal} totalPosProductsItem={totalPosProductsItem} viewCustomerD={viewCustomerD} cutomerId={cutomerId} sellerDetailD={sellerDetailD} />
        </div>
        <RightSection />
      </div >
    </>
  )
}

export default AddPosComp