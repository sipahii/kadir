import React from 'react';
import { Link } from 'react-router-dom';
import { AiTwotoneHome } from 'react-icons/ai';
import { useGetCustomersQuery } from '../../all-products/allproductsApi/allProductsApi';

function CustomerShippingAddress() {

    const { isLoading, data } = useGetCustomersQuery();
    console.log(data)

    return (
        <>

            <div className="aiz-main-content">
                <div className="px-15px px-lg-25px">
                    <div className="aiz-titlebar mt-2 mb-4">
                        <div className="row align-items-center">
                            <div className="col-md-6">
                                <h1 className="h3">Shipping</h1>
                            </div>
                        </div>
                    </div>
                    <div className="card">
                        <div className="card-header row gutters-5">
                            <div className="col">
                                <h5 className="mb-md-0 h6">Shipping Address</h5>
                            </div>
                            <div className="col-md-4">
                                <form>
                                    <div className="input-group input-group-sm">
                                        <input type="text" className="form-control" id="search" name="search" placeholder="Search" fdprocessedid="ef32ek" />
                                    </div>
                                </form>
                            </div>
                        </div>
                        <div className="card-body">

                            {isLoading ? <h2>Loading...</h2>
                                : <table className="table aiz-table mb-0 footable footable-1 breakpoint-xl" style={{}}>
                                    <thead>
                                        <tr className="footable-header">
                                            <th className="footable-first-visible" style={{ display: 'table-cell' }}>#</th>
                                            <th width="10%" style={{ display: 'table-cell' }}>First Name</th>
                                            <th width="10%" style={{ display: 'table-cell' }}>Last Name</th>
                                            <th width="10%" style={{ display: 'table-cell' }}>Email</th>
                                            <th data-breakpoints="md" style={{ display: 'table-cell' }}>Phone</th>
                                            <th data-breakpoints="md" className="text-right footable-last-visible" style={{ display: 'table-cell' }}>Options</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {data && data.map((item, i) => {
                                            return <tr key={item._id}>
                                                <td className="footable-first-visible" style={{ display: 'table-cell' }}>{i + 1}</td>
                                                <td style={{ display: 'table-cell' }}>{item.firstname}</td>
                                                <td style={{ display: 'table-cell' }}>{item.lastname}</td>
                                                <td style={{ display: 'table-cell' }}>{item.email}</td>
                                                <td style={{ display: 'table-cell' }}>{item.mobile}</td>

                                                <td className="text-right footable-last-visible" style={{ display: 'table-cell' }}>
                                                    <Link to={`detail/${item._id}`} className="btn btn-soft-info btn-icon btn-circle btn-sm" title="see shipping adress">
                                                        <AiTwotoneHome />
                                                    </Link>

                                                    <button type="button" className="btn btn-soft-danger btn-icon btn-circle btn-sm ms-2">
                                                        <i className="las la-trash" />
                                                    </button>
                                                </td>
                                            </tr>
                                        })}
                                    </tbody>
                                </table>
                            }
                            <div className="aiz-pagination">
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

export default CustomerShippingAddress;