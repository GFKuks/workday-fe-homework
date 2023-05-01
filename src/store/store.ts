import { configureStore } from "@reduxjs/toolkit";
import { currencyRatesReducer } from "./currencyRates/slice";

export const createStore = () => configureStore({
    reducer: {
        currencyRates: currencyRatesReducer,
    }
});

export const store = createStore();

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;