const { User } = require('../../database');
const getUserById = require('./getUserById');

const verifyEmail = async ({ code, id }) => {
    if (!(code?.length || id?.length)) throw Error("Missing data.")

    const user = await getUserById({ id })

    if (user && user.dataValues.emailCode === code) {
        await User.update({
            emailVerified: true,
            emailCode: null
        }, { where: { id } })
    } else {
        throw Error("Invalid code or user not found.")
    }
    return "Email verification successful."
}

module.exports = verifyEmail;