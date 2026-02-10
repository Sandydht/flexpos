import { UserItem } from "../../entities/entities";
import AddStore from "../../entities/store/AddStore";
import StoreItem from "../../entities/store/StoreItem";
import StoreRepository from "../../repositories/StoreRepository";

class AddStoreUseCase {
  private readonly storeRepository: StoreRepository;

  constructor(storeRepository: StoreRepository) {
    this.storeRepository = storeRepository;
  }

  async execute(payload: AddStore): Promise<StoreItem<UserItem>> {
    return await this.storeRepository.addStore(payload);
  }
}

export default AddStoreUseCase;
