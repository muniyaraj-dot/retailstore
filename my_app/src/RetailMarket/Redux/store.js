import { configureStore } from "@reduxjs/toolkit";
import tabSlice from "./tabSlice";
import billSlice from "./appSlice";
import stackSlice from "./stackSlice";
export const store = configureStore({
    reducer:{
        tab:tabSlice,
        bill:billSlice,
        stack:stackSlice
    }
})