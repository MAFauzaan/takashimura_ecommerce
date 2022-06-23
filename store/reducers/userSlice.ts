import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AppState } from '../store';

export interface IUserSlice {
    userData: {
        name: string,
        email: string,
        alamat: string,
        negara: string,
        kodePos: number,
        nomorTelepon: string
    },
    isLoggedIn: true,
    userSelectedItem: any,
}

const initialState: IUserSlice = {
    userData: {
        name: 'Muhammad Adityo Fauzaan',
        email: 'afauzaan34@gmail.com',
        alamat: 'Jl. Raya Hankam, Pondok Gede',
        negara: 'Indonesia',
        kodePos: 17415,
        nomorTelepon: '081319125026'
    },
    isLoggedIn: true,
    userSelectedItem: {}
}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUserSelectedItem: (state: any, action: any) => {
            state.userSelectedItem = action.payload
        }
    }
})

export const { setUserSelectedItem } = userSlice.actions;

export const checkUserData = ((state: AppState) => state.user.userData);
export const checkIsLoggedIn = ((state: AppState) => state.user.isLoggedIn)
export const checkSelectedItem = ((state: AppState) => state.user.userSelectedItem);

export default userSlice.reducer