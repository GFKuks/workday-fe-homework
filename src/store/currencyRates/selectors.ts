import { useAppSelector } from "../hooks";

export const useCurrencyData = () => useAppSelector(
    (state) => state.currencyRates.data
);

export const useBaseCurrency = () => useAppSelector(
    (state) => state.currencyRates.base
);

export const useCurrencyDataIsLoading = () => useAppSelector(
    (state) => state.currencyRates.isLoading
);

export const useCurrencyFetchError = () => useAppSelector(
    (state) => state.currencyRates.error
);