import Product from "../Model/product.model.js";
export const createProductListing = async (req, res, next) => {
  const {
    name,
    description,
    price,
    discountPrice,
    image,
    pdf,
    video,
    stackQuantity,
    offer,
  } = req.body;
  try {
    const productListing = await Product.create({
      name,
      description,
      price,
      discountPrice,
      offer,
      image,
      pdf,
      video,
      stackQuantity,
    });
    return res.status(200).json(productListing);
  } catch (error) {
    console.error(error);
  }
};
export const deleteProduct = async (req, res) => {
  const checkProdcut = await Product.findById(req.params.id);
  if (!checkProdcut) {
    res.status(404).json("product not found");
  }
  try {
    const checkProdcut = await Product.findByIdAndDelete(req.params.id);
    res.status(204).json("product deleted");
  } catch (error) {
    console.log(error);
  }
};
export const allProduct = async (req, res) => {
  try {
    const products = await Product.find();
    res.status(200).json(products);
  } catch (error) {
    console.log(error);
  }
};
