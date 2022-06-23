import { configureStore, Action } from '@reduxjs/toolkit';
import cartReducer from './reducers/cartSlice';
import productsSlice from './reducers/products'
import userSlice from './reducers/userSlice';


export const makeStore = () => {
    return configureStore({
        reducer: {
            cart: cartReducer,
            user: userSlice,
            products: productsSlice
        }
    })
};

const store = makeStore();

export type AppState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch


export default store;

