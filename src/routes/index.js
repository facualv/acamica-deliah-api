const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const compression = require("compression");
const morgan = require("morgan");
const { NotFoundMiddleware, ErrorMiddleware, AuthMiddleware } = require("../middlewares");
const swaggerUI = require("swagger-ui-express");
const { SWAGGER_PATH } = require("../config");
const swaggerDocument = require(SWAGGER_PATH);

//Paquete que nos ayuda a capturar en un middleware las excepciones asincronas
// que producen las promesas
require("express-async-errors");

module.exports = function ({ UserRoutes, ProductRoutes, OrderRoutes, AuthRoutes }) {
  const router = express.Router();
  const apiRoutes = express.Router();

  //ApiRoutes Default Middlewares
  apiRoutes
    .use(express.json())
    .use(cors())
    .use(helmet())
    .use(compression())
    .use(morgan("dev"));

  apiRoutes
    .use("/users", AuthMiddleware.ensureLogin, UserRoutes)
    .use("/products", AuthMiddleware.ensureLogin, ProductRoutes)
    .use("/orders", AuthMiddleware.ensureLogin, OrderRoutes)
    .use("/auth", AuthRoutes);

  // Router Principal
  router.use("/v1/api", apiRoutes);
  router.use("/api-docs", swaggerUI.serve, swaggerUI.setup(swaggerDocument));
  router.use(NotFoundMiddleware);
  router.use(ErrorMiddleware);

  return router;
};
