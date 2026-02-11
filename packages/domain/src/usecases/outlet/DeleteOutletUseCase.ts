import { OutletItem, StoreItem, UserItem } from "../../entities/entities";
import OutletRepository from "../../repositories/OutletRepository";

class DeleteOutletUseCase {
  private readonly outletRepository: OutletRepository;

  constructor(outletRepository: OutletRepository) {
    this.outletRepository = outletRepository;
  }

  async execute(id: string): Promise<OutletItem<StoreItem<UserItem>>> {
    return await this.outletRepository.deleteOutlet(id);
  }
}

export default DeleteOutletUseCase;
