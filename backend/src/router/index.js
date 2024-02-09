const { Router } = require('express');
const userRouter = require('./userRouter');
const hostPostRouter = require('./hostPostRouter');
const reservationRouter = require('./reservationRouter');
const friendshipRouter = require('./friendshipRouter');

const router = Router()

router.use("/user", userRouter)
router.use("/friendship", friendshipRouter)
router.use("/hostPost", hostPostRouter)
router.use("/reservation", reservationRouter)


module.exports = router;