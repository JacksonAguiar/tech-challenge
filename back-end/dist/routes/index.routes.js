"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const controller_1 = __importDefault(require("../controllers/controller"));
const routes = (0, express_1.default)();
const controller = new controller_1.default();
routes.get("/sales", controller.fetch);
routes.post("/sales", controller.create);
exports.default = routes;
//# sourceMappingURL=index.routes.js.map