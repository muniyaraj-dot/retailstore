import { configureStore } from "@reduxjs/toolkit";
import tabSlice from "./tabSlice";
import billSlice from "./appSlice";
export const store = configureStore({
    reducer:{
        tab:tabSlice,
        bill:billSlice
    }
})