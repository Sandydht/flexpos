import CategoryItem from "../../entities/category/CategoryItem";
import UpdateCategory from "../../entities/category/UpdateCategory";
import CategoryRepository from "../../repositories/CategoryRepository";

class UpdateCategoryUseCase {
  private readonly categoryRepository: CategoryRepository;

  constructor(categoryRepository: CategoryRepository) {
    this.categoryRepository = categoryRepository;
  }

  async execute(id: string, payload: UpdateCategory): Promise<CategoryItem> {
    return await this.categoryRepository.updateCategory(id, payload);
  }
}

export default UpdateCategoryUseCase;
