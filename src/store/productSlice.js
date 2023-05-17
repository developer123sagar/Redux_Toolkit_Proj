import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: [],
  isLoading: true,
};
export const getProductsThunk = createAsyncThunk(
  "getProductsThunk",
  async function getProducts() {
    const data = await fetch("https://fakestoreapi.com/products").then(
      (result) => result.json()
    );
    console.log('my API DATA', data)
    return data;
  }
);

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getProductsThunk.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getProductsThunk.fulfilled, (state, action) => {
        state.isLoading = false;
        console.log("action.payload",action.payload)
        state.data.push(action.payload);
      })
      .addCase(getProductsThunk.rejected, (state) => {
        state.isLoading = false;
      });
  },
});

export default productSlice.reducer;
