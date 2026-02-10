import {
  AddOutlet,
  OutletItem,
  StoreItem,
  UserItem,
} from "../../entities/entities";
import OutletRepository from "../../repositories/OutletRepository";

class AddOutletUseCase {
  private readonly outletRepository: OutletRepository;

  constructor(outletRepository: OutletRepository) {
    this.outletRepository = outletRepository;
  }

  async execute(payload: AddOutlet): Promise<OutletItem<StoreItem<UserItem>>> {
    return await this.outletRepository.addOutlet(payload);
  }
}

export default AddOutletUseCase;
