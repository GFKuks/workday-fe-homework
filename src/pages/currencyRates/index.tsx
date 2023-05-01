import { useState } from "react";

import {
    useAppDispatch,
    useCurrencyFetchError,
    useCurrencyDataIsLoading,
    fetchRates
} from "../../store";
import { CurrencyRatesTable, LoadDataButton, Modal } from "./components";

export const CurrencyRatesPage = () => {
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const errMessage = useCurrencyFetchError();
    const isLoading = useCurrencyDataIsLoading();
    const dispatch = useAppDispatch();

    const handleLoadDates = async () => {
        try {
            await dispatch(fetchRates()).unwrap();
        } catch (err) {
            setModalIsOpen(true);
        }
    }

    return (
        <>
            <Modal
                isOpen={modalIsOpen}
                message={errMessage}
                handleClose={() => setModalIsOpen(false)}
            />
			<LoadDataButton
                onClick={handleLoadDates}
				isLoading={isLoading}
			/>
            <CurrencyRatesTable />
        </>
    );
};