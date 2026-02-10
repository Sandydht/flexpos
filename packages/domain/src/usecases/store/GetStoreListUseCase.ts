import { StoreItem, UserItem } from "../../entities/entities";
import { PaginatedResult } from "../../entities/utils/PaginatedResult";
import { PaginationQuery } from "../../entities/utils/PaginationQuery";
import StoreRepository from "../../repositories/StoreRepository";

class GetStoreListUseCase {
  private readonly storeRepository: StoreRepository;

  constructor(storeRepository: StoreRepository) {
    this.storeRepository = storeRepository;
  }

  async execute(
    params: PaginationQuery,
  ): Promise<PaginatedResult<StoreItem<UserItem>>> {
    return await this.storeRepository.getStoreList(params);
  }
}

export default GetStoreListUseCase;
