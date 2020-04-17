const BaseService = require("./base.service");
let _orderRepository = null;

class OrderService extends BaseService {
  constructor({ OrderRepository, ProductRepository, UserRepository }) {
    super(OrderRepository);
    _orderRepository = OrderRepository;
  }
}

module.exports = OrderService;
