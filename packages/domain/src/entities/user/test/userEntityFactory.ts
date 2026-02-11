import { userFixture } from "../../../test/fixtures/userFixture";
import { UserRole } from "../types";
import UserItem from "../UserItem";

export const makeUserItemPayload = (override?: Partial<any>): UserItem => {
  const validPayload = {
    ...userFixture(),
    ...override,
  };

  return new UserItem(
    validPayload.id,
    validPayload.photoUrl,
    validPayload.username,
    validPayload.email,
    validPayload.phoneNumber,
    validPayload.fullName,
    validPayload.address,
    validPayload.roles as unknown as UserRole[],
    validPayload.createdAt,
    validPayload.updatedAt,
    validPayload.deletedAt,
  );
};
