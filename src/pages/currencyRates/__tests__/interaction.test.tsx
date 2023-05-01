import { fireEvent, render, screen } from "@testing-library/react";
import { LoadDataButton } from "../components";

describe("LoadDataButton", () => {
    it("should be clickable if not loading", () => {
        const onClick = jest.fn();
        render(<LoadDataButton isLoading={false} onClick={onClick} />);
        const buttonElement = screen.getByTestId("load-data-button");
    
        fireEvent.click(buttonElement);
        expect(onClick).toHaveBeenCalledTimes(1);
    });
    
    it("should not be clickable if loading", () => {
        const onClick = jest.fn();
        render(<LoadDataButton isLoading={true} onClick={onClick} />);
        const buttonElement = screen.getByTestId("load-data-button");
        
        fireEvent.click(buttonElement);
        expect(onClick).toHaveBeenCalledTimes(0);
    });
})
