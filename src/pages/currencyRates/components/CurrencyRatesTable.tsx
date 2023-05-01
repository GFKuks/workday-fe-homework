import {
    Paper,
    Table,
    TableBody as MuiTableBody,
    TableCell,
    TableContainer,
    TableHead as MuiTableHead,
    TableRow
} from "@mui/material";

import { useBaseCurrency, useCurrencyData } from "../../../store";

const TableHead = () => {
    const baseCurrency = useBaseCurrency();

    return (
        <MuiTableHead>
            <TableRow>
                <TableCell>Currency</TableCell>
                <TableCell align="right">
                    {`Rate (as compared to ${baseCurrency})`}
                </TableCell>
            </TableRow>
        </MuiTableHead>
    );
}

const TableBody = () => {
    const data = useCurrencyData();

    return (
        <MuiTableBody>
            { data.length
            ? data.map((x, i) => (
                <TableRow key={i}>
                    <TableCell>{x.currency}</TableCell>
                    <TableCell align="right">{x.rate}</TableCell>
                </TableRow>
            ))
            : (
                <TableRow>
                    <TableCell colSpan={2} align="center">No data</TableCell>
                </TableRow>
            )}
        </MuiTableBody>
    );
}

export const CurrencyRatesTable = () => (
    <TableContainer component={Paper}>
        <Table>
            <TableHead />
            <TableBody />
        </Table>
    </TableContainer>
);