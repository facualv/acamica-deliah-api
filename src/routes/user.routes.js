// Importamos el Router de express
const { Router } = require("express");
const { AuthMiddleware, ParseIntMiddleware } = require("../middlewares");
module.exports = function ({ UserController }) {
  const router = Router();

  router.get("", [AuthMiddleware.adminOnly, ParseIntMiddleware], UserController.getAll);
  router.get("/:userId", AuthMiddleware.allowAccess, UserController.get);
  router.patch("/:userId", AuthMiddleware.allowAccess, UserController.update);
  router.delete("/:userId", AuthMiddleware.allowAccess, UserController.delete);

  return router;
};
