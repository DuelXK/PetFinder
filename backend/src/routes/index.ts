import { Router } from "express";

import userRoutes from "./user.routes";
import petRoutes from "./pet.routes";
import sessionRoutes from "./session.routes";
import cityRoutes from "./city.routes";

const routes = Router();
routes.use("/pet-donation", petRoutes);
routes.use("/user", userRoutes);
routes.use("/session", sessionRoutes);
routes.use("/city", cityRoutes);

export default routes;
