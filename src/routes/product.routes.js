// Importamos el Router de express
const { Router } = require("express");
const { ParseIntMiddleware, AuthMiddleware } = require("../middlewares");

module.exports = function ({ ProductController }) {
  const router = Router();

  router.get("", ParseIntMiddleware, ProductController.getAll);
  router.get("/:productId", ProductController.get);
  router.post("", AuthMiddleware.adminOnly, ProductController.create);
  router.patch("/:productId", AuthMiddleware.adminOnly, ProductController.update);
  router.delete("/:productId", AuthMiddleware.adminOnly, ProductController.delete);

  return router;
};
