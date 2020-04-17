const { OrderService } = require("../../../src/services");
const { OrderRepositoryMock } = require("../../mocks/order");

let {
  OrderModelMock: { order, orders }
} = require("../../mocks/order");

describe("Order Service Tests", () => {
  //Logicas previas a la ejecucion de los tests (son una buena practica)
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("Should find an Order by Id", async () => {
    const OrderRepository = OrderRepositoryMock;
    OrderRepository.get.mockReturnValue(order);

    const _orderService = new OrderService({ OrderRepository });
    const expected = await _orderService.get(order._id);
    expect(expected).toMatchObject(order);
  });

  it("Should return an Orders collection", async () => {
    const OrderRepository = OrderRepositoryMock;
    OrderRepository.getAll.mockReturnValue(orders);

    const _orderService = new OrderService({ OrderRepository });
    const expected = await _orderService.getAll();
    expect(expected).toMatchObject(orders);
  });

  it("Should update an specific order by Id", async () => {
    const OrderRepository = OrderRepositoryMock;
    OrderRepository.update.mockReturnValue(order);

    const _orderService = new OrderService({ OrderRepository });
    const expected = await _orderService.update(order._id, order);
    expect(expected).toMatchObject(order);
  });

  it("Should delete an specific order by Id", async () => {
    const OrderRepository = OrderRepositoryMock;
    OrderRepository.delete.mockReturnValue(true);

    const _orderService = new OrderService({ OrderRepository });
    const expected = await _orderService.delete(order._id);
    //Acersion
    expect(expected).toEqual(true);
  });
});
