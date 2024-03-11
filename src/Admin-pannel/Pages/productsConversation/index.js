import ProductsConversation from "../../Components/productsConversation/ProductsConversation";

function ProductsConversationPage() {
    const data = {
        title:"Conversations"
    }

    return (
        <>
            <ProductsConversation data={data}/>
        </>
    )
}
export default ProductsConversationPage;