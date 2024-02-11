const { Router } = require('express');
const { postUserHandler, getAllUsersHandler, verifyEmailHandler, getUserByIdHandler, getAllFavoritesByUserIdHandler,
    sendFriendRequestHandler, acceptFriendRequestHandler, removeFriendHandler, rejectFriendRequestHandler,
    getMyfriendsHandler } = require('../handlers/userHandler');
const userRouter = Router();


userRouter.post("/create", postUserHandler)
userRouter.get("/allUsers", getAllUsersHandler)

userRouter.post("/addFriend", sendFriendRequestHandler)
userRouter.post("/removeFriend", removeFriendHandler)

userRouter.post("/acceptFriend", acceptFriendRequestHandler)
userRouter.post("/rejectFriend", rejectFriendRequestHandler)

userRouter.get("/myFriends/:userId", getMyfriendsHandler)
userRouter.get("/favorites/:id", getAllFavoritesByUserIdHandler)

userRouter.get("/verify/:code/:id", verifyEmailHandler)

userRouter.get("/:id", getUserByIdHandler)

module.exports = userRouter;