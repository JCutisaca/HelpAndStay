const { Router } = require('express');
const { getRequestsByUserIdHandler } = require('../handlers/friendshipHandler');
const friendshipRouter = Router();


friendshipRouter.get("/requests/:userId", getRequestsByUserIdHandler)

module.exports = friendshipRouter;