import AddCategory from "../entities/category/AddCategory";
import CategoryItem from "../entities/category/CategoryItem";
import UpdateCategory from "../entities/category/UpdateCategory";

export default interface CategoryRepository {
  addCategory(_payload: AddCategory): Promise<CategoryItem>;
  getCategoryDetail(_id: string): Promise<CategoryItem>;
  updateCategory(_id: string, _payload: UpdateCategory): Promise<CategoryItem>;
  deleteCategory(_id: string): Promise<CategoryItem>;
}
