import React from "react";
import { Sale } from "../../interfaces";
import { format } from "date-fns";
import "./styles.css";
interface Props {
  cols: String[];
  data: Sale[];
}

const TableComponent: React.FC<Props> = ({ cols, data, ...props }: Props) => {
  const currencyFormat = (value: number) =>
    new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "brl",
    }).format(value);
  return (
    <table key={"table"}>
      <thead>
        <tr>
          {cols.map((col) => (
            <th key={"#" + col}> {col} </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((row) => {
          return (
            <tr key={"#row" + row.id}>
              <td>{row.type.toString()}</td>
              <td>{format(new Date(row.date.toString()), "dd/MM/yyyy")}</td>
              <td>{row.product}</td>
              <td>{currencyFormat(Number(row.value))}</td>
              <td>{row.seller}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default TableComponent;
