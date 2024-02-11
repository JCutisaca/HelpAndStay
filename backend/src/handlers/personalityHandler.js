const deletePersonality = require("../controllers/PersonalityController/deletePersonality");
const getAllPersonalities = require("../controllers/PersonalityController/getAllPersonalities");
const postPersonalities = require("../controllers/PersonalityController/postPersonality")


const postPersonalitiesHandler = async (req, res) => {
    try {
        const response = await postPersonalities(req.body);
        res.status(201).json(response);
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}

const deletePersonalityHandler = async (req, res) => {
    try {
        const response = await deletePersonality(req.body);
        res.status(200).json(response);
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}

const getAllPersonalitiesHandler = async (req, res) => {
    try {
        const response = await getAllPersonalities();
        res.status(200).json(response);
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}

module.exports = {
    postPersonalitiesHandler,
    getAllPersonalitiesHandler,
    deletePersonalityHandler
};