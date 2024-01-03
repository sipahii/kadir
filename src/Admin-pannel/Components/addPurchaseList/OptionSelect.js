function OptionSelect({itemPickup , setPick}) {
    const handel = ()=>{
        console.log('ssss');
    }
    return <option value={itemPickup._id} key={itemPickup._id} onClick={handel}>{itemPickup.pickupPoint_name}</option>
}
export default OptionSelect