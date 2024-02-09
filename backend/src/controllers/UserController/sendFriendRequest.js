const { Friendship } = require('../../database');

const sendFriendRequest = async ({ userId, friendId }) => {
    const existingFriendship = await Friendship.findOne({
        where: {
            userId: friendId,
            friendId: userId,
        },
    });

    if (existingFriendship?.status === "pending") throw Error("Friend request already pending.");
    if (existingFriendship?.status === "accepted") throw Error("Friendship already accepted.");

    await Friendship.create({
        userId: friendId,
        friendId: userId,
        status: 'pending',
    });

    return { success: true, message: "Friend request sent successfully." };
};

module.exports = sendFriendRequest;
