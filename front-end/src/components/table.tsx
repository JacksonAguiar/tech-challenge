import React from "react";
import { Sale } from "../interfaces";

interface Props {
  cols: String[];
  data: Sale[];
}

const Table: React.FC<Props> = ({ cols, data, ...props }: Props) => {
  return (
    <table key={"table"}>
      <thead>
        <tr>
          {cols.map((col) => (
            <th key={"#"+col}> {col} </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((row) => {
          return (
            <tr key={"#row"+row.id}>
              <td>{row.type.toString()}</td>
              <td>{row.date}</td>
              <td>{row.product}</td>
              <td>{row.value.toString()}</td>
              <td>{row.seller}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default Table;
