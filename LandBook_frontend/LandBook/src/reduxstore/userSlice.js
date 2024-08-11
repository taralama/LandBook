import { createSlice } from "@reduxjs/toolkit";

//making initial state 
//what type of data , user holds

const initialState = {
    savedProps: [],
}

export const userSlice = createSlice({
    name:'saved',
    initialState,

    reducers:{
        //for adding the saved items to store

        addItem:(state,action)=>{
            //finding sate
            // adding state

            state.savedProps.push(action.payload)
        }
    }
})

//exporting for individual uses 
export const {addItem} = userSlice.actions


//export for storage uses

export default userSlice.reducer;
