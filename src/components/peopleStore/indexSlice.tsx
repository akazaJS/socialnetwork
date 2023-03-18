import {createSlice, PayloadAction} from "@reduxjs/toolkit";

const index:number | null = null

const indexSlice = createSlice({
    name: 'index',
    initialState:{
        index:index
    },
    reducers:{
        passIndex(state,action:PayloadAction<any>){
            state.index = action.payload
        }
    }
})


export const {passIndex} = indexSlice.actions
export default indexSlice.reducer