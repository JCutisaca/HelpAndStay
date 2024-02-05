const { User } = require('../../database');

const getAllUsers = async () => {
    return await User.findAll();
}

module.exports = getAllUsers;