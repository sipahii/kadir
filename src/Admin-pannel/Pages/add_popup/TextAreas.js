import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';

import TextEditor from '../../common/TextEditor'
import { setDataDescription } from '../../Components/productDescriptionWrapper/textEditorSlice';

function TextAreas({ state, setState }) {

 

    const dispatch = useDispatch();
    const handleData = (htmlValue) => {
        dispatch(setDataDescription(htmlValue))
    }
    return <div style={{ padding: 25 + 'px', margin: 5 + 'px' }}>
        <TextEditor handleData={handleData} />
    </div>
}
export default TextAreas