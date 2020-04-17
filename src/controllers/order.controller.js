let _orderService = null;

class OrderController {
  constructor({ OrderService }) {
    _orderService = OrderService;
  }

  async create(req, res) {
    const { body } = req;
    const createdOrder = await _orderService.create(body);
    return res.status(201).send(createdOrder);
  }

  async get(req, res) {
    const { orderId } = req.params;
    const order = await _orderService.get(orderId);
    return res.send(order);
  }

  async getAll(req, res) {
    const orders = await _orderService.getAll();
    return res.send(orders);
  }

  async update(req, res) {
    const { body } = req;
    const { orderId } = req.params;
    const updatedOrder = await _orderService.update(orderId, body);
    return res.send(updatedOrder);
  }

  async delete(req, res) {
    const { orderId } = req.params;
    const deletedOrder = await _orderService.delete(orderId);
    return res.send(deletedOrder);
  }
}

module.exports = OrderController;
