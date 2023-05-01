import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

import { IFetchRatesResponse } from "./types";

export const fetchRates = createAsyncThunk(
    "rates/fetchRates",
    async (_, { rejectWithValue }) => {
        try {
            const response = await axios.get<IFetchRatesResponse>("https://api.vatcomply.com/rates");
            return response.data;
        } catch (err) {
            return rejectWithValue(err);
        }
    }
);