import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AppState } from '../store';

export interface ICartSlice {
    isOpened: boolean,
}

const initialState: ICartSlice = {
    isOpened: false,
}

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        onOpenDrawer: (state) => {
            state.isOpened = true
        },
        onCloseDrawer: (state) => {
            state.isOpened = false
        }
    }
})

export const { onOpenDrawer, onCloseDrawer } = cartSlice.actions;

export const checkOpenDrawer = ((state: AppState) => state.cart.isOpened)

export default cartSlice.reducer