import RefundRequest from "../../Components/refundRequest/RefundRequest";

function RefundRequestPage() {
  const data = {
    title:"Refund Request All",
    orderCode:"Order Code",
    status:"Refund Status"
  }
  return (
    <>
      <RefundRequest data={data}/>
    </>
  )
}
export default RefundRequestPage;