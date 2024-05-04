import { Link } from "react-router-dom";
import { useDeleteColorMutation, useGetColorsQuery } from "../all-products/allproductsApi/allProductsApi";
import ExportDataInPdf from "../../../common/exportDataInPdf/ExportDataInPdf";
import ReactHTMLTableToExcel from 'react-html-table-to-excel';

function Colors() {

    const token = window.localStorage.getItem('token')
    const { isLoading, data } = useGetColorsQuery(token);

    const [deleteData, response] = useDeleteColorMutation();

    function deleteColorData(id) {
        deleteData(id)
    };


    if (response.isSuccess === true) {
        alert("Color deleted Successfully")
    };



    return (
        <>
            <div className=" col-lg-7 ">
                <div className="card">

                    {/* <form>
                        <div className="card-header">
                            <h5 className="mb-0 h6">Colors</h5>
                            <div className="col-md-5">
                                <div className="form-group mb-0">
                                    <input type="text" className="form-control form-control-sm" id="search" name="search" placeholder="Type color name & Enter" fdprocessedid="07jxbu" />
                                </div>
                            </div>
                        </div>
                    </form> */}

                    <div className="card-header row">
                        <div className="row align-items-center">
                            <div className="col-lg-3 text-center text-md-left">
                                <h5 className="mb-md-0 h6">Colors</h5>
                            </div>
                            {data && <div className="col-lg-3" >
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
                            {data && <div className="col-lg-3 text-md-right">
                                <ExportDataInPdf />
                            </div>}

                            <div className="col-lg-3">
                                <form id="sort_currencies">
                                    <div className="input-group input-group-sm">
                                        <input type="text" className="form-control" id="search" name="search" placeholder="Type name & Enter" fdprocessedid="skb3yv" />
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>

                    <div className="card-body">

                        {isLoading ? <h2>Loading...</h2>
                            : <table className="table aiz-table mb-0 footable footable-1 breakpoint-xl exppdf" style={{}}>
                                <thead>
                                    <tr className="footable-header">
                                        <th className="footable-first-visible" style={{ display: 'table-cell' }}>#</th>
                                        <th style={{ display: 'table-cell' }}>Name</th>
                                        <th style={{ display: 'table-cell' }}>Code</th>
                                        <th className="text-right footable-last-visible" style={{ display: 'table-cell' }}>Options</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {data && data.map((item, i) => {
                                        return <tr key={item._id}>
                                            <td className="footable-first-visible" style={{ display: 'table-cell' }}>{i + 1}</td>
                                            <td style={{ display: 'table-cell' }}>{item.name}</td>
                                            <td style={{ display: 'table-cell' }}>{item.code}</td>
                                            <td className="text-right footable-last-visible" style={{ display: 'table-cell' }}>

                                                <Link to={`edit/${item._id}`} className="btn btn-soft-primary btn-icon btn-circle btn-sm" title="Edit">
                                                    <i className="las la-edit" />
                                                </Link>

                                                <button type="button" onClick={() => { deleteColorData(item._id) }} className="btn btn-soft-danger btn-icon btn-circle btn-sm">
                                                    <i className="las la-trash" />
                                                </button>

                                            </td>
                                        </tr>
                                    })}

                                </tbody>
                            </table>
                        }

                        <div className="aiz-pagination">
                            <nav>
                               
                            </nav>
                        </div>
                    </div>
                </div>

                <table className="table aiz-table mb-0 footable footable-1 breakpoint-xl " style={{ display: 'none' }} id="table-to-xlsx">
                    <thead>
                        <tr className="footable-header">
                            <th className="footable-first-visible" style={{ display: 'table-cell' }}>#</th>
                            <th style={{ display: 'table-cell' }}>Name</th>
                            <th style={{ display: 'table-cell' }}>Code</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data && data.map((item, i) => {
                            return <tr key={item._id}>
                                <td className="footable-first-visible" style={{ display: 'table-cell' }}>{i + 1}</td>
                                <td style={{ display: 'table-cell' }}>{item.name}</td>
                                <td style={{ display: 'table-cell' }}>{item.code}</td>
                            </tr>
                        })}

                    </tbody>
                </table>
            </div>
        </>
    )
}
export default Colors;