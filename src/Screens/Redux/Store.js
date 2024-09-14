import { configureStore } from "@reduxjs/toolkit";
import CartSlicer from "../Redux/CartSlicer"
export const store = configureStore({
    reducer:{
        name:CartSlicer
    }
})