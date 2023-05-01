import { Button, CircularProgress as Loader, styled } from "@mui/material";

interface ILoadDataButtonProps {
    isLoading: boolean;
    onClick: () => void;
};

const StyledButton = styled(Button)({
    width: "100%",
    minHeight: "75px",
});

export const LoadDataButton = ({ isLoading, onClick }: ILoadDataButtonProps) => (
    <StyledButton
        data-testid="load-data-button"
        onClick={onClick}
        disabled={isLoading}
        variant="contained"
        size="large"
    >
        {!isLoading ? "Load latest currency rates" : <Loader />}
    </StyledButton>
);