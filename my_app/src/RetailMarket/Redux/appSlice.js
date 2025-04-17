import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    salesStatements: [],
    billDetails: { billItems: {}, cusName: {}, date: {}, paymentType: {} },
    billItem: {}
}
const billSlice = createSlice({
    name: 'bill',
    initialState,
    reducers: {
        addItem: (state, action) => {
            const { id, key, value } = action.payload.item;
            state.billItem[id] = { ...state.billItem[id], [key]: value };
        },
        addBillItem: (state, action) => {
            if (!state.billDetails.billItems[action.payload]) {
                state.billDetails.billItems[action.payload] = [];
            }
            if (state.billItem[action.payload]) {
                state.billDetails.billItems[action.payload].push(state.billItem[action.payload]);
                delete state.billItem[action.payload];
            } else {
                alert("Please fill")
            }
        },
        setCustomer: (state, action) => {
            const { id, customer } = action.payload;
            state.billDetails.cusName[id] = { customer };
        },
        setDate: (state, action) => {
            const { id, date } = action.payload;
            state.billDetails.date[id] = { date : date ? date : new Date().toISOString().split("T")[0] };
        },
        setUpdateBillItems: (state, action) => {
            const { id, index, key, value } = action.payload;
            console.log(action.payload);
            state.billDetails.billItems[id][index] = { ...state.billDetails.billItems[id][index], [key]: value };
        },
        deleteItem: (state, action) => {
            const { id, index } = action.payload;
            state.billDetails.billItems[id].splice(index, 1);
        },
        setPaymentType: (state, action) => {
            const { id, paymentType } = action.payload;
            state.billDetails.paymentType[id] = {paymentType};
        },
        setSalesStatement: (state, action) => {
            const { id } = action.payload;
            state.salesStatements.push({bill:state.billDetails.billItems[id],cusName:state.billDetails.cusName[id]?.customer || "retailer",date:state.billDetails.date[id] || new Date().toISOString().split("T")[0],paymentType:state.billDetails.paymentType[id] || "Credit"});
            delete state.billDetails.billItems[id];
            delete state.billDetails?.cusName[id];
            delete state.billDetails?.date[id];
            delete state.billDetails?.paymentType[id];
        },
    }
})

export const { addBillItem, addItem, setCustomer, setDate, setUpdateBillItems, deleteItem, setPaymentType, setSalesStatement } = billSlice.actions;

export default billSlice.reducer;