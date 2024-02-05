const getAllUsers = require("../controllers/UserController/getAllUsers")
const postUser = require("../controllers/UserController/postUser")
const verifyEmail = require("../controllers/UserController/verifyEmail")


const postUserHandler = async (req, res) => {
    try {
        const response = await postUser(req.body)
        res.status(201).json(response)
    } catch (error) {
        res.status(400).json({error: error.message})
    }
}

const getAllUsersHandler = async (req, res) => {
    try {
        const response = await getAllUsers()
        res.status(200).json(response);
    } catch (error) {
        res.status(404).json({error: error.message})
    }
}
const verifyEmailHandler = async (req, res) => {
    try {
        const response = await verifyEmail(req.params)
        res.status(200).json(response);
    } catch (error) {
        res.status(404).json({error: error.message})
    }
}

module.exports = {
    postUserHandler,
    getAllUsersHandler,
    verifyEmailHandler
}