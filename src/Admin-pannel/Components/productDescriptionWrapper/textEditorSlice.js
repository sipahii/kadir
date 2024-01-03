import { createSlice } from "@reduxjs/toolkit";

const textEditorSlice = createSlice({
    name:'textEditor',
    initialState: {
        productDescription: ""
    },
    reducers: {
        setDataDescription: (state, action)=> {
            state.productDescription = action.payload
        }
    }
})
export const {setDataDescription} = textEditorSlice.actions;
export default textEditorSlice.reducer;