import { UserItem } from "../../entities/entities";
import StoreItem from "../../entities/store/StoreItem";
import StoreRepository from "../../repositories/StoreRepository";

class GetStoreDetailUseCase {
  private readonly storeRepository: StoreRepository;

  constructor(storeRepository: StoreRepository) {
    this.storeRepository = storeRepository;
  }

  async execute(id: string): Promise<StoreItem<UserItem>> {
    return await this.storeRepository.getStoreDetail(id);
  }
}

export default GetStoreDetailUseCase;
