const products = require("../models/productModel");

exports.getAllProducts = (req, res) => {
  res.json(products);
};

exports.getProductById = (req, res) => {
  const product = products.find(p => p.id == req.params.id);

  if (!product) {
    return res.status(404).json({ message: "Product not found" });
  }

  res.json(product);
};

exports.addProduct = (req, res) => {
  const { id, name, price, category } = req.body;

  const newProduct = { id, name, price, category };
  products.push(newProduct);

  res.json({
    message: "Product added successfully",
    product: newProduct
  });
};