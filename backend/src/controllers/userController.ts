import {Request, Response} from 'express';

import {createUserUsecase, findUserUsecase} from '../usecases';

export default class UserController {
  async index(req: Request, res: Response) {
    try {
      const { email, password }  = req.body;
      const results = await findUserUsecase.findUser(email, password);
      return res.json(results);
    } catch (error) {
      return res.status(403).json({
        error,
      });
    }
  }

  async create(req: Request, res: Response) {
    try {
      const {email, password, name, street, number, idState, idCity} =
        req.body;
      const message = await createUserUsecase.registerUser(
        email,
        password,
        name,
        street,
        number,
        idState,
        idCity
      );

      return res.status(201).json({message});
    } catch (error) {
      return res.status(403).json({
        error,
      });
    }
  }
}
