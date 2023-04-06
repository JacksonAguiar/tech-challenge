import { render, screen, within } from "@testing-library/react";
import { format } from "date-fns";

import Table from ".";
import { Sale } from "../../interfaces";

test("render sales table", () => {
  const items: Sale[] = [
    {
      id: 1,
      date: "12/06/2012",
      product: "dvd",
      seller: "teste",
      type: 1,
      value: 100,
    },
    {
      id: 2,
      date: "12/06/2012",
      product: "dvd",
      seller: "teste1",
      type: 1,
      value: 100,
    },
    {
      id: 3,
      date: "12/06/2012",
      product: "dvd",
      seller: "teste2",
      type: 1,
      value: 100,
    },
  ];

  render(
    <Table
      data={items}
      cols={["Tipo", "Data", "Produto", "Valor", "Vendedor"]}
    />
  );

  const elementTable = screen.getByRole("table");
  expect(elementTable).toBeInTheDocument();

  const elementLines = screen.getAllByRole("row");
  expect(elementLines.length).toBe(items.length + 1);

  items.forEach((item, index) => {
    const value = new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "brl",
    }).format(Number(item.value));

    const elementCols = within(elementLines[index + 1]).getAllByRole("cell");
    expect(elementCols[0].textContent).toBe(item.type.toString());
    expect(elementCols[1].textContent).toBe(
      format(new Date(item.date.toString()), "dd/MM/yyyy")
    );
    expect(elementCols[2].textContent).toBe(item.product);
    expect(elementCols[3].textContent).toBe(value);
    expect(elementCols[4].textContent).toBe(item.seller);
  });
});
