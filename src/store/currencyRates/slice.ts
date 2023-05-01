import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AxiosError } from "axios";

import { CurrencyRateEntry, ICurrencyRatesState, IFetchRatesResponse } from "./types";
import { fetchRates } from "./actions";

const initialState: ICurrencyRatesState = {
    data: [],
    base: "EUR",
    isLoading: false,
    error: "",
};

export const transformRatesToArray = (rates: { [x: string]: number }): CurrencyRateEntry[] => (
    Object.keys(rates).map(currency => ({
        currency,
        rate: rates[currency]
    }))
)

export const currencyRatesSlice = createSlice({
    name: "currencyRates",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchRates.pending, (state) => {
            state.isLoading = true;
            state.error = "";
        });
        builder.addCase(fetchRates.fulfilled, (state, action: PayloadAction<IFetchRatesResponse>) => {
            const { base, rates } = action.payload;
            const ratesArray = transformRatesToArray(rates);

            state.isLoading = false;
            state.data = ratesArray;
            state.base = base;
        });
        builder.addCase(fetchRates.rejected, (state, action) => {
            const error = action.payload as AxiosError;
            let message = "";

            // Custom message handling for vatcomply API
            if (error?.request?.response) {
                message = JSON.parse(error.request.response)[0].msg;
            } else {
                message = error.message;
            }

            state.isLoading = false;
            state.error = message;
        });
    },
});

export const currencyRatesReducer = currencyRatesSlice.reducer;