import { configureStore, Action } from '@reduxjs/toolkit';
import cartReducer from './reducers/cartSlice';

export const makeStore = () => {
    return configureStore({
        reducer: {
            cart: cartReducer
        }
    })
};

const store = makeStore();

export type AppState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch


export default store;

