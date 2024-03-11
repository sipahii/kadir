import { useState } from "react";
import AllProducts from "../../Components/all-products/AllProducts";
import { useGetAllProductsQuery } from "../../Components/all-products/allproductsApi/allProductsApi";


function AllProductsPage() {

  return (
    <>
      <AllProducts />
    </>
  )
}
export default AllProductsPage;