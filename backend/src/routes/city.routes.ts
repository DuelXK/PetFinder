import { Router } from "express";

import { cityController } from "../controllers";

const routes = Router();
routes.get("/", cityController.indexStates);
routes.get("/:uf", cityController.indexCities);

export default routes;
