import express from "express";

import Controller from "../controllers/controller";
const routes = express();

const controller = new Controller();

routes.get("/sales", controller.fetch);
routes.post("/sales", controller.create);

export default routes;
