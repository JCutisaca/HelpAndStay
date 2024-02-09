const { Router } = require('express');
const { getReservationByUserIdHandler, postReservationHandler, deleteReservationHandler } = require('../handlers/reservationHandler');
const reservationRouter = Router();

reservationRouter.post("/reserve", postReservationHandler)
reservationRouter.post("/delete", deleteReservationHandler)
reservationRouter.get("/:userId", getReservationByUserIdHandler)

module.exports = reservationRouter;