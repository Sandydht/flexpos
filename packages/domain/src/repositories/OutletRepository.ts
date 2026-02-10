import { StoreItem, UserItem } from "../entities/entities";
import AddOutlet from "../entities/outlet/AddOutlet";
import OutletItem from "../entities/outlet/OutletItem";

export default interface OutletRepository {
  addOutlet(_payload: AddOutlet): Promise<OutletItem<StoreItem<UserItem>>>;
}
