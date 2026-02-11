import {
  OutletItem,
  StoreItem,
  UpdateOutlet,
  UserItem,
} from "../../entities/entities";
import OutletRepository from "../../repositories/OutletRepository";

class UpdateOutletUseCase {
  private readonly outletRepository: OutletRepository;

  constructor(outletRepository: OutletRepository) {
    this.outletRepository = outletRepository;
  }

  async execute(
    id: string,
    payload: UpdateOutlet,
  ): Promise<OutletItem<StoreItem<UserItem>>> {
    return await this.outletRepository.updateOutlet(id, payload);
  }
}

export default UpdateOutletUseCase;
