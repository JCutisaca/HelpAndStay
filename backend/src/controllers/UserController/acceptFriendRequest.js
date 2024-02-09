const { Friendship, User } = require('../../database');
const getUserById = require('./getUserById');

const acceptFriendRequest = async ({ userId, friendId }) => {
    const existingFriendship = await Friendship.findOne({
        where: {
            userId: userId,
            friendId: friendId,
            status: 'pending',
        },
    });

    if (!existingFriendship) throw Error("No pending friendship request found.");
    const findUser = await getUserById({ id: userId });
    await existingFriendship.update({ status: 'accepted' });

    const friendUser = await User.findByPk(friendId);
    await findUser.addFriend(friendUser);

    return { success: true, message: "Friendship request accepted successfully." };
};

module.exports = acceptFriendRequest;
