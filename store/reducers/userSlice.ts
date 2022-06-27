import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AppState } from '../store';

export interface IUserSlice {
    userData: any,
    cartItems: any
    authenticated: boolean,
    userSelectedItem: any,
}

const initialState: IUserSlice = {
    userData: {},
    cartItems: [],
    authenticated: false,
    userSelectedItem: {}
}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUserSelectedItem: (state: any, action: any) => {
            state.userSelectedItem = action.payload
        },
        onAddItem: (state: any, action: any) => {
            state.cartItems.push(action.payload)
        },
        onDeleteItem: (state: any, action: any) => {
            const foundItem = state.cartItems.filter((v: any) => v.productid !== action.payload);
            state.cartItems = foundItem
        },
        onChangeUserData: (state: any, action: any) => {
            if (action.payload.orderHistory) {
                state.userData = action.payload;
            }
            else {
                state.userData = {
                    ...action.payload,
                    orderhistory: []
                }
            }
            state.cartItems = action.payload.cartitems
        },
        onLogout: (state: any) => {
            state.isLoggedIn = false
        },
        onChangeAuth: (state: any, action: any) =>{
            const isAuthenticated = action.payload ? true : false
            state.authenticated = isAuthenticated;
        },
        onChangeCartItems: (state: any, action: any) => {
            state.cartItems = action.payload
        },
        onChangeCartItemAmount: (state: any, action: any) => {
            state.cartItems = action.payload
        },
    },
})

export const { 
    setUserSelectedItem, onAddItem, onDeleteItem, 
    onLogout, onChangeAuth, onChangeUserData,
    onChangeCartItems, onChangeCartItemAmount
} = userSlice.actions;

export const checkUserData = ((state: AppState) => state.user.userData);
export const checkIsAuthenticated = ((state: AppState) => state.user.authenticated)
export const checkSelectedItem = ((state: AppState) => state.user.userSelectedItem);
export const checkCartItems = ((state: AppState) => state.user.cartItems);


export default userSlice.reducer