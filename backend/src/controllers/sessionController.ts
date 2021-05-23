import { Request, Response } from "express";

import { findUserUsecase } from "../usecases";

export default class SessionController {
  async create(req: Request, res: Response) {
    try {
      const { email, password } = req.body;
      const user = await findUserUsecase.findUser(email, password);
      return res.status(201).json(user);
    } catch (error) {
      return res.status(403).json({ error });
    }
  }
}
