import InHouseProductsSale from "../../Components/inHouseProductsSale/InHouseProductsSale";

function InHouseProductsSalePage() {

    const tableData = {
        productName: "Product Name",
        productImage: "Product Image",
        productDescription: "Num of Sale"
    }

    return (
        <>
            <InHouseProductsSale data={tableData} />
        </>
    )
}
export default InHouseProductsSalePage;