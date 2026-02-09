import { describe, expect, it, vi } from "vitest";
import CategoryItem from "../../../entities/category/CategoryItem";
import CategoryRepository from "../../../repositories/CategoryRepository";
import GetCategoryDetailUseCase from "../GetCategoryDetailUseCase";

describe("GetCategoryDetailUseCase", () => {
  const mockCategoryId: string = "category-1";

  it("should call repository getCategoryDetail and return CategoryItem entity", async () => {
    const now = new Date().toISOString();
    const mockCategoryItem: CategoryItem = new CategoryItem(
      "category-1",
      1,
      true,
      now,
      null,
      null,
    );

    const mockCategoryRepository: Partial<CategoryRepository> = {
      getCategoryDetail: vi.fn().mockResolvedValue(mockCategoryItem),
    };

    const useCase: GetCategoryDetailUseCase = new GetCategoryDetailUseCase(
      mockCategoryRepository as CategoryRepository,
    );

    const result = await useCase.execute(mockCategoryId);

    expect(mockCategoryRepository.getCategoryDetail).toHaveBeenCalledWith(
      mockCategoryId,
    );
    expect(result).toStrictEqual(mockCategoryItem);
  });

  it("should throw error when repository throws error", async () => {
    const mockError: Error = new Error("SERVER_ERROR");

    const mockCategoryRepository: Partial<CategoryRepository> = {
      getCategoryDetail: vi.fn().mockRejectedValue(mockError),
    };

    const useCase: GetCategoryDetailUseCase = new GetCategoryDetailUseCase(
      mockCategoryRepository as CategoryRepository,
    );

    await expect(useCase.execute(mockCategoryId)).rejects.toThrow(mockError);
  });
});
