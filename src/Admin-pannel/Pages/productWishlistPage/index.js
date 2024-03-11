import InHouseProductsSale from "../../Components/inHouseProductsSale/InHouseProductsSale";
import ProductsStock from "../../Components/productsStock/ProductsStock";

function ProductWhislistPage() {
    const tableData = {
        productName: "Product Name",
        productImage: "Product Image",
        productDescription: "Number of Wish"
    }

    return (
        <>
            <InHouseProductsSale data={tableData} />
            {/* <ProductsStock data={tableData} /> */}
        </>
    )
}
export default ProductWhislistPage;