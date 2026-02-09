import { describe, expect, it, vi } from "vitest";
import UpdateCategory from "../../../entities/category/UpdateCategory";
import CategoryItem from "../../../entities/category/CategoryItem";
import CategoryRepository from "../../../repositories/CategoryRepository";
import UpdateCategoryUseCase from "../UpdateCategoryUseCase";

describe("UpdateCategoryUseCase", () => {
  const mockCategoryId: string = "category-1";
  const mockUpdateCategory: UpdateCategory = new UpdateCategory(
    "Updated Category",
    2,
    true,
  );

  it("should call repository updateCategory and return CategoryItem entity", async () => {
    const now = new Date().toISOString();
    const mockCategoryItem: CategoryItem = new CategoryItem(
      "category-1",
      1,
      true,
      now,
      now,
      null,
    );

    const mockCategoryRepository: Partial<CategoryRepository> = {
      updateCategory: vi.fn().mockResolvedValue(mockCategoryItem),
    };

    const useCase: UpdateCategoryUseCase = new UpdateCategoryUseCase(
      mockCategoryRepository as CategoryRepository,
    );

    const result = await useCase.execute(mockCategoryId, mockUpdateCategory);

    expect(mockCategoryRepository.updateCategory).toHaveBeenCalledWith(
      mockCategoryId,
      mockUpdateCategory,
    );
    expect(result).toStrictEqual(mockCategoryItem);
  });

  it("should throw error when repository throws error", async () => {
    const mockError: Error = new Error("SERVER_ERROR");

    const mockCategoryRepository: Partial<CategoryRepository> = {
      updateCategory: vi.fn().mockRejectedValue(mockError),
    };

    const useCase: UpdateCategoryUseCase = new UpdateCategoryUseCase(
      mockCategoryRepository as CategoryRepository,
    );

    await expect(
      useCase.execute(mockCategoryId, mockUpdateCategory),
    ).rejects.toThrow(mockError);
  });
});
