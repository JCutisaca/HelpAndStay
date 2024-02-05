const { Router } = require('express');
const { postUserHandler, getAllUsersHandler, verifyEmailHandler } = require('../handlers/userHandler');
const userRouter = Router();


userRouter.post("/create", postUserHandler)
userRouter.get("/allUsers", getAllUsersHandler)
userRouter.get("/verify/:code/:id", verifyEmailHandler)

module.exports = userRouter;