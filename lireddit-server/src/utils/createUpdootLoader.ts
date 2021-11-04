import DataLoader from 'dataloader';
import { User } from '../entities/User';


// export const createUpdootLoader = () => 
//   new DataLoader<{postId: number, userId: string}, User>(async (userIds) => {
//     const users = await User.findByIds(userIds as number[]);
//     const userIdToUser: Record<string, User> = {};
//     users.forEach((user) => {
//       userIdToUser[user.id] = user;
//     })

//     const sortedUsers = userIds.map((userId) => userIdToUser[userId]);
//     console.log('userIds: ', userIds);
//     console.log('userIdToUser: ', userIdToUser);
//     console.log('sortedUsers: ', sortedUsers);
//     return sortedUsers;
//   }
// );