import InHouseProductsSale from "../../Components/inHouseProductsSale/InHouseProductsSale";
import ProductsStock from "../../Components/productsStock/ProductsStock";

function ProductsStockPage() {

    const tableData = {
        productName: "Product Name",
        productImage: "Product Image",
        productDescription: "Stock"
    }

    return (
        <>
            <InHouseProductsSale data={tableData} />
            {/* <ProductsStock data={tableData} /> */}
        </>
    )
}
export default ProductsStockPage;