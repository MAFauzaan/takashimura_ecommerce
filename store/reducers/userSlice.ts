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
    isLoggedIn: true
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
    isLoggedIn: true
}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
    }
})

// export const {  } = userSlice.actions;

export const checkUserData = ((state: AppState) => state.user.userData)

export default userSlice.reducer