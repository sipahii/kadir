

import axios from "axios";
import { Link } from "react-router-dom";
import ExportDataInPdf from "../../../common/exportDataInPdf/ExportDataInPdf";
import ReactHTMLTableToExcel from 'react-html-table-to-excel';

function ListinSide({ data, getDatas }) {
    const token = window.localStorage.getItem('token');

    const DeleteData = async (id) => {
        try {
            const res = await axios.delete(`https://onlineparttimejobs.in/api/attributeSetMaster/delete_attributeSetMasters/${id}`, {
                headers: {
                    "Content-type": "application/json; charset=UTF-8",
                    Authorization: `Bearer ${token}`,
                },
            })
            getDatas()
            alert('Deleted')
        } catch (error) {
            alert('Not Deleted')
        }
    };

    return (
        <>
            <div className=" col-lg-10 ">
                <div className="card">
                    <div className="card-header row gutters-5">
                        <div className="col-lg-5 text-center text-md-left">
                            <h5 className="mb-md-0 h6">Product Attributes</h5>
                        </div>
                        {data && <div className="col-lg-2" >
                            <button style={{ background: '#2e294e', padding: '0', color: 'white', borderRadius: '5px' }}>
                                <ReactHTMLTableToExcel
                                    style={{ margin: '0' }}
                                    id="test-table-xls-button"
                                    className="download-table-xls-button cusxel"
                                    table="table-to-xlsx"
                                    filename="tablexls"
                                    sheet="tablexls"
                                    buttonText="Download Excel sheet" />
                            </button>
                        </div>}
                        {data && <div className="col-lg-2 text-md-right">
                            <ExportDataInPdf />
                        </div>}

                        <div className="col-lg-3">
                            <form >
                                <div className="input-group input-group-sm">
                                    <input type="text" className="form-control" id="search" name="search" placeholder="Search" fdprocessedid="jv5p0d" />
                                </div>
                            </form>
                        </div>
                    </div>

                    <div className="card-body">
                        <table className="table aiz-table mb-0 footable footable-1 breakpoint-xl exppdf" style={{}}>
                            <thead>
                                <tr className="footable-header">
                                    <th className="footable-first-visible" style={{ display: 'table-cell' }}>#</th><th style={{ display: 'table-cell' }}>Name</th><th style={{ display: 'table-cell' }}>Values</th><th className="text-right footable-last-visible" style={{ display: 'table-cell' }}>Options</th></tr>
                            </thead>
                            <tbody>

                                {data && data.map((item, i) => {
                                    return <tr key={item._id}>
                                        <td className="footable-first-visible" style={{ display: 'table-cel', textAlign: 'left' }}>{i + 1}</td>
                                        <td style={{ display: 'table-cell', textAlign: 'left' }}>{item.name}</td>
                                        <td style={{ display: 'table-cell', textAlign: 'left' }}>
                                            {item?.values?.map((item, i) => {
                                                return <div key={i}>{item?.name}</div>
                                            })}
                                        </td>
                                        <td className="text-right footable-last-visible" style={{ display: 'table-cell' }}>
                                            <Link to={`edit/${item?.uid}`} className="btn btn-soft-primary btn-icon btn-circle btn-sm">
                                                <i className="las la-edit" />
                                            </Link>
                                            <button type="button" onClick={() => DeleteData(item?.uid)} className="btn btn-soft-danger btn-icon btn-circle btn-sm confirm-delete">
                                                <i className="las la-trash" />
                                            </button>
                                        </td>
                                    </tr>
                                })}

                            </tbody>
                        </table>

                    </div>
                </div>

                <table className="table aiz-table mb-0 footable footable-1 breakpoint-xl" id="table-to-xlsx" style={{ display: 'none' }}>
                    <thead>
                        <tr className="footable-header">
                            <th className="footable-first-visible" style={{ display: 'table-cell', textAlign: 'left' }}>#</th><th style={{ display: 'table-cell', textAlign: 'left' }}>Name</th><th style={{ display: 'table-cell', textAlign: 'left' }}>Values</th>
                        </tr>
                    </thead>
                    <tbody>

                        {data && data?.map((item, i) => {
                            return <tr key={item._id}>
                                <td className="footable-first-visible" style={{ display: 'table-cell' }}>{i + 1}</td>
                                <td style={{ display: 'table-cell' }}>{item.name}</td>
                                <td style={{ display: 'table-cell' }}>
                                    {item?.values?.map((item, i) => {
                                        return <div key={i}>{item?.name}</div>
                                    })}
                                </td>

                            </tr>
                        })}

                    </tbody>
                </table>
            </div>
        </>
    )
}
export default ListinSide;