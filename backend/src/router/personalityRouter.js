const { Router } = require('express');
const { postPersonalitiesHandler, getAllPersonalitiesHandler, deletePersonalityHandler } = require('../handlers/personalityHandler');
const personalityRouter = Router();


personalityRouter.post("/create", postPersonalitiesHandler)
personalityRouter.post("/remove", deletePersonalityHandler)
personalityRouter.get("/all", getAllPersonalitiesHandler)

module.exports = personalityRouter;