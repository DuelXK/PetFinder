import { Request, Response, NextFunction } from "express";

import { findUserById } from "../usecases";

const authMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const auth = req.headers["authorization"] as string;
    const [, id] = auth?.split(" ");
    const findedUser = await findUserById.findUser(parseInt(id));
    if (!findedUser) {
      throw "user not finded";
    }
    req.id = parseInt(id);
    next();
  } catch (e) {
    return res.status(403).json({ error: "user not allowed" });
  }
};

export default authMiddleware;
