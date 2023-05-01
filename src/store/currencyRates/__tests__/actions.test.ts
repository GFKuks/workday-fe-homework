import configureMockStore from "redux-mock-store";
import thunk, { ThunkDispatch } from "redux-thunk";
import { AnyAction } from "redux";
import axios from "axios";

import { fetchRates } from "../actions";
import { IFetchRatesResponse } from "../types";

// Mocking axios and applying thunk middleware for async actions
jest.mock("axios");
const mockedAxios = axios as jest.Mocked<typeof axios>;
const middlewares = [thunk];
const mockStore = configureMockStore<
    {},
    ThunkDispatch<{}, {}, AnyAction>
>(middlewares);

// Reset all mocks after each test, to avoid side effects in future tests
afterEach(() => {
    jest.resetAllMocks();
});

// Note - as fetchRates() is an asyncThunk, this test doubles both
// as action creator test, as well as asynchronous function test.
test("that fetchRate() is correctly set up via createAsyncThunk", async () => {
    const mockData: IFetchRatesResponse = {
        date: "2022-01-01",
        base: "EUR",
        rates: { EUR: 1, USD: 1.22 },
    };
    mockedAxios.get.mockResolvedValueOnce({ data: mockData });

    const store = mockStore({});
    await store.dispatch(fetchRates());
    const actions = store.getActions();

    // First action will have pending type
    expect(actions[0]).toMatchObject({
        meta: expect.anything(),
        type: fetchRates.pending.type,
    });
    // Finally, when resolved, type is fulfilled, with correct payload
    expect(actions[1]).toMatchObject({
        meta: expect.anything(),
        payload: mockData,
        type: fetchRates.fulfilled.type,
    });
});
