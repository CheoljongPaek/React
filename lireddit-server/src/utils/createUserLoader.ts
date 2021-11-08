import DataLoader from 'dataloader';
import { User } from '../entities/User';

// [1, 2, 3, 4] to
// [{id: 1, username: 'Tim'},{},{},{}]
// export const createUserLoader = () => new DataLoader<number, User>(async (userIds) => {
//   const users = await User.findByIds(userIds as number[]);
//   // const userIdToUser: Record<string, User> = {};
//   // users.forEach((user) => {
//   //   userIdToUser[user.id] = user;
//   // })

//   // const sortedUsers = userIds.map((userId) => userIdToUser[userId]);
//   // console.log('users: ', users);
//   // console.log('userIds: ', userIds);
//   // console.log('userIdToUser: ', userIdToUser);
//   // console.log('sortedUsers: ', sortedUsers);
//   // return sortedUsers;
//   return users
// });

export const createUserLoader = () =>
  new DataLoader<number, User>(async (userIds) => {
    const users = await User.findByIds(userIds as number[]);
    const userIdToUser: Record<number, User> = {};
    users.forEach((u) => {
      userIdToUser[u.id] = u;
    });

    const sortedUsers = userIds.map((userId) => userIdToUser[userId]);
    // orders matter, so this process makes [1,6,7] -> [7,6,1]
    // console.log("userIds", userIds);
    // console.log("users", users);
    // console.log("userIdToUser", userIdToUser);
    // console.log("sortedUsers", sortedUsers);
    return sortedUsers;
  });

// users:  [
//   User {
//     id: 1,
//     username: 'ben',
//     email: 'ben@ben.com',
//     password: '$argon2i$v=19$m=4096,t=3,p=1$7Y4Q9B6xHfuoJLka0hORtQ$VAIh9OIUlptN/mQ+ndxSSwdx93BKaJ2eBpyUCjhzbAw',
//     createdAt: 2021-10-11T11:50:10.459Z,
//     updateAt: 2021-10-11T11:50:10.459Z
//   },
//   User {
//     id: 6,
//     username: 'bob',
//     email: 'bob@bob.com',
//     password: '$argon2i$v=19$m=4096,t=3,p=1$Z/Wvth2Lv/kUM3XRtTZYfQ$fFLTwqXDmFAzYDVSDWZ/TykOFMeMdPl9K3P8RFMNRt4',
//     createdAt: 2021-10-23T03:59:34.833Z,
//     updateAt: 2021-10-23T03:59:34.833Z
//   }
// ]