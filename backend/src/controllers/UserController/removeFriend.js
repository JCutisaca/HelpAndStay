const { Friendship } = require('../../database');

const removeFriend = async ({ userId, friendId }) => {
    const existingFriendship = await Friendship.findOne({
        where: {
            userId,
            friendId,
        },
    });

    if (!existingFriendship) {
        throw new Error("Friendship not found.");
    }

    await existingFriendship.destroy();

    return { success: true, message: "Friendship successfully removed." };
};

module.exports = removeFriend;
