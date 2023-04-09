import { fireEvent, render, screen } from "@testing-library/react";

import UploadButton from ".";

describe("UploadButton", () => {
  it("render component", () => {
    render(<UploadButton  onSubmit={() => {}} onFileNotSelected={()=>{}} />);

    expect(screen.getByText("Enviar")).toBeInTheDocument();
    expect(screen.getByText("Selecionar")).toBeInTheDocument();
  });

  it("should add file to input corretly", () => {
    const mockCallback = jest.fn();
    render(<UploadButton  onSubmit={mockCallback} onFileNotSelected={()=>{}}/>);

    const file = new File(["content"], "arquivo.txt", { type: "text/plain" });

    const fileInput: any = screen.getByLabelText("Selecionar");
    fireEvent.change(fileInput, { target: { files: [file] } });

    expect(fileInput.files).toHaveLength(1);
    expect(fileInput.files[0].name).toEqual("arquivo.txt");
  });

  it("shoudn`t call callback function if no one file is selected", () => {
    const mockOnFileUpload = jest.fn();
    render(
      <UploadButton onSubmit={mockOnFileUpload}onFileNotSelected={()=>{}} />
    );

    fireEvent.click(screen.getByText("Enviar"));

    expect(mockOnFileUpload).not.toHaveBeenCalled();
  });
});
