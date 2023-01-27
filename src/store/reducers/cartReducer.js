import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartItems: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem: (state, action) => {
      let index = state.cartItems.findIndex(
        (item) => item.id === action.payload.id
      );
      if (index === -1) {
        state.cartItems.push(action.payload);
      }
    },
    removeItem: (state, action) => {
      let index = state.cartItems.findIndex(
        (item) => item.id === action.payload.id
      );
      console.log(index);
      if (index !== -1) {
        state.cartItems.splice(index, 1);
      }
    },
    changeQty: (state, action) => {
      let dish = state.cartItems.find(
        (item) => item.id === action.payload[0].id
      );
      if (dish) {
        dish.qty = action.payload[1];
      }
    },
  },
});

export const { addItem, removeItem, changeQty } = cartSlice.actions;

export default cartSlice.reducer;
