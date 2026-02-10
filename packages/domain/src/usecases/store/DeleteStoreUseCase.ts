import { StoreItem, UserItem } from "../../entities/entities";
import StoreRepository from "../../repositories/StoreRepository";

class DeleteStoreUseCase {
  private readonly storeRepository: StoreRepository;

  constructor(storeRepository: StoreRepository) {
    this.storeRepository = storeRepository;
  }

  async execute(id: string): Promise<StoreItem<UserItem>> {
    return await this.storeRepository.deleteStore(id);
  }
}

export default DeleteStoreUseCase;
