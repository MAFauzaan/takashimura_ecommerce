import { configureStore, Action } from '@reduxjs/toolkit';
import cartReducer from './reducers/cartSlice';
import userSlice from './reducers/userSlice';

export const makeStore = () => {
    return configureStore({
        reducer: {
            cart: cartReducer,
            user: userSlice
        }
    })
};

const store = makeStore();

export type AppState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch


export default store;

