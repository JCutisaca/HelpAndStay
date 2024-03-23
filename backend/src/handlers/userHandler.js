const sendFriendRequest = require("../controllers/UserController/sendFriendRequest")
const getAllFavoritesByUserId = require("../controllers/UserController/getAllFavoritesByUserId")
const getAllUsers = require("../controllers/UserController/getAllUsers")
const getUserById = require("../controllers/UserController/getUserById")
const postUser = require("../controllers/UserController/postUser")
const verifyEmail = require("../controllers/UserController/verifyEmail")
const acceptFriendRequest = require("../controllers/UserController/acceptFriendRequest")
const rejectFriendRequest = require("../controllers/UserController/rejectFriendRequest")
const removeFriend = require("../controllers/UserController/removeFriend")
const getMyfriends = require("../controllers/UserController/getMyFriends")
const userLoginGoogle = require("../controllers/UserController/userLoginGoogle")


const postUserHandler = async (req, res) => {
    try {
        const response = await postUser(req.body)
        res.status(201).json(response)
    } catch (error) {
        res.status(400).json({error: error.message})
    }
}

const userLoginGoogleHandler = async (req, res) => {
    try {
        const response = await userLoginGoogle(req.body)
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

const sendFriendRequestHandler = async (req, res) => {
    try {
        const response = await sendFriendRequest(req.body)
        res.status(200).json(response);
    } catch (error) {
        res.status(404).json({error: error.message})
    }
}

const acceptFriendRequestHandler = async (req, res) => {
    try {
        const response = await acceptFriendRequest(req.body)
        res.status(200).json(response);
    } catch (error) {
        res.status(404).json({error: error.message})
    }
}

const rejectFriendRequestHandler = async (req, res) => {
    try {
        const response = await rejectFriendRequest(req.body)
        res.status(200).json(response);
    } catch (error) {
        res.status(404).json({error: error.message})
    }
}

const removeFriendHandler = async (req, res) => {
    try {
        const response = await removeFriend(req.body)
        res.status(200).json(response);
    } catch (error) {
        res.status(404).json({error: error.message})
    }
}

const getMyfriendsHandler = async (req, res) => {
    try {
        const response = await getMyfriends(req.params)
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
    getAllFavoritesByUserIdHandler,
    sendFriendRequestHandler,
    acceptFriendRequestHandler,
    rejectFriendRequestHandler,
    removeFriendHandler,
    getMyfriendsHandler,
    userLoginGoogleHandler
}