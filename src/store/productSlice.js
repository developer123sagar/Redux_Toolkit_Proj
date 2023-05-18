import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: [],
  filteredDesc: [],
  filteredAsc: [],
  isLoading: true,
  isDescending: false,
  isAscending: false,
};
export const getProductsThunk = createAsyncThunk(
  "getProductsThunk",
  async function getProducts() {
    const data = await fetch("https://fakestoreapi.com/products").then((result) => result.json());
    return data;
  }
);

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    sortProductsDescending(state, action) {
      state.filteredDesc = action.payload;
      state.isDescending = true;
      state.isAscending = false;
    },
    sortProductsAscending(state, action) {
      state.filteredAsc = action.payload;
      state.isDescending = false;
      state.isAscending = true;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getProductsThunk.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getProductsThunk.fulfilled, (state, action) => {
        state.isLoading = false;
        state.data.push(action.payload);
      })
      .addCase(getProductsThunk.rejected, (state) => {
        state.isLoading = false;
      });
  },
});

export const { sortProductsDescending, sortProductsAscending } =
  productSlice.actions;
export default productSlice.reducer;
