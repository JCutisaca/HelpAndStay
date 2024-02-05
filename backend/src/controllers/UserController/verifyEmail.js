const { User } = require('../../database');

const verifyEmail = async ({ code, id }) => {
    console.log(code, id);
    if (!(code?.length || id?.length)) throw Error("Faltan datos")

    const user = await User.findOne({ where: { id } })

    if (user && user.dataValues.emailCode === code) {
        await User.update({
            emailVerified: true,
            emailCode: null
        }, { where: { id } })
    }
    return "salio todo bien creo xd"
}

module.exports = verifyEmail;