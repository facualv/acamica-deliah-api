let _pruductService = null;

class ProductController {
  constructor({ ProductService }) {
    _pruductService = ProductService;
  }

  async create(req, res) {
    const { body } = req;
    const createdProduct = await _pruductService.create(body);
    return res.status(201).send(createdProduct);
  }

  async get(req, res) {
    const { productId } = req.params;
    const product = await _pruductService.get(productId);
    return res.send(product);
  }

  async getAll(req, res) {
    const products = await _pruductService.getAll();
    return res.send(products);
  }

  async update(req, res) {
    const { body } = req;
    const { productId } = req.params;
    const updatedProduct = await _pruductService.update(productId, body);
    return res.send(updatedProduct);
  }

  async delete(req, res) {
    const { productId } = req.params;
    const deletedProduct = await _pruductService.delete(productId);
    return res.send(deletedProduct);
  }
}

module.exports = ProductController;
