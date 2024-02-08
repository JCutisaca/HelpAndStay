const { Router } = require('express');
const { postUserHandler, getAllUsersHandler, verifyEmailHandler, getUserByIdHandler, getAllFavoritesByUserIdHandler } = require('../handlers/userHandler');
const userRouter = Router();


userRouter.post("/create", postUserHandler)
userRouter.get("/allUsers", getAllUsersHandler)
userRouter.get("/favorites/:id", getAllFavoritesByUserIdHandler)
userRouter.get("/verify/:code/:id", verifyEmailHandler)
userRouter.get("/:id", getUserByIdHandler)

module.exports = userRouter;