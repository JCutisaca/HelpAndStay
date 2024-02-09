const { Friendship, User } = require('../../database');

const getMyfriends = async ({ userId }) => {
    if (!userId?.length) throw Error("Invalid or missing user ID");

    const findFriends = await Friendship.findAll({
        where: {
            userId: userId,
            status: 'accepted',
        },
        include: [
            {
                model: User,
                as: 'friend',
                attributes: ['id', 'name', 'lastname', 'image', 'age', 'status', 'quote', 'aboutMe', 'facebook', 'instagram', 'whatsApp', 'coreNeeds', 'frustrations', 'languages'],
            },
        ],
    });

    return findFriends;
};

module.exports = getMyfriends;