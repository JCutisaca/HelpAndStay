const { Router } = require('express');
const userRouter = require('./userRouter');
const hostPostRouter = require('./hostPostRouter');
const reservationRouter = require('./reservationRouter');
const friendshipRouter = require('./friendshipRouter');
const personalityRouter = require('./personalityRouter');

const router = Router()

router.use("/user", userRouter)
router.use("/friendship", friendshipRouter)
router.use("/hostPost", hostPostRouter)
router.use("/reservation", reservationRouter)
router.use("/personality", personalityRouter)


module.exports = router;