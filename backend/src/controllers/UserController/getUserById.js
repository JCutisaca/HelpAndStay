const { User, HostPost, Personality } = require('../../database');

const getUserById = async ({ id }) => {
    if (!id?.length) throw Error("Invalid or missing user ID")

    const findUser = await User.findOne({
        where: { id },
        include: [
            {
                model: HostPost,
                attributes: ['address'],
            },
            {
                model: Personality,
                attributes: ['id', 'name'],
                through: { attributes: [] },
            }
        ],
    })

    if (!findUser) throw Error("User does not exist")

    return findUser;
}

module.exports = getUserById;