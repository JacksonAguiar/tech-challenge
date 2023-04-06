"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const supertest_1 = __importDefault(require("supertest"));
const index_routes_1 = __importDefault(require("./index.routes"));
describe("Sales routes tests", () => {
    it("Should create many sales in database", () => __awaiter(void 0, void 0, void 0, function* () {
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
        const response = yield (0, supertest_1.default)(index_routes_1.default).post("/sales").send(newSales);
        expect(response.status).toBe(200);
        //expect(response.body).toHaveProperty("count", 2);
        //expect(response.body.count).toBe(2);
    }));
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
    it("should return data with pagination configuration", () => __awaiter(void 0, void 0, void 0, function* () {
        const response = yield (0, supertest_1.default)(index_routes_1.default).get("/sales");
        expect(response.status).toBe(200);
        expect(response.body).toHaveProperty("page");
        expect(response.body).toHaveProperty("limit");
        expect(response.body).toHaveProperty("total");
        expect(response.body).toHaveProperty("totalPages");
        expect(response.body).toHaveProperty("sales");
    }));
});
//# sourceMappingURL=routes.test.js.map