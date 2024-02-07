const { Router } = require('express');
const userRouter = require('./userRouter');
const hostPostRouter = require('./hostPostRouter');

const router = Router()

router.use("/user", userRouter)
router.use("/hostPost", hostPostRouter)


module.exports = router;