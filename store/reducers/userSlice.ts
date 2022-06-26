import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AppState } from '../store';

export interface IUserSlice {
    userData: any,
    cartItems: any
    authenticated: boolean,
    userSelectedItem: any,
}

const initialState: IUserSlice = {
    userData: {
        name: 'Muhammad Adityo Fauzaan',
        email: 'afauzaan34@gmail.com',
        address: 'Jl. Raya Hankam, Pondok Gede',
        country: 'Indonesia',
        kodePos: 17415,
        telephoneNumber: '081319125026'
    },
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
            state.userData = action.payload
        },
        onLogout: (state: any) => {
            state.isLoggedIn = false
        },
        onChangeAuth: (state: any, action: any) =>{
            console.log(action.payload)
            const isAuthenticated = action.payload ? true : false
            state.authenticated = isAuthenticated;
        }
    },

})

export const { 
    setUserSelectedItem, onAddItem, onDeleteItem, 
    onLogout, onChangeAuth, onChangeUserData
} = userSlice.actions;

export const checkUserData = ((state: AppState) => state.user.userData);
export const checkIsAuthenticated = ((state: AppState) => state.user.authenticated)
export const checkSelectedItem = ((state: AppState) => state.user.userSelectedItem);
export const checkCartItems = ((state: AppState) => state.user.cartItems);


export default userSlice.reducer