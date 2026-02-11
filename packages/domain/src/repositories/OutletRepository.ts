import { StoreItem, UpdateOutlet, UserItem } from "../entities/entities";
import AddOutlet from "../entities/outlet/AddOutlet";
import OutletItem from "../entities/outlet/OutletItem";
import { PaginationQuery } from "../entities/utils/PaginationQuery";

export default interface OutletRepository {
  addOutlet(_payload: AddOutlet): Promise<OutletItem<StoreItem<UserItem>>>;
  getOutletDetail(_id: string): Promise<OutletItem<StoreItem<UserItem>>>;
  getOutletList(
    _params: PaginationQuery,
  ): Promise<OutletItem<StoreItem<UserItem>>>;
  updateOutlet(
    _id: string,
    _payload: UpdateOutlet,
  ): Promise<OutletItem<StoreItem<UserItem>>>;
  deleteOutlet(_id: string): Promise<OutletItem<StoreItem<UserItem>>>;
}
