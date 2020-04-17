const BaseRepository = require("./base.repository");
let _order;

class OrderRepository extends BaseRepository {
  constructor({ Order }) {
    super(Order);
    _order = Order;
  }
}

module.exports = OrderRepository;
