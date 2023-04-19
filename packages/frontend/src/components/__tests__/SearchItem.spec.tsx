import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import SearchItem from "../SearchItem";

describe("SearchItem", () => {
  const props = {
    id: 1,
    name: "Test Restaurant",
    averageRating: 4,
    latestReview: "Test Review",
  };

  it("renders correctly", () => {
    render(<SearchItem {...props} />);
    const listItem = screen.getByRole("listitem");
    expect(listItem).toBeInTheDocument();

    const restaurantName = screen.getByText("Test Restaurant");
    expect(restaurantName).toBeInTheDocument();

    const averageRating = screen.getByText("Average Rating: 4");
    expect(averageRating).toBeInTheDocument();

    const latestReview = screen.getByText("Latest Review: Test Review");
    expect(latestReview).toBeInTheDocument();
  });

  it("calls handleRestaurantClick when clicked", () => {
    const handleRestaurantClick = jest.fn();
    render(
      <SearchItem {...props} />
    );

    const listItem = screen.getByRole("listitem");
    userEvent.click(listItem);

    expect(handleRestaurantClick).toHaveBeenCalledTimes(1);
    expect(handleRestaurantClick).toHaveBeenCalledWith(1);
  });
});
