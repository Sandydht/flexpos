import { UserItem } from "../entities/entities";
import AddStore from "../entities/store/AddStore";
import StoreItem from "../entities/store/StoreItem";
import UpdateStore from "../entities/store/UpdateStore";
import { PaginatedResult } from "../entities/utils/PaginatedResult";
import { PaginationQuery } from "../entities/utils/PaginationQuery";

export default interface StoreRepository {
  addStore(_payload: AddStore): Promise<StoreItem<UserItem>>;
  getStoreDetail(_id: string): Promise<StoreItem<UserItem>>;
  getStoreList(
    _params: PaginationQuery,
  ): Promise<PaginatedResult<StoreItem<UserItem>>>;
  updateStore(_id: string, _payload: UpdateStore): Promise<StoreItem<UserItem>>;
  deleteStore(_id: string): Promise<StoreItem<UserItem>>;
}
