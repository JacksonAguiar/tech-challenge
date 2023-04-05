import { fireEvent, render, screen, within } from "@testing-library/react";

import Table from "./components/table";
import { Sale } from "./interfaces";
import UploadButton from "./components/upload_button";

describe("UploadButton", () => {
  it("render component", () => {
    render(<UploadButton  onSubmit={() => {}} />);

    expect(screen.getByText("Upload")).toBeInTheDocument();
    expect(screen.getByText("selecionar")).toBeInTheDocument();
  });

  it("should add file to input corretly", () => {
    const mockCallback = jest.fn();
    render(<UploadButton  onSubmit={mockCallback} />);

    const file = new File(["content"], "arquivo.txt", { type: "text/plain" });

    const fileInput: any = screen.getByLabelText("selecionar");
    fireEvent.change(fileInput, { target: { files: [file] } });

    expect(fileInput.files).toHaveLength(1);
    expect(fileInput.files[0].name).toEqual("arquivo.txt");
  });

  it("shoudn`t call callback function if no one file is selected", () => {
    const mockOnFileUpload = jest.fn();
    render(
      <UploadButton onSubmit={mockOnFileUpload} />
    );

    fireEvent.click(screen.getByText("Upload"));

    expect(mockOnFileUpload).not.toHaveBeenCalled();
  });
});

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
    const elementCols = within(elementLines[index + 1]).getAllByRole("cell");
    //const elementCols = elementLines[index + 1].querySelectorAll('td'); // +1 para pular o cabeçalho
    expect(elementCols[0].textContent).toBe(item.type.toString());
    expect(elementCols[1].textContent).toBe(item.date);
    expect(elementCols[2].textContent).toBe(item.product);
    expect(elementCols[3].textContent).toBe(item.value.toString());
    expect(elementCols[4].textContent).toBe(item.seller);
  });
});
