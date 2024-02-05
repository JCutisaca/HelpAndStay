const welcomeHtml = require("../emailTemplates/welcomeHtml");
const transporter = require("./transporter")
const { EMAIL_USER } = process.env

const mailUserCreated = async (email, verifyEmail, id) => {
  await transporter.sendMail({
    from: `Help & Stay ${EMAIL_USER}`,
    to: email,
    subject: "Bienvenido",
    html: welcomeHtml(verifyEmail, id)
  })
}

module.exports = mailUserCreated;