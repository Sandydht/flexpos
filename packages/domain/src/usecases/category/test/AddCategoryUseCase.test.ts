import { describe, expect, it, vi } from "vitest";
import AddCategory from "../../../entities/category/AddCategory";
import CategoryRepository from "../../../repositories/CategoryRepository";
import CategoryItem from "../../../entities/category/CategoryItem";
import AddCategoryUseCase from "../AddCategoryUseCase";

describe("AddCategoryUseCase", () => {
  const mockAddCategory: AddCategory = new AddCategory(
    "store-1",
    "Category 1",
    1,
    true,
  );

  it("should call repository addCategory and return CategoryItem entity", async () => {
    const now = new Date("2026-03-02").toISOString();
    const mockCategoryItem: CategoryItem = new CategoryItem(
      "category-1",
      "Category 1",
      1,
      true,
      now,
      null,
      null,
    );

    const mockCategoryRepository: Partial<CategoryRepository> = {
      addCategory: vi.fn().mockResolvedValue(mockCategoryItem),
    };

    const useCase: AddCategoryUseCase = new AddCategoryUseCase(
      mockCategoryRepository as CategoryRepository,
    );

    const result = await useCase.execute(mockAddCategory);

    expect(mockCategoryRepository.addCategory).toHaveBeenCalledWith(
      mockAddCategory,
    );
    expect(result).toStrictEqual(mockCategoryItem);
  });

  it("should throw error when repository throws error", async () => {
    const mockError: Error = new Error("SERVER_ERROR");

    const mockCategoryRepository: Partial<CategoryRepository> = {
      addCategory: vi.fn().mockRejectedValue(mockError),
    };

    const useCase: AddCategoryUseCase = new AddCategoryUseCase(
      mockCategoryRepository as CategoryRepository,
    );

    await expect(useCase.execute(mockAddCategory)).rejects.toThrow(
      mockError.message,
    );
  });
});
