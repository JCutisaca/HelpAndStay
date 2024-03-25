const axios = require('axios')
const { User } = require('../../database')
const { GOOGLE_CLIENT_ID, URL_GOOGLE_TOKEN, JWT_SECRET } = process.env;
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken');

const userLoginGoogle = async ({ accessToken, user }) => {
    if (!accessToken) throw Error('Token is required.')
    const birthday = "03/11/1998"
    const { data } = await axios(`${URL_GOOGLE_TOKEN}${accessToken}`)
    console.log(data);
    if (data?.aud !== GOOGLE_CLIENT_ID) throw Error('Invalid client ID. Please provide a valid client ID.')
    const newEmail = user?.email.toLowerCase()
    const findUser = await User.findOne({ where: { email: newEmail } })
    if (!findUser) {
        const newUser = await User.create({
            firstName: user.firstName,
            lastName: user?.lastName ? user.lastName : null,
            email: newEmail,
            image: user.image ? user.image : null,
            birthday: birthday,
            provider: 'Google'
        })
        // await newUser.setPersonalities(selectedPersonalities);

        const verifyEmail = await bcrypt.hash(id, 10)
        await User.update({
            emailCode: verifyEmail
        },
            { where: { email } }
        )
        mailUserCreated(newEmail, verifyEmail, id)

        const { id } = newUser.dataValues;
        const token = jwt.sign({ id }, JWT_SECRET)
        return ({ message: `User Created: ${newUser.name}`, token, idUser: id });
    }
    const { id, email } = findUser.dataValues;
    const token = jwt.sign({ id, email }, JWT_SECRET)
    return ({ ...findUser.dataValues, token });
}

module.exports = userLoginGoogle;