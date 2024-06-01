import type { ErrorRequestHandler, Request, Response } from "express";

const unknownEndpoint = (req: Request, res: Response) => {
  res.status(404).end();
};

const errorHandler: ErrorRequestHandler = (err, req, res, next) => {
  console.error(err);

  return res
    .status(500)
    .json({ status: 500, message: "Internal server error." });
};

export { unknownEndpoint, errorHandler };
