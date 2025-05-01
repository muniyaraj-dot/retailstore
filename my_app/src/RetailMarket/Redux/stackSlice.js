import { createSlice } from "@reduxjs/toolkit";

const stackSlice = createSlice({
    name: "stack",
    initialState: {},
    reducers: {
        addStack: (state, action) => {

        },
        setStackForBackend:(state,action) =>{
                return {...action.payload.stack};
        },
        updateStack:(state,action) =>{

        }
    }
})

export const {addStack , setStackForBackend , updateStack} = stackSlice.actions;

export default stackSlice.reducer;