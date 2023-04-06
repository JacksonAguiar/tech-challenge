import request from "supertest";
import app from "./index.routes";

describe("Sales routes tests", () => {
  it("Should create many sales in database", async () => {
    const newSales = [
      {
        type: 1,
        product: "CURSO DE BEM-ESTAR",
        date: "2022-01-15T19:20:30-03:00",
        value: 127.5,
        seller: "JOSE CARLOS",
      },
      {
        type: 2,
        product: "CURSO DE BEM-ESTAR",
        date: "2022-01-15T19:20:32-03:00",
        value: 18.5,
        seller: "JOSE TESTE",
      },
    ];

    const response = await request(app).post("/sales").send(newSales);

    expect(response.status).toBe(200);
    //expect(response.body).toHaveProperty("count", 2);
    //expect(response.body.count).toBe(2);

  });
/*
  it("should return error", async () => {
    const newSales = [
      {
        product: "CURSO DE BEM-ESTAR",
        date: "2022-01-15T19:20:30-03:00",
        value: 127.5,
        seller: "JOSE CARLOS",
      },
  
    ];

    const response = await request(app).post("/sales").send(newSales);

    expect(response.status).toBe(400);
  }); */

  it("should return data with pagination configuration", async () => {

    const response = await request(app).get("/sales");

    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty("page");
    expect(response.body).toHaveProperty("limit");
    expect(response.body).toHaveProperty("total");
    expect(response.body).toHaveProperty("totalPages");
    expect(response.body).toHaveProperty("sales");
  });
});
