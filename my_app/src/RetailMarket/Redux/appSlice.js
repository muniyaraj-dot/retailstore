import { createSlice } from "@reduxjs/toolkit";

const billSlice = createSlice({
    name: 'bill',
    initialState: {},
    reducers: {
        setInitialState: (state, action) => {
            return { ...action.payload.initialState };
        },

        addItem: (state, action) => {
            const { id, key, value } = action.payload.item;
            state.billItem[id] = { ...state.billItem[id], [key]: value };
        },
        addBillItem: (state, action) => {
            if (!state.billDetails.billItems[action.payload.id]) {
                state.billDetails.billItems[action.payload.id] = [];
            }
            if (state.billItem[action.payload.id]) {
                state.billDetails.billItems[action.payload.id].push(state.billItem[action.payload.id]);
                delete state.billItem[action.payload.id];
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
            state.billDetails.date[id] = { date: date ? date : new Date().toISOString().split("T")[0] };
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
            state.billDetails.paymentType[id] = { paymentType };
        },
        setSalesStatement: (state, action) => {
            const { id } = action.payload;
            state.salesStatements.push({ id: id, bill: state.billDetails.billItems[id], cusName: state.billDetails.cusName[id]?.customer || "retailer", date: state.billDetails.date[id]?.date || new Date().toISOString().split("T")[0], paymentType: state.billDetails.paymentType[id]?.paymentType || "Credit" });
            delete state.billDetails.billItems[id];
            delete state.billDetails?.cusName[id];
            delete state.billDetails?.date[id];
            delete state.billDetails?.paymentType[id];
        },
        updateSales: (state, action) => {
            const { id, bill, customer, paymentType, date } = action.payload;
            state.billDetails.billItems[id] = bill;
            state.billDetails.cusName[id] = { customer };
            state.billDetails.date[id] = { date };
            state.billDetails.paymentType[id] = { paymentType };
        },
        setUpdateBill: (state, action) => {
            const { id } = action.payload;
            const index = state.salesStatements.findIndex(val => val.id === id);
            console.log(state.billDetails.billItems[id]);
            state.salesStatements[index].bill = state.billDetails.billItems[id];
            state.salesStatements[index].cusName = state.billDetails.cusName[id]?.customer || "retailer";
            state.salesStatements[index].date = state.billDetails.date[id]?.date || new Date().toISOString().split("T")[0];
            state.salesStatements[index].paymentType = state.billDetails.paymentType[id]?.paymentType || "Credit";
            delete state.billDetails?.billItems[id];
            delete state.billDetails?.cusName[id];
            delete state.billDetails?.date[id];
            delete state.billDetails?.paymentType[id];
        }
    }
})

export const { updateSales, setInitialState, addBillItem, setUpdateBill, addItem, setCustomer, setDate, setUpdateBillItems, deleteItem, setPaymentType, setSalesStatement } = billSlice.actions;

export default billSlice.reducer;