import { Request, Response } from "express";

import {
  findAllPetsUsecase,
  findPetUsecase,
  updatePetUsecase,
  deletePetUsecase,
  createPetUsecase,
} from "../usecases";

export default class PetController {
  async index(req: Request, res: Response) {
    try {
      const { city, userid } = req.query;
      const results = await findAllPetsUsecase.findAllPet(
        city as string | undefined,
        userid as string | undefined
      );
      return res.json(results);
    } catch (error) {
      return res.status(403).json({
        error,
      });
    }
  }

  async show(req: Request, res: Response) {
    try {
      const id = req.params["id"];
      const results = await findPetUsecase.findUniquePet(parseInt(id));
      return res.json(results);
    } catch (error) {
      return res.status(403).json({ error });
    }
  }

  async create(req: Request, res: Response) {
    try {
      const { name, breed, weight, idCity } = req.body;
      const insert = await createPetUsecase.registerPet(
        name,
        breed,
        weight,
        idCity,
        req.id
      );
      return res.json(insert);
    } catch (error) {
      return res.status(403).json({ error });
    }
  }

  async update(req: Request, res: Response) {
    try {
      const id = req.params["id"];
      const { name, breed, weight, idCity } = req.body;
      const update = await updatePetUsecase.updatePetUsecase(
        parseInt(id),
        name,
        breed,
        weight,
        idCity,
        req.id
      );
      return res.json(update);
    } catch (error) {
      return res.status(403).json({ error });
    }
  }

  async delete(req: Request, res: Response) {
    try {
      const { id } = req.params;

      const deleted = await deletePetUsecase.deletePetUsecase(parseInt(id));

      return res.json(deleted);
    } catch (error) {
      return res.status(403).json({ error });
    }
  }
}
