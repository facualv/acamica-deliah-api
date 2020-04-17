const { ProductRepository } = require("../../../src/repositories");
const mockingoose = require("mockingoose").default;
const { Product } = require("../../../src/models");

let {
  ProductModelMock: { product, products }
} = require("../../mocks/product");

describe("Product Repository Test", () => {
  beforeEach(() => {
    mockingoose.resetAll();
    jest.clearAllMocks();
  });

  it("Should return a Product by Id", async () => {
    const _product = { ...product };
    mockingoose(Product).toReturn(product, "findOne");

    const _productRepository = new ProductRepository({ Product });
    const expected = await _productRepository.get(_product._id);

    expect(JSON.parse(JSON.stringify(expected))).toMatchObject(_product);
  });

  it("Should return a Product collection", async () => {
    mockingoose(Product).toReturn(products, "find");

    const _productRepository = new ProductRepository({ Product });
    const expected = await _productRepository.getAll();

    expect(JSON.parse(JSON.stringify(expected))).toMatchObject(products);
  });

  it("Should update an specific product by Id", async () => {
    const _product = { ...product };
    mockingoose(Product).toReturn(product, "findOneAndUpdate");

    const _productRepository = new ProductRepository({ Product });
    const expected = await _productRepository.update(_product._id, {
      description: "Atun"
    });

    expect(JSON.parse(JSON.stringify(expected))).toMatchObject(product);
  });

  it("Should delete an specific product by Id", async () => {
    const _product = { ...product };
    mockingoose(Product).toReturn(product, "findOneAndDelete");

    const _productRepository = new ProductRepository({ Product });
    const expected = await _productRepository.delete(_product._id);

    expect(expected).toEqual(true);
  });
});
