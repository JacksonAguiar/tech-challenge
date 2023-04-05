import { render, screen } from "@testing-library/react";
import { Sale } from "../interfaces";
import { parseStringFileToData } from "./file-parsing";

test("transform sale file string in data object array", () => {
  const content =
    "12022-03-03T09:07:35-03:00DESENVOLVEDOR FULL STACK      0000155000ELIANA NOGUEIRA";

  const expected: Sale[] = [
    {
      type: 1,
      date: "2022-03-03T09:07:35-03:00",
      product: "DESENVOLVEDOR FULL STACK",
      seller: "ELIANA NOGUEIRA",
      value: 1550,
    },
  ];

  var res = parseStringFileToData(content);

  expect(expected).toStrictEqual(res);

});
