import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  Cart: [],
  totalPrice: 0,
  totalQuantity: 0,
};
const CartReducer = createSlice({
  name: "Cart",
  initialState,
  reducers: {
    AddToCart: (state, action) => {
      const findIndex = state.Cart.findIndex((x) => x.id === action.payload.id);
      if (findIndex >= 0) {
        state.Cart[findIndex].quantity += 1;
      } else {
        state.Cart.push({ ...action.payload, quantity: 1 });
      }
    },
    RemoveCart: (state, action) => {
      state.Cart = state.Cart.filter((x) => x.id !== action.payload.id);
    },
    IncrementQuantity: (state, action) => {
      const findIndex = state.Cart.findIndex((x) => x.id === action.payload.id);
      if (findIndex >= 0) {
        state.Cart[findIndex].quantity += 1;
      }
    },
    DecrementQuantity: (state, action) => {
      const findIndex = state.Cart.findIndex((x) => x.id === action.payload.id);
      if (findIndex >= 0) {
        if (state.Cart[findIndex].quantity > 1) {
          state.Cart[findIndex].quantity -= 1;
        } 
      }
    },
    GetTotalCart: (state) => {
      const { totalPrice, totalQuantity } = state.Cart.reduce(
        (CartTotal, CartItem) => {
          const { price, quantity } = CartItem;
          CartTotal.totalPrice += price * quantity;
          CartTotal.totalQuantity += quantity;
          return CartTotal;
        },
        { totalPrice: 0, totalQuantity: 0 }
      );
      state.totalPrice = totalPrice.toFixed(2);
      state.totalQuantity = totalQuantity;
    },
  },
});

export const { AddToCart, RemoveCart, IncrementQuantity, DecrementQuantity, GetTotalCart } = CartReducer.actions;
export default CartReducer.reducer;
