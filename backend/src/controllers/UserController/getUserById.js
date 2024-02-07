const { User, HostPost } = require('../../database');

const getUserById = async ({ id }) => {
    if (!id?.length) throw Error("Invalid or missing user ID")

    const findUser = await User.findOne({ where: { id },
        include: [{
            model: HostPost,
            attributes: ['address'],
        }],
    })

    if (!findUser) throw Error("User does not exist")
    
    return findUser;
}

module.exports = getUserById;