import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AppState } from '../store';

export interface ICartSlice {
    isOpened: boolean,
    cartItems: any[]
}

const initialState: ICartSlice = {
    isOpened: false,
    cartItems: [
        {
            id: 1,
            itemName: 'Sarung',
            amount: 3,
            price: 25000,
            subTotal: 75000
        },
        {
            id: 2,
            itemName: 'Mukena',
            amount: 2,
            price: 40000,
            subTotal: 80000
        }
    ]
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

export const checkOpenDrawer = ((state: AppState) => state.cart.isOpened);
export const checkCartItems = ((state: AppState) => state.cart.cartItems);

export default cartSlice.reducer