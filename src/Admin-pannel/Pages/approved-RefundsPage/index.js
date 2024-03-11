import RefundRequest from "../../Components/refundRequest/RefundRequest";

function ApprovedRefundsPage(){
  const data = {
    title: "Approved Request",
    orderCode: "Order Code",
    status: "	Refund Status"
  }
  return(
    <>
      <RefundRequest data={data}/>
    </>
  )
}
export default ApprovedRefundsPage;