import { AiFillDelete } from "react-icons/ai"
import { useUpdateListProductsMutation } from "../../Components/all-products/allproductsApi/allProductsApi";
import { useEffect, useRef } from "react";

function GenerateStock({ item, i, setShowData, showData, DeleteRow }) {
    const [updateValue, { data, isSuccess }] = useUpdateListProductsMutation()
    useEffect(() => {
        if (isSuccess) {
            setShowData(data)
        }
    }, [isSuccess])

    const current_qty = useRef()

    const updateQty = (i, id) => {
        const clone = showData.map((item) => {
            if (item.variant_id === id) {
                return { ...item, qty: current_qty.current.value }
            } else {
                return item
            }
        })
        console.log(clone);
        updateValue({ index: i, data: { qty: current_qty.current.value, purchase: clone } })
    };



    return <tr key={i}>
        <td>
            <AiFillDelete onClick={() => DeleteRow(i)} />
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
            <input type="number" ref={current_qty} name="current_qty" className="form-control" onChange={() => { updateQty(i, item.variant_id) }} defaultValue='1' />
        </td>

    </tr>
}
export default GenerateStock