const { Friendship } = require('../../database');

const rejectFriendRequest = async ({ userId, friendId }) => {
    const existingFriendship = await Friendship.findOne({
        where: {
            userId: friendId,
            friendId: userId,
            status: 'pending',
        },
    });

    if (!existingFriendship) throw Error("No pending friendship request found.");
    await existingFriendship.destroy();

    return { success: true, message: "Friendship request rejected successfully." };
};

module.exports = rejectFriendRequest;

