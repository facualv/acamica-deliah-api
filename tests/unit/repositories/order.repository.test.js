const { OrderRepository } = require("../../../src/repositories");
const mockingoose = require("mockingoose").default;
const { Order } = require("../../../src/models");

let {
  OrderModelMock: { order, orders }
} = require("../../mocks/order");

describe("Order Repository Test", () => {
  beforeEach(() => {
    mockingoose.resetAll();
    jest.clearAllMocks();
  });

  it("Should return an order by Id", async () => {
    const _order = { ...order };
    mockingoose(Order).toReturn(order, "findOne");

    const _orderRepository = new OrderRepository({ Order });
    const expected = await _orderRepository.get(_order._id);

    expect(JSON.parse(JSON.stringify(expected))).toMatchObject(_order);
  });

  it("Should return an Order collection", async () => {
    mockingoose(Order).toReturn(orders, "find");

    const _orderRepository = new OrderRepository({ Order });
    const expected = await _orderRepository.getAll();

    expect(JSON.parse(JSON.stringify(expected))).toMatchObject(orders);
  });

  it("Should update an specific order by Id", async () => {
    const _order = { ...order };
    mockingoose(Order).toReturn(order, "findOneAndUpdate");

    const _orderRepository = new OrderRepository({ Order });
    const expected = await _orderRepository.update(_order._id, {
      orderStatus: "Sended"
    });

    expect(JSON.parse(JSON.stringify(expected))).toMatchObject(order);
  });

  it("Should delete an specific order by Id", async () => {
    const _order = { ...order };
    mockingoose(Order).toReturn(order, "findOneAndDelete");

    const _orderRepository = new OrderRepository({ Order });
    const expected = await _orderRepository.delete(_order._id);

    expect(expected).toEqual(true);
  });
});
