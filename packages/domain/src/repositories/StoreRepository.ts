import { UserItem } from "../entities/entities";
import AddStore from "../entities/store/AddStore";
import StoreItem from "../entities/store/StoreItem";
import UpdateStore from "../entities/store/UpdateStore";

export default interface StoreRepository {
  addStore(_payload: AddStore): Promise<StoreItem<UserItem>>;
  getStoreDetail(_id: string): Promise<StoreItem<UserItem>>;
  updateStore(_id: string, _payload: UpdateStore): Promise<StoreItem<UserItem>>;
}
