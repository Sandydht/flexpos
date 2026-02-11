import { fixtures } from "../../../test/fixtures";
import { userFixture } from "../../../test/fixtures/userFixture";
import UserItem from "../UserItem";

export const makeUserItemPayload = (
  override?: Partial<ReturnType<typeof userFixture>>,
): UserItem => {
  const { user } = fixtures({ user: override });

  return new UserItem(
    user.id,
    user.photoUrl,
    user.username,
    user.email,
    user.phoneNumber,
    user.fullName,
    user.address,
    user.roles,
    user.createdAt,
    user.updatedAt,
    user.deletedAt,
  );
};
