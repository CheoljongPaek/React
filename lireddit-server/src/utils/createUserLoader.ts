import DataLoader from 'dataloader';
import { User } from 'src/entities/User';

// [1, 2, 3, 4] to
// [{id: 1, username: 'Tim'},{},{},{}]
export const createUserLoader = () => new DataLoader<string, User>(async (userIds) => {
  const users = await User.findByIds(userIds as string[]);
  const userIdToUser: Record<string, User> = {};
  users.forEach((user) => {
    userIdToUser[user.id] = user;
  })

  const sortedUsers = userIds.map((userId) => userIdToUser[userId]);
  console.log('userIds: ', userIds);
  console.log('userIdToUser: ', userIdToUser);
  console.log('sortedUsers: ', sortedUsers);
  return sortedUsers;
});