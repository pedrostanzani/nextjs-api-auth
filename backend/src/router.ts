import express from "express";
import type { Application } from "express";
import { errorHandler, unknownEndpoint } from "@/middleware/errors";
import { checkJwt } from "./middleware/auth";

import ExampleController from "@/controllers/example";

function registerRoutes(app: Application) {
  app.use("/api", checkJwt, ExampleController);
}

function register(app: Application) {
  app.use(express.json());
  registerRoutes(app);
  app.use(unknownEndpoint);
  app.use(errorHandler);
}

export default {
  register,
};
