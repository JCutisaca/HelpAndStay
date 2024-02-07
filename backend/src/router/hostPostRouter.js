const { Router } = require('express');
const { hostPostCreateHandler, getAllHostPostHandler, getHostPostByIdHandler } = require('../handlers/hostPostHandler');
const hostPostRouter = Router();


hostPostRouter.post("/create", hostPostCreateHandler)
hostPostRouter.get("/all", getAllHostPostHandler)
hostPostRouter.get("/:id", getHostPostByIdHandler)


module.exports = hostPostRouter;