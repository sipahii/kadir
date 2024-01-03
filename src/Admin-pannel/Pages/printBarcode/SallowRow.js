import { useEffect, useRef } from "react";
import { AiFillDelete } from "react-icons/ai";
import { useUpdateListProductsMutation } from "../../Components/all-products/allproductsApi/allProductsApi";

function SallowRow({ item, setShowData, i,showData }) {

    const [updateValue, { data, isSuccess }] = useUpdateListProductsMutation()
    const current_qty = useRef()

    const updateQty = (i, id) => {
        const clone = showData.map((item) => {
            if (item.variant_id === id) {
                return { ...item, qty: current_qty.current.value }
            } else {
                return item
            }
        })
        updateValue({ index: i, data: { qty: current_qty.current.value, purchase: clone } })
    };

    
    useEffect(() => {
        if (isSuccess) {
            setShowData(data)
        }
    }, [isSuccess])

    return <tr>
        <td>
            <AiFillDelete />
        </td>
        <td>
            <label name="varient" className="control-label">{item.product.name}</label>
        </td>


        <td>
            <input type="text" disabled value={item?.variant?.weight} name="sku" className="form-control" />
        </td>
        <td>
            <input type="text" disabled value={item?.sku} name="sku" className="form-control" />
        </td>

        <td>
            <input type="number" name="current_qty" ref={current_qty} className="form-control" onChange={() => { updateQty(i, item.variant_id) }} defaultValue='1' />
        </td>

    </tr>
}
export default SallowRow