const getAllFavoritesByUserId = require("../controllers/UserController/getAllFavoritesByUserId")
const getAllUsers = require("../controllers/UserController/getAllUsers")
const getUserById = require("../controllers/UserController/getUserById")
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

const getUserByIdHandler = async (req, res) => {
    try {
        const response = await getUserById(req.params)
        res.status(200).json(response);
    } catch (error) {
        res.status(404).json({error: error.message})
    }
}

const getAllFavoritesByUserIdHandler = async (req, res) => {
    try {
        const response = await getAllFavoritesByUserId(req.params)
        res.status(200).json(response);
    } catch (error) {
        res.status(404).json({error: error.message})
    }
}

module.exports = {
    postUserHandler,
    getAllUsersHandler,
    verifyEmailHandler,
    getUserByIdHandler,
    getAllFavoritesByUserIdHandler
}