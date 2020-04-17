const { createContainer, asClass, asValue, asFunction } = require("awilix");
const container = createContainer();

//Importamos el Server
const server = require("./server");

//Importamos el Config
const config = require("../config");

// Importamos la capa de servicios
const { UserService, ProductService, OrderService, AuthService } = require("../services");

//Importamos los Controllers
const { ProductController, UserController, OrderController } = require("../controllers");

//Importamos las rutas
const {
  UserRoutes,
  ProductRoutes,
  AuthRoutes,
  OrderRoutes
} = require("../routes/index.routes");
const routes = require("../routes");

//Importamos los modelos
const { User, Product, Order } = require("../models");

//Importamos los repositorios
const { UserRepository, ProductRepository, OrderRepository } = require("../repositories");

// Utilizamos el metodo REGISTER del objeto container para crear un nuevo tipo de injeccion
container
  .register({
    server: asClass(server).singleton(),
    router: asFunction(routes).singleton(),
    config: asValue(config)
  })
  .register({
    UserService: asClass(UserService).singleton(),
    ProductService: asClass(ProductService).singleton(),
    OrderService: asClass(OrderService).singleton(),
    AuthService: asClass(AuthService).singleton()
  })
  .register({
    UserController: asClass(UserController.bind(UserController)).singleton(),
    ProductController: asClass(ProductController.bind(ProductController)).singleton(),
    OrderController: asClass(OrderController.bind(OrderController)).singleton()
  })
  .register({
    UserRoutes: asFunction(UserRoutes).singleton(),
    ProductRoutes: asFunction(ProductRoutes).singleton(),
    AuthRoutes: asFunction(AuthRoutes).singleton(),
    OrderRoutes: asFunction(OrderRoutes).singleton()
  })
  .register({
    User: asValue(User),
    Product: asValue(Product),
    Order: asValue(Order)
  })
  .register({
    UserRepository: asClass(UserRepository).singleton(),
    ProductRepository: asClass(ProductRepository).singleton(),
    OrderRepository: asClass(OrderRepository).singleton()
  });

module.exports = container;
