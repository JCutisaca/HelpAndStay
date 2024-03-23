const { User, Personality } = require('../../database')
const mailUserCreated = require('../../config/mailUserCreated');
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken');
const { JWT_SECRET } = process.env;

const regexEmail = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
const regexPassword = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).*$/;
const postUser = async ({ firstName, lastName, email, confirmEmail, password, confirmPassword, birthday, codeNumber, phoneNumber, country, city }) => {

    const newName = firstName?.trim()
    const newLastname = lastName?.trim()
    const newEmail = email?.trim()?.toLowerCase();
    const newPassword = password?.trim()
    const newPhoneNumber = phoneNumber?.trim()

    if (!(newName?.length || newLastname?.length || newEmail?.length || confirmEmail?.length || newPassword?.length || confirmPassword?.length || birthday?.length || codeNumber?.length || newPhoneNumber?.length || country?.length || city?.length)) throw Error("Required data is missing. Please provide the fields")

    if (newPassword.length < 8 || newPassword.length > 20) throw Error('Password must be between 8 and 20 characters in length.');
    if (!regexPassword.test(newPassword)) throw Error("errors.passwordInvalid")
    if(newPassword !== confirmPassword) throw Error("errors.confirmPasswordDiscrepance")

    if (!regexEmail.test(newEmail)) throw Error("Invalid email address entered.")
    if(newEmail !== confirmEmail.toLowerCase()) throw Error("errors.confirmEmailDiscrepance");

    const hashedPassword = await bcrypt.hash(newPassword, 10);

    // const selectedPersonalities = await Personality.findAll({
    //     where: { id: personality }
    // });

    // if (selectedPersonalities.length !== personality.length) throw Error('At least one personality does not exist.');

    const [newUser, created] = await User.findOrCreate({
        where: {
            firstName: newName,
            lastName: newLastname,
            email: newEmail,
            password: hashedPassword,
            // image: image,
            birthday: birthday,
            codeNumber,
            phoneNumber: newPhoneNumber,
            country,
            city
            // status: newStatus,
            // quote: newQuote,
            // aboutMe: newAboutMe,
            // facebook: newFacebook,
            // instagram: newInstagram,
            // whatsApp: newWhatsApp,
            // coreNeeds: newCoreNeeds,
            // frustrations: newFrustrations,
            // languages: languages,
        }
    })

    if (!created) throw Error("User with the provided information already exists.");

    const { id } = newUser.dataValues;

    if (created) {
        // await newUser.setPersonalities(selectedPersonalities);

        const verifyEmail = await bcrypt.hash(id, 10)
        await User.update({
            emailCode: verifyEmail
        },
            { where: { email } }
        )
        mailUserCreated(newEmail, verifyEmail, id)
    }

    const token = jwt.sign({ id }, JWT_SECRET)
    return ({ user: newUser.dataValues, token });
}

module.exports = postUser;