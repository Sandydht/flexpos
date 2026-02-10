import { UserItem } from "../../entities/entities";
import StoreItem from "../../entities/store/StoreItem";
import UpdateStore from "../../entities/store/UpdateStore";
import StoreRepository from "../../repositories/StoreRepository";

class UpdateStoreUseCase {
  private readonly storeRepository: StoreRepository;

  constructor(storeRepository: StoreRepository) {
    this.storeRepository = storeRepository;
  }

  async execute(
    id: string,
    payload: UpdateStore,
  ): Promise<StoreItem<UserItem>> {
    return await this.storeRepository.updateStore(id, payload);
  }
}

export default UpdateStoreUseCase;
