// Importamos el Router de express
const { Router } = require("express");
const { ParseIntMiddleware, AuthMiddleware } = require("../middlewares");

module.exports = function ({ OrderController }) {
  const router = Router();

  router.get("", [AuthMiddleware.adminOnly, ParseIntMiddleware], OrderController.getAll);
  router.post("", OrderController.create);
  router.get("/:orderId", OrderController.get);
  router.patch("/:orderId", AuthMiddleware.adminOnly, OrderController.update);
  router.delete("/:orderId", AuthMiddleware.adminOnly, OrderController.delete);

  return router;
};
