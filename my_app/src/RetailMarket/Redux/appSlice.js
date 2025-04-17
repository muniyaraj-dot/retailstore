import {createSlice} from "@reduxjs/toolkit";
const initialState = {
    salesStatements:[],
    billDetails:{billItems:[] , cusName:{}, date:{}},
    billItem:{}
}
const billSlice = createSlice({
    name:'bill',
    initialState,
    reducers:{
        addItem: (state, action) => {
            const { id, key,value } = action.payload.item;
            state.billItem[id] = {...state.billItem[id],[key]:value};
        },
        addBillItem:(state,action)=>{
            if(!state.billDetails.billItems[action.payload]){
                state.billDetails.billItems[action.payload] = [];
            }
            state.billDetails.billItems[action.payload].push(state.billItem[action.payload]);
            state.billItem = state.billItem.filter(val => val.id !== action.payload);
        },
        setCustomer:(state,action) =>{
            const { id, customer } = action.payload;
            state.billDetails.cusName[id] = {customer};
        },
        setDate:(state,action) =>{
            const { id, date } = action.payload;
            state.billDetails.date[id] = {date};
        }
    }
})

export const {addBillItem,addItem,setCustomer,setDate} = billSlice.actions;

export default billSlice.reducer;