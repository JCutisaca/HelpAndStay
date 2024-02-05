const { User } = require('../../database')
const mailUserCreated = require('../../config/mailUserCreated');
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken');
const { JWT_SECRET } = process.env;

const regexEmail = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
const postUser = async ({ name, lastname, email, password, image, age, status, quote, aboutMe, facebook, instagram, whatsApp, coreNeeds, frustrations, languages }) => {

    const newName = name?.trim()
    const newLastname = lastname?.trim()
    const newEmail = email?.trim()
    const newPassword = password?.trim()
    const newStatus = status?.trim()
    const newQuote = quote?.trim()
    const newFacebook = facebook?.trim()
    const newInstagram = instagram?.trim()
    const newWhatsApp = whatsApp?.trim()
    const newCoreNeeds = coreNeeds?.trim()
    const newFrustrations = frustrations?.trim()
    const newAboutMe = aboutMe?.trim()

    if (!(newName.length || newLastname.length || newEmail.length || newPassword.length || image?.length || age?.length || newStatus.length || newAboutMe.length || languages?.length)) throw Error("Required data is missing. Please provide the fields")

    if (newPassword.length < 6 || newPassword.length > 14) throw Error('Password must be between 6 and 14 characters in length.');

    if (!regexEmail.test(newEmail)) throw Error("Invalid email address entered.")

    const hashedPassword = await bcrypt.hash(newPassword, 10);

    const [newUser, created] = await User.findOrCreate({
        where: {
            name: newName,
            lastname: newLastname,
            email: newEmail,
            password: hashedPassword,
            image: image,
            age: age,
            status: newStatus,
            quote: newQuote,
            aboutMe: newAboutMe,
            facebook: newFacebook,
            instagram: newInstagram,
            whatsApp: newWhatsApp,
            coreNeeds: newCoreNeeds,
            frustrations: newFrustrations,
            languages: languages
        }
    })

    if (!created) throw Error("User with the provided information already exists.")

    const { id } = newUser.dataValues;

    if (created) {
        const verifyEmail = await bcrypt.hash(id, 10)
        await User.update({
            emailCode: verifyEmail
        },
            { where: { email } }
        )
        mailUserCreated(newEmail, verifyEmail, id)
    }

    const token = jwt.sign({ id }, JWT_SECRET)
    return ({ user: newUser.name, token });
}

module.exports = postUser;