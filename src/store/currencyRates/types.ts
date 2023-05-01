export type CurrencyRateEntry = {
    currency: string,
    rate: number
};

export type CurrencyRateData = {
    data: CurrencyRateEntry[];
    base: string;
}

export interface ICurrencyRatesState {
    data: CurrencyRateEntry[],
    base: string,
    isLoading: boolean,
    error: string,
};

export interface IFetchRatesResponse {
    date: string;
    base: string;
    rates: { [x: string]: number }
}