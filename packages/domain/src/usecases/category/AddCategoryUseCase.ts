import AddCategory from "../../entities/category/AddCategory";
import CategoryItem from "../../entities/category/CategoryItem";
import CategoryRepository from "../../repositories/CategoryRepository";

class AddCategoryUseCase {
  private readonly categoryRepository: CategoryRepository;

  constructor(categoryRepository: CategoryRepository) {
    this.categoryRepository = categoryRepository;
  }

  async execute(payload: AddCategory): Promise<CategoryItem> {
    return await this.categoryRepository.addCategory(payload);
  }
}

export default AddCategoryUseCase;
