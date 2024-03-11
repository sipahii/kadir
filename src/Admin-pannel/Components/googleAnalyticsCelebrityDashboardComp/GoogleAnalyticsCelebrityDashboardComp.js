import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, BarChart, Bar } from 'recharts';
import { AiOutlineArrowUp } from 'react-icons/ai';
import Table from 'react-bootstrap/Table';

function GoogleAnalyticsCelebrityDashboardComp() {
    const data = [
        {
            name: 'August 2023',
            uv: 8000,
        },
        {
            name: 'September 2023',
            uv: 9000,
        },

    ];

    const data1 = [
        {
            name: 'India',
            uv: 22500,

        },
        {
            name: 'Austrailia',
            uv: 16000,

        },
        {
            name: 'Japan',
            uv: 15000,

        },
        {
            name: 'Russia',
            uv: 12080,

        },
        {
            name: 'Canada',
            uv: 10000,

        },
        {
            name: 'Dubai',
            uv: 9090,

        },
        {
            name: 'SriLanka',
            uv: 8090,

        },
        {
            name: 'Qatar',
            uv: 7090,

        },
        {
            name: 'Bangladesh',
            uv: 6490,

        },
        {
            name: 'America',
            uv: 5490,

        },
        {
            name: 'China',
            uv: 4490,

        },
        {
            name: 'Nepal',
            uv: 3490,

        },
        {
            name: 'Myanamar',
            uv: 2490,

        },
        {
            name: 'Madieves',
            uv: 1490,

        },
       
    ];

    const data2 = [
        {
            name: '1 Sep 2023',
            uv: 3,

        },
        {
            name: '12 Sep 2023',
            uv: 3,

        },
        {
            name: '13 Sep 2023',
            uv: 3,

        },
        {
            name: '14 Sept 2023',
            uv: 3,

        },
        {
            name: 'September 2023',
            uv: 6,

        },
        {
            name: 'September 2023',
            uv: 3,

        },

    ];
    const data3 = [
        {
            name: 'Male',
            uv: 4,

        },
        {
            name: 'Female',
            uv: 3,

        },
        {
            name: 'Trans Gender',
            uv: 2,

        },
        {
            name: 'Other',
            uv: 3,

        },

    ];

    return (
        <>
            <div className='container' style={{ marginLeft: 60, marginRight: 60 }}>
                <div className='d-flex' style={{display:'flex',justifyContent:'space-around'}}>
                    <div className='bg-white col-md-2 m-0 pl-2  border-secondary mr-3' style={{ width: '90', height: 130 }}>
                        <div className=" m-0 p-0 ">
                            <h6 className='fs-5 mt-2 ml-1 ' style={{ color: '#525252' }}>Total Visits</h6>
                            <div className='justify-content-center d-flex'>
                                <h3>89.2B</h3>
                            </div>
                            <div className='ml-1'>
                                <span className='fs-6 text-success m-0 p-0 '><AiOutlineArrowUp />1,300%</span>
                                <span className='fs-6 m-0 p-0 '> since last period</span>
                            </div>

                        </div>
                    </div>
                   
                    <div className='bg-white col-md-2 m-0 pl-2  border-secondary mr-3' style={{ width: '90', height: 130 }}>
                        <div className=" m-0 p-0 ">
                            <h6 className='fs-5 mt-2 ml-1 ' style={{ color: '#525252' }}>Bounce Rate</h6>
                            <div className='justify-content-center d-flex'>
                                <h3>38.53%</h3>
                            </div>
                            <div className='ml-1'>
                                <span className='fs-6 text-success m-0 p-0 '><AiOutlineArrowUp />%</span>
                                <span className='fs-6 m-0 p-0 '> since last period</span>
                            </div>

                        </div>
                    </div>
                    <div className='card col-md-2 m-0 pl-2 mr-3' style={{ width: '90', height: 130 }}>
                        <div className="  ">
                            <h6 className='fs-5 mt-2 ml-1 ' style={{ color: '#525252' }}>Pages Per Visit</h6>
                            <div className='justify-content-center d-flex'>
                                <h3>8.56</h3>
                            </div>
                            <div className='ml-1'>
                                <span className='fs-6 text-success m-0 p-0 '><AiOutlineArrowUp />%</span>
                                <span className='fs-6 m-0 p-0 '> since last period</span>
                            </div>

                        </div>
                    </div>
                    <div className='card col-md-2 m-0 pl-2 mr-3' style={{ width: '90', height: 130 }}>
                        <div className="  ">
                            <h6 className='fs-5 mt-2 ml-1 ' style={{ color: '#525252' }}>Avg Visit Duration</h6>
                            <div className='justify-content-center d-flex'>
                                <h3>00:10:19</h3>
                            </div>
                            <div className='ml-1'>
                                <span className='fs-6 text-success m-0 p-0 '><AiOutlineArrowUp />%</span>
                                <span className='fs-6 m-0 p-0 '> since last period</span>
                            </div>

                        </div>
                    </div>

                </div>
                <div className='row ' style={{ marginTop: 30, marginRight: 60 }} >
                    <div className='col-md-12 '>
                        <h5 className='m-0 p-0' style={{ color: '#006666' }}>Country</h5>
                        <hr className=' border-primary m-auto pt-2' />
                        <BarChart width={1000} height={300} data={data1}>
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="name" />
                            <YAxis />
                            <Tooltip />
                            <Legend />
                            <Bar dataKey="uv" fill="#8884d8" />

                        </BarChart>
                    </div>
                </div>
                {/* <div className='row ' style={{ marginTop: 30, marginRight: 60 }} >
                    <div className='col-md-12 '>
                        <h5 className='m-0 p-0' style={{ color: '#006666' }}>Traffic Status By Month</h5>
                        <hr className=' border-primary m-auto pt-2' />
                        <LineChart width={1000} height={250} data={data}
                            margin={{ top: 5, right: 30, left: 20, bottom: 5 }} style={{ marginTop: 20 }}>
                            <CartesianGrid strokeDasharray="3 3" fillOpacity={0.6} />
                            <XAxis dataKey="name" />
                            <YAxis />
                            <Tooltip />
                            <Legend />

                            <Line type="monotone" dataKey="uv" stroke="#0033cc" strokeWidth={4} />
                        </LineChart>
                    </div>
                </div> */}
                 <div className='row ' style={{ marginTop: 30, marginRight: 60 }} >
                    <div className='col-md-12 '>
                        <h5 className='m-0 p-0' style={{ color: '#006666' }}>Traffic Status By Month</h5>
                        <hr className=' border-primary m-auto pt-2' />
                        <LineChart width={1000} height={250} data={data2}
                            margin={{ top: 5, right: 30, left: 20, bottom: 5 }} style={{ marginTop: 20 }}>
                            <CartesianGrid strokeDasharray="3 3" fillOpacity={0.6} />
                            <XAxis dataKey="name" />
                            <YAxis />
                            <Tooltip />
                            <Legend />

                            <Line type="monotone" dataKey="uv" stroke="#0033cc" strokeWidth={4} />
                        </LineChart>
                    </div>
                </div>
                <div className='row ' style={{ marginTop: 30, marginRight: 60 }} >
                    <div className='col-md-12 '>
                        <h5 className='m-0 p-0' style={{ color: '#006666' }}>Gender</h5>
                        <hr className=' border-primary m-auto pt-2' />
                        <BarChart width={1000} height={300} data={data3}>
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="name" />
                            <YAxis />
                            <Tooltip />
                            <Legend />
                            <Bar dataKey="uv" fill="#8884d8" />

                        </BarChart>
                    </div>
                </div>
               
                <div className='row' style={{ marginTop: 30, marginRight: 60 }}>
                    <div className='col-md-6'>
                        <h4 className='m-0 p-0' style={{ color: '#006666' }}>Gender Wise</h4>
                        <hr className=' border-primary  m-auto mt-2' />
                        <Table striped className='mt-3 border-light m-0 p-0'>
                            <thead className='m-0 p-0' >
                                <tr>
                                    <th>Gender</th>
                                    <th>No Of Visits</th>
                                    <th>Average Duration</th>
                                    <th>Pages Per Visit</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Male</td>
                                    <td>1134</td>
                                    <td>00:10:19</td>
                                    <td>8.56</td>
                                </tr>
                                <tr>
                                    <td>Female</td>
                                    <td>1235</td>
                                    <td>00:10:12</td>
                                    <td>7.46</td>
                                </tr>
                                <tr>
                                    <td>Transgender</td>
                                    <td>2367</td>
                                    <td>00:10:22</td>
                                    <td>6.88</td>
                                </tr>
                                <tr>
                                    <td>Others</td>
                                    <td>4343</td>
                                    <td>00:10:12</td>
                                    <td>9.09</td>
                                </tr>
                               
                            </tbody>
                        </Table>
                    </div>
                    <div className='col-md-6'>
                        <h4 className='m-0 p-0' style={{ color: '#006666' }}>Age Distributor</h4>
                        <hr className=' border-primary m-auto mt-2' />
                        <Table striped className='mt-3 border-light m-0 p-0'>
                        <thead className='m-0 p-0' >
                                <tr>
                                    <th>Age Group</th>
                                    <th>No Of Visits</th>
                                    <th>Average Duration</th>
                                    <th>Pages Per Visit</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>18-24</td>
                                    <td>1134</td>
                                    <td>00:10:19</td>
                                    <td>8.56</td>
                                </tr>
                                <tr>
                                    <td>25-30</td>
                                    <td>1235</td>
                                    <td>00:10:12</td>
                                    <td>7.46</td>
                                </tr>
                                <tr>
                                    <td>35-40</td>
                                    <td>2367</td>
                                    <td>00:10:22</td>
                                    <td>6.88</td>
                                </tr>
                                <tr>
                                    <td>40-60</td>
                                    <td>4343</td>
                                    <td>00:10:12</td>
                                    <td>9.09</td>
                                </tr>
                               
                            </tbody>
                        </Table>
                    </div>

                </div>




            </div>
            <div className="bg-white text-center py-3 px-15px px-lg-25px mt-5">
            </div>
        </>
    )
}

export default GoogleAnalyticsCelebrityDashboardComp