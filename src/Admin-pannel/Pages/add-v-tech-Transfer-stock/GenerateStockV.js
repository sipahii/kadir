import { AiFillDelete } from "react-icons/ai"
import Form from 'react-bootstrap/Form';
function GenerateStockV({ item, i, setShowData, showData, DeleteRow }) {
    const seectSerials = (e) => {
        const setSerials = showData.map((item, ind) => {
            if (ind == i) {
                return { ...item, serial_id: e.target.value }
            } else {
                return item
            }
        })
        setShowData(setSerials)
    }

    return <tr key={i}>
        <td>
            <AiFillDelete onClick={() => DeleteRow(i)} />
        </td>
        <td>
            <label name="varient" className="control-label">{item?.productId?.name}</label>
        </td>

        <td>
            <input type="text" disabled value={item?.variantId?.weight} name="sku" className="form-control" />
        </td>
        <td>
            <input type="text" disabled value={item?.sku} name="sku" className="form-control" />
        </td>

        <td>
            <Form.Select aria-label="Default select example" value={item?.serial_id} onChange={seectSerials}>
                <option>Open this select menu</option>
                {item?.serialNo && item.serialNo.map((item, i) => {
                    return <option key={i} value={item._id}>{item?.serialNo}</option>
                })}
            </Form.Select>
        </td>

    </tr>
}
export default GenerateStockV