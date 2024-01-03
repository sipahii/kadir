import RefundRequest from "../../Components/refundRequest/RefundRequest";

function RejectedRefundsPage(){
  const data = {
    title: "Rejected Request",
    orderCode: "Order Code",
    status: "Admin Approval"
  }
  return(
    <>
     
      <RefundRequest data={data} />
    </>
  )
}
export default RejectedRefundsPage;