import AddProduct from "../entities/product/AddProduct";
import ProductItem from "../entities/product/ProductItem";
import UpdateProduct from "../entities/product/UpdateProduct";

export default interface ProductRepository {
  addProduct(_payload: AddProduct): Promise<ProductItem>;
  getProductDetail(_id: string): Promise<ProductItem>;
  updateProduct(_id: string, _payload: UpdateProduct): Promise<ProductItem>;
}
