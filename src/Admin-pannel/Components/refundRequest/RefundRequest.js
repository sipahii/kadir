import axios from "axios"
import { useEffect, useState } from "react"

function RefundRequest({ data }) {


  const [dataV, setDataV] = useState()

  const getData = async () => {
    try {
      const res = await axios.get(`https://onlineparttimejobs.in/api/rma`)
      setDataV(res.data)
    } catch (error) {
      alert('Server Error Failed To load Data')
    }
  }

  useEffect(() => {
    getData()
  }, [])

  return (
    <>
      <div className="aiz-main-content">
        <div className="px-15px px-lg-25px">

          <div className="card">
            <div className="card-header">
              <h5 className="mb-0 h6">{data.title}</h5>
            </div>
            <div className="card-body">
              <table className="table">
                <thead>
                  <tr>
                    <th scope="col">#</th>
                    <th scope="col">Order Id</th>
                    <th scope="col">Customer Name</th>
                    <th scope="col">Reason</th>
                    <th scope="col">Pickup Time</th>
                    <th scope="col">Resulution Type</th>
                    <th scope="col">Status</th>
                  </tr>
                </thead>
                <tbody>
                  {dataV && dataV.map((item, i) => {
                    return <tr key={item._id}>
                      <th scope="row">{1 + i}</th>
                      <td>{item?.orderId}</td>
                      <td>{item?.user?.firstname} {item?.user?.lastname}</td>
                      <td>{item?.reason?.name}</td>
                      <td>{item?.pickupTime}</td>
                      <td>{item?.resulution_type}</td>
                      <td>{item?.status}</td>
                    </tr>
                  })}

                </tbody>
              </table>
              <div className="clearfix">
                <div className="pull-right">
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-white text-center py-3 px-15px px-lg-25px mt-auto">

        </div>
      </div>

    </>
  )
}
export default RefundRequest;