const { User } = require('../../database');

const getUserById = async ({ id }) => {
    if (!id?.length) throw Error("Invalid or missing user ID")

    const findUser = await User.findOne({ where: { id } })

    if (!findUser) throw Error("User does not exist")
    
    return findUser;
}

module.exports = getUserById;