import { OutletItem, StoreItem, UserItem } from "../../entities/entities";
import { PaginationQuery } from "../../entities/utils/PaginationQuery";
import OutletRepository from "../../repositories/OutletRepository";

class GetOutletListUseCase {
  private readonly outletRepository: OutletRepository;

  constructor(outletRepository: OutletRepository) {
    this.outletRepository = outletRepository;
  }

  async execute(
    params: PaginationQuery,
  ): Promise<OutletItem<StoreItem<UserItem>>> {
    return await this.outletRepository.getOutletList(params);
  }
}

export default GetOutletListUseCase;
