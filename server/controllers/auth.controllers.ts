import { Request, Response } from "express";
import jwt from "jsonwebtoken";

export const loginHandler = (req: Request, res: Response) => {
  const token = jwt.sign(
    {
      test: "test",
    },
    "secret",
    {
      expiresIn: 60 * 60 * 24,
    }
  );

  return res.json({
    token,
  });
};

export const profileHandler = (req: Request, res: Response) => {
  res.json({
    profile: {
      username: req.user,
    },
    message: "holi",
  });
};
