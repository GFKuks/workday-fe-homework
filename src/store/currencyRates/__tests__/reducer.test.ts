import { PayloadAction } from "@reduxjs/toolkit";
import {
    currencyRatesReducer,
    fetchRates,
    ICurrencyRatesState,
    IFetchRatesResponse,
    transformRatesToArray
} from "..";

test("that reducer should handle fetchRates.fulfilled action", () => {
    const initialState: ICurrencyRatesState = {
        data: [],
        base: "",
        isLoading: true,
        error: "",
    };

    const mockRates = { EUR: 1, USD: 1.22 };

    const action: PayloadAction<IFetchRatesResponse> = {
        type: fetchRates.fulfilled.type,
        payload: {
            rates: mockRates,
            base: "EUR",
            date: "20.04.2023",
        }
    };

    const expectedState: ICurrencyRatesState = {
        data: transformRatesToArray(mockRates),
        base: "EUR",
        isLoading: false,
        error: "",
    };

    expect(currencyRatesReducer(initialState, action)).toEqual(expectedState);
});
