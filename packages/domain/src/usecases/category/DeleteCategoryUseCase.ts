import CategoryItem from "../../entities/category/CategoryItem";
import CategoryRepository from "../../repositories/CategoryRepository";

class DeleteCategoryUseCase {
  private readonly categoryRepository: CategoryRepository;

  constructor(categoryRepository: CategoryRepository) {
    this.categoryRepository = categoryRepository;
  }

  async execute(id: string): Promise<CategoryItem> {
    return await this.categoryRepository.deleteCategory(id);
  }
}

export default DeleteCategoryUseCase;
