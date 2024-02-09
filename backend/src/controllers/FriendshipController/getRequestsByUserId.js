const { Friendship, User } = require('../../database');

const getFriendRequestsByUserId = async ({ userId }) => {
    if (!userId) throw Error("Invalid or missing user ID");

    const friendRequests = await Friendship.findAll({
        where: {
            userId: userId,
            status: 'pending',
        },
        include: [
            {
                model: User,
                as: 'friend',
                attributes: ['id', 'name', 'lastname', 'image'],
            },
        ],
    });

    return friendRequests;
};

module.exports = getFriendRequestsByUserId;
