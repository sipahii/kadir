import { useEffect, useState } from "react"
import { useParams } from "react-router"
import { useGetSellerDetailQuery } from "../../Components/all-products/allproductsApi/allProductsApi"

function SellerDetail() {
    const obj = {
        id: "1",
        url: "https://source.unsplash.com/pAKCx4y2H6Q/1400x1200",
    }
    const params = useParams()
    const [state, setState] = useState()
    const { data, isSuccess } = useGetSellerDetailQuery(params.id)
    useEffect(() => {
        if (isSuccess) {
            setState(data)
        }
    }, [isSuccess])
    console.log(state);
    return <div>
        <div>

            <div style={{marginLeft:"168px"}}>
                <img style={{ width: "250px", height: "300px", margin: "10px", objectFit: "cover" }} src={state?.profilePhoto?.url} />
            </div>

            <table class="table" style={{ width: "1200px", margin: "auto" }}>
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">First Name</th>
                        <th scope="col">Last Name</th>
                        <th scope="col">Mobile</th>
                        <th scope="col">Email</th>
                        <th scope="col">City</th>
                        <th scope="col">States</th>
                        <th scope="col">Country</th>
                        <th scope="col">Num of Sale</th>
                        <th scope="col">Num of Reviews</th>
                        <th scope="col">tax Number</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th scope="row">1</th>
                        <td>{state?.firstname}</td>
                        <td>{state?.lastname}</td>
                        <td>{state?.mobile}</td>
                        <td>{state?.email}</td>
                        <td>{state?.city}</td>
                        <td>{state?.state}</td>
                        <td>{state?.country}</td>
                        <td>{state?.num_of_sale}</td>
                        <td>{state?.num_of_reviews}</td>
                        <td>{state?.tax_number}</td>
                    </tr>

                </tbody>


            </table>

        </div>
    </div>
}
export default SellerDetail