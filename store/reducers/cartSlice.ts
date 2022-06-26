import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AppState } from '../store';

export interface ICartSlice {
    isOpened: boolean,
    cartItems: any[]
}

const initialState: ICartSlice = {
    isOpened: false,
    cartItems: [{
        id: 1,
        name: "Mukena Hijau",
        description: "Ini adalah mukena hijau",
        type: "mukena",
        sizes: [
          {
            size: "S",
            stockAmount: 25,
            price: 25000
          },
          {
            size: "M",
            stockAmount: 10,
            price: 27000
          },
          {
            size: "L",
            stockAmount: 23,
            price: 28000
          },
          {
            size: "XL",
            stockAmount: 12,
            price: 30000
          }
        ],
        reviews: [
          {
            stars: 5,
            description: "Mantap Gan",
            date: "2022-05-11T13:43:08.709Z"
          }
        ]
      }]
}

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        onOpenDrawer: (state: any) => {
            state.isOpened = true
        },
        onCloseDrawer: (state: any) => {
            state.isOpened = false
        },
        onAddItem: (state: any, action: any) => {
            state.cartItems.push(action.payload)
        },
    }
})

export const { onOpenDrawer, onCloseDrawer, onAddItem } = cartSlice.actions;

export const checkOpenDrawer = ((state: AppState) => state.cart.isOpened);

export default cartSlice.reducer