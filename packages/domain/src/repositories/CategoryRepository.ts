import AddCategory from "../entities/category/AddCategory";
import CategoryItem from "../entities/category/CategoryItem";

interface CategoryRepository {
  addCategory(_payload: AddCategory): Promise<CategoryItem>;
  getCategoryDetail(_id: string): Promise<CategoryItem>;
}

export default CategoryRepository;
