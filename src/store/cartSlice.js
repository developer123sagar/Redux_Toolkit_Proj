import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  all_products: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    add(state, action) {
      state.all_products.push(action.payload);
    },
    remove(state, action) {
      state.all_products = state.all_products.filter(
        (item) => item.id !== action.payload
      );
    },
  },
});

export const { add, remove } = cartSlice.actions;
export default cartSlice.reducer;

