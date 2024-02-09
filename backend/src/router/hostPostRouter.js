const { Router } = require('express');
const { hostPostCreateHandler, getAllHostPostHandler, getHostPostByIdHandler, postFavHandler, deleteFavHandler } = require('../handlers/hostPostHandler');
const hostPostRouter = Router();


hostPostRouter.post("/create", hostPostCreateHandler)
hostPostRouter.post("/add", postFavHandler)
hostPostRouter.post("/delete", deleteFavHandler)
hostPostRouter.get("/all", getAllHostPostHandler)
hostPostRouter.get("/:id", getHostPostByIdHandler)


module.exports = hostPostRouter;