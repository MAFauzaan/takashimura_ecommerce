import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { AppState } from "../store";

type productProps = {
    data: any, 
    pending: boolean,
    error: any
};

const initialState: productProps = {
    data: [],
    pending: false,
    error: false
}

export const getAllProducts = createAsyncThunk('/get-products', async () => {
    const response = await fetch('http://localhost:5000/get-products', {
        method: 'GET',
        headers: { "Content-Type": "application/json" },
    });
    const result = await response.json();
    console.log(result)
    if (!response.ok) {
        throw new Error(result.message);
    }
    return result.data || {};
})

const productsSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {
        
    },
    extraReducers: (builder: any) => {
        builder.addCase(getAllProducts.pending, (state: productProps) => {
            state.pending = true;
        }),
        builder.addCase(getAllProducts.fulfilled, (state: productProps, action: any) => {
            state.pending = false;
            state.data = action.payload;
            state.error = ' '
        })
        builder.addCase(getAllProducts.rejected, (state: productProps, action: any) => {
            state.pending = false;
            state.data = [];
            state.error = 'error'
        })
    }
})

export const products = (state: AppState) => state.products;

export default productsSlice.reducer;