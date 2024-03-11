import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import { Link, Outlet } from 'react-router-dom';
import SalesTaxReport from './salesTaxReport';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import { AiFillHeart } from 'react-icons/ai';
import { AiFillFileImage } from 'react-icons/ai';
import { AiFillFileExcel } from 'react-icons/ai';
import { BsCaretDownSquareFill } from 'react-icons/bs';
import { BsCaretUpSquareFill } from 'react-icons/bs';
import { AiFillStar } from 'react-icons/ai';
import axios from 'axios';

function TaxReport() {

    const [saleTaxData, setSaleTaxData] = useState(null);
    const [purchaseTaxData, setPurchaseTaxData] = useState(null);

    const getSaleTaxData = async () => {
        const res = await axios.get('https://onlineparttimejobs.in/api/report/saleTaxReports');
        setSaleTaxData(res.data)
    };

    const getPurchaseTaxData = async () => {
        const res = await axios.get('https://onlineparttimejobs.in/api/report/purchaseTaxReports');
        setPurchaseTaxData(res.data)
    }

    useEffect(() => {
        getSaleTaxData()
    }, []);

    useEffect(() => {
        getPurchaseTaxData()
    }, []);




    // console.log('sale tax d ', saleTaxData)
    console.log('purchase tax d ', purchaseTaxData)

    return (
        <>
            <div className="aiz-main-content">
                <div className="px-15px px-lg-25px">
                    <div className="card">

                        <Tabs
                            defaultActiveKey="sales"
                            id="uncontrolled-tab-example"
                            className="mb-3">
                            <Tab eventKey="sales" title="Sales">
                                <div className='tax_report_heading_icon_sec'>
                                    <div className='tax_report_heading'>
                                        <AiFillHeart style={{ color: '#428bca', fontSize: '16px', marginRight: '10px' }} />
                                        <h5>Sale Tax Report</h5>
                                    </div>
                                    {/* <div className='icon_box'>
                                        <ul className='tax_icon_list'>
                                            <li>
                                                <AiFillFileImage />
                                            </li>
                                            <li>
                                                <AiFillFileExcel />
                                            </li>
                                            <li>
                                                <BsCaretDownSquareFill />
                                            </li>
                                            <li>
                                                <BsCaretUpSquareFill />
                                            </li>
                                        </ul>
                                    </div> */}
                                </div>


                                <div className='tax_customise_report_title'>
                                    <p>Please customize the report below</p>
                                </div>

                                <div className='all_taxes_amount_calulation_box'>
                                    <div className='sales_amount_box'>
                                        <div className='blue_box'>
                                            <h4>3555,55</h4>
                                            <p>Sales Amount</p>
                                        </div>
                                    </div>
                                    <div className='prod_tax_amount_box'>
                                        <div className='purpule_box'>
                                            <h4>3555,55</h4>
                                            <p>Product Tax Amount</p>
                                        </div>
                                    </div>
                                    <div className='order_tax_amount_box'>
                                        <div className='orange_box'>
                                            <h4>3555,55</h4>
                                            <p>Order Tax Amount</p>
                                        </div>
                                    </div>
                                </div>

                                <div style={{ margin: "10px 0", display: "flex", justifyContent: "end" }}>
                                    <input style={{ width: '250px' }} placeholder="Search" className="form-control" />
                                    <button type="button" style={{ margin: "0 10px" }} className="btn btn-info">Search</button>
                                </div>

                                <div style={{ padding: '20px' }}>
                                    <Table striped bordered>
                                        <thead>
                                            <tr style={{ backgroundColor: '#428bca', color: '#ffffff' }}>
                                                <th>#</th>
                                                <th>Date</th>
                                                <th>Name</th>
                                                <th>Image</th>
                                                <th>Reference No</th>
                                                <th>Status</th>
                                                <th>Warehouse</th>
                                                <th>Biller</th>
                                                <th>Product Tax</th>
                                                <th>Order Tax</th>
                                                <th>Grand Total</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {saleTaxData && saleTaxData.map((salesItem, i) => {
                                                console.log('salesItem-----', salesItem)
                                                return <tr key={i}>
                                                    <td>{i + 1}</td>
                                                    <td></td>
                                                    <td>{salesItem?.name?.[0]}</td>
                                                    <td>
                                                        <img style={{ width: '100px', height: '100px' }} src={salesItem.image[0]?.url}></img>
                                                    </td>
                                                    <td>
                                                        {salesItem.referenceNo?.map((salesRefItem, i) => {
                                                            return <div key={i}>
                                                                {salesRefItem.referenceNo && salesRefItem.referenceNo}
                                                            </div>
                                                        })}
                                                    </td>
                                                    <td></td>
                                                    <td></td>
                                                    <td></td>
                                                    <td>{salesItem.productTax}</td>
                                                    <td></td>
                                                    <td>{salesItem.total}</td>
                                                </tr>
                                            })}
                                        </tbody>
                                    </Table>

                                </div>
                            </Tab>


                            <Tab eventKey="purchases" title="Purchases">

                                <div className='tax_report_heading_icon_sec'>
                                    <div className='tax_report_heading'>
                                        <AiFillStar style={{ color: '#428bca', fontSize: '16px', marginRight: '10px' }} />
                                        <h5>Purchase Tax Report</h5>
                                    </div>
                                    {/* <div className='icon_box'>
                                        <ul className='tax_icon_list'>
                                            <li>
                                                <AiFillFileImage />
                                            </li>
                                            <li>
                                                <AiFillFileExcel />
                                            </li>
                                            <li>
                                                <BsCaretDownSquareFill />
                                            </li>
                                            <li>
                                                <BsCaretUpSquareFill />
                                            </li>
                                        </ul>
                                    </div> */}
                                </div>


                                <div className='tax_customise_report_title'>
                                    <p>Please customize the report below</p>
                                </div>

                                <div className='all_taxes_amount_calulation_box'>
                                    <div className='sales_amount_box'>
                                        <div className='blue_box'>
                                            <h4>3555,55</h4>
                                            <p>Sales Amount</p>
                                        </div>
                                    </div>
                                    <div className='prod_tax_amount_box'>
                                        <div className='purpule_box'>
                                            <h4>3555,55</h4>
                                            <p>Product Tax Amount</p>
                                        </div>
                                    </div>
                                    <div className='order_tax_amount_box'>
                                        <div className='orange_box'>
                                            <h4>3555,55</h4>
                                            <p>Order Tax Amount</p>
                                        </div>
                                    </div>
                                </div>

                                <div style={{ margin: "10px 0", display: "flex", justifyContent: "end" }}>
                                    <input style={{ width: '250px' }} placeholder="Search" className="form-control" />
                                    <button type="button" style={{ margin: "0 10px" }} className="btn btn-info">Search</button>
                                </div>

                                <div style={{ padding: '20px' }}>
                                    <Table striped bordered>
                                        <thead>
                                            <tr style={{ backgroundColor: '#428bca', color: '#ffffff' }}>
                                                <th>#</th>
                                                <th>Date</th>
                                                <th>Name</th>
                                                <th>Image</th>
                                                <th>Reference No</th>
                                                <th>Status</th>
                                                <th>Warehouse</th>
                                                <th>Biller</th>
                                                <th>Product Tax</th>
                                                <th>Order Tax</th>
                                                <th>Grand Total</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {purchaseTaxData && purchaseTaxData.map((item, i) => {
                                                console.log('item---', item)
                                                return <tr key={i}>
                                                    <td>{i + 1}</td>
                                                    <td></td>
                                                    <td>{item.name?.[0]}</td>
                                                    <td>
                                                        <img style={{ width: '100px', height: '100px' }} src={item.image[0]?.url}></img>
                                                    </td>
                                                    <td>
                                                        {item.referenceNo?.map((refItem, i) => {
                                                            // console.log('refItem', refItem)
                                                            return <div key={i}>
                                                                {refItem.referenceNo && refItem.referenceNo}
                                                            </div>
                                                        })}
                                                    </td>
                                                    <td>----</td>
                                                    <td>----</td>
                                                    <td>-----</td>
                                                    <td>{item.productTax}</td>
                                                    <td></td>
                                                    <td>{item.grandTotal}</td>
                                                </tr>
                                            })}


                                        </tbody>
                                    </Table>

                                </div>
                            </Tab>


                        </Tabs>


                        {/* <h5>Tax Report</h5> */}


                    </div>
                </div>

            </div>
        </>
    )
}

export default TaxReport