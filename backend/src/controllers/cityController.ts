import { Request, Response } from "express";

import { findStatesUsecase, findCitiesUsecase } from "../usecases";

export default class CityController {
  async indexStates(req: Request, res: Response) {
    try {
      const states = await findStatesUsecase.find();
      return res.status(200).json(states);
    } catch (error) {
      return res.status(403).json({ error });
    }
  }

  async indexCities(req: Request, res: Response) {
    try {
      const state = req.params["uf"];
      const cities = await findCitiesUsecase.find(state);
      return res.status(200).json(cities);
    } catch (error) {
      return res.status(403).json({ error });
    }
  }
}
