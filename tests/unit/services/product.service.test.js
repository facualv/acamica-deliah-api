const { ProductService } = require("../../../src/services");
const { ProductRepositoryMock } = require("../../mocks/product");

let {
  ProductModelMock: { product, products }
} = require("../../mocks/product");

describe("Product Service Tests", () => {
  //Logicas previas a la ejecucion de los tests (son una buena practica)
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("Should find a Product by Id", async () => {
    const ProductRepository = ProductRepositoryMock;
    ProductRepository.get.mockReturnValue(product);

    const _productService = new ProductService({ ProductRepository });
    const expected = await _productService.get(product._id);
    expect(expected).toMatchObject(product);
  });

  it("Should return a Products collection", async () => {
    const ProductRepository = ProductRepositoryMock;
    ProductRepository.getAll.mockReturnValue(products);

    const _productService = new ProductService({ ProductRepository });
    const expected = await _productService.getAll();
    expect(expected).toMatchObject(products);
  });

  it("Should update an specific product by Id", async () => {
    const ProductRepository = ProductRepositoryMock;
    ProductRepository.update.mockReturnValue(product);

    const _productService = new ProductService({ ProductRepository });
    const expected = await _productService.update(product._id, product);
    expect(expected).toMatchObject(product);
  });

  it("Should delete an specific product by Id", async () => {
    const ProductRepository = ProductRepositoryMock;
    ProductRepository.delete.mockReturnValue(true);

    const _productService = new ProductService({ ProductRepository });
    const expected = await _productService.delete(product._id);
    //Acersion
    expect(expected).toEqual(true);
  });
});
