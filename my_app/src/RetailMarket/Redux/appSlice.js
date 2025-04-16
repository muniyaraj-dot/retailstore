import {createSlice} from "@reduxjs/toolkit";
const initialState = {
    salesStatements:[],
    billDetails:{billItems:[] , customerName:'',date:''},
    billItem:[]
}

const billSlice = createSlice({
    name:'bill',
    initialState,
    reducers:{
        addItem:(state,action)=>{
            const {id,itemName,itemCount,itemPrice} = action.payload.item;
                state.billItem.push({id,itemName,itemCount,itemPrice});
        },
        addBillItem:(state,action)=>{
            if(!state.billDetails.billItems[action.payload]){
                state.billDetails.billItems[action.payload] = [];
            }
            state.billDetails.billItems[action.payload].push(state.billItem[action.payload]);
            state.billItem = state.billItem.filter(val => val.id !== action.payload);
        },
        setCutomer:(state,action) =>{
            state.billDetails = action.payload;
        },
        setDate:(state,action) =>{
            state.billDetails.date = action.payload;
        }
    }
})

export const {addBillItem,addItem,setCutomer,setDate} = billSlice.actions;

export default billSlice.reducer;