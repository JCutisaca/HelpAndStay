const { Router } = require('express');
const { getReservationByUserIdHandler } = require('../handlers/reservationHandler');
const reservationRouter = Router();

reservationRouter.get("/:userId", getReservationByUserIdHandler)

module.exports = reservationRouter;