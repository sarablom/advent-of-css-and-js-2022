import { render, screen } from "@testing-library/react";
import { ScreenReaderText } from "./ScreenReaderText";

describe("ScreenReaderText component", () => {
	it("renders the component", () => {
		render(<ScreenReaderText text="Test" />);
		const component = screen.getByText("Test");
		expect(component).toBeInTheDocument();
	});

	it("displays the correct text", () => {
		render(<ScreenReaderText text="Test" />);
		const component = screen.getByText("Test");
		expect(component).toBeInTheDocument();
	});
});
