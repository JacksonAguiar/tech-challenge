import { fireEvent, render, screen, within } from "@testing-library/react";
import PaginationComponent from ".";

describe("PaginationComponent", () => {
  var page = 1;
  var total = 2;
 

  const handleSimplePagination = (n: number) => {
    page = n;
  };
  it("render component", () => {
    render(
      <PaginationComponent
        current={page}
        onChange={(n: number) => handleSimplePagination(n + 1)}
        total={total}
      />
    );

    expect(screen.getByText("1")).toBeInTheDocument();
    expect(screen.getByText("2")).toBeInTheDocument();
  });
  it("should change the current page", () => {
    render(
      <PaginationComponent
        current={page}
        onChange={(n: number) => handleSimplePagination(n + 1)}
        total={total}
      />
    );
    fireEvent.click(screen.getByText("2"));

    expect(page).toEqual(2);
  });
});
