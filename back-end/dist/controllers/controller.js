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
const prisma_1 = __importDefault(require("../prisma"));
class Controller {
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const sales = req.body;
                const data = yield prisma_1.default.sale.createMany({ data: sales });
                res.json(data);
            }
            catch (error) {
                res.json(error);
            }
        });
    }
    fetch(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { page = 1, limit = 10 } = req.query;
                const skip = (Number(page) - 1) * Number(limit);
                const take = Number(limit);
                const sales = yield prisma_1.default.sale.findMany({
                    skip,
                    take,
                });
                const total = yield prisma_1.default.sale.count();
                res.json({
                    page,
                    limit,
                    total,
                    totalPages: Math.ceil(total / limit),
                    sales,
                });
            }
            catch (error) {
                res.json(error);
            }
        });
    }
}
exports.default = Controller;
//# sourceMappingURL=controller.js.map