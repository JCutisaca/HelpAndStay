const { Router } = require('express');
const { hostPostCreateHandler, getAllHostPostHandler, getHostPostByIdHandler, postFavHandler, deleteFavHandler, postReservationHandler } = require('../handlers/hostPostHandler');
const hostPostRouter = Router();


hostPostRouter.post("/create", hostPostCreateHandler)
hostPostRouter.post("/add", postFavHandler)
hostPostRouter.post("/delete", deleteFavHandler)
hostPostRouter.post("/reserve", postReservationHandler)
hostPostRouter.get("/all", getAllHostPostHandler)
hostPostRouter.get("/:id", getHostPostByIdHandler)


module.exports = hostPostRouter;