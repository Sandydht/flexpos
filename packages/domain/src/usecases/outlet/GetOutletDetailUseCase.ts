import { OutletItem, StoreItem, UserItem } from "../../entities/entities";
import OutletRepository from "../../repositories/OutletRepository";

class GetOutletDetailUseCase {
  private readonly outletRepository: OutletRepository;

  constructor(outletRepository: OutletRepository) {
    this.outletRepository = outletRepository;
  }

  async execute(id: string): Promise<OutletItem<StoreItem<UserItem>>> {
    return await this.outletRepository.getOutletDetail(id);
  }
}

export default GetOutletDetailUseCase;
