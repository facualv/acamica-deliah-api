const { Router } = require("express");

module.exports = function ({ UserController }) {
  const router = Router();

  router.post("/signup", UserController.signUp);
  router.post("/login", UserController.signIn);

  return router;
};
