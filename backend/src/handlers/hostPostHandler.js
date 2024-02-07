const getAllHostPost = require("../controllers/HostPostController/getAllHostPost")
const getHostPostById = require("../controllers/HostPostController/getHostPostById")
const hostPostCreate = require("../controllers/HostPostController/hostPostCreate")


const hostPostCreateHandler = async (req, res) => {
    try {
        const response = await hostPostCreate(req.body)
        res.status(201).json(response)
    } catch (error) {
        res.status(400).json({error: error.message})
    }
}

const getAllHostPostHandler = async (req, res) => {
    try {
        const response = await getAllHostPost()
        res.status(200).json(response)
    } catch (error) {
        res.status(400).json({error: error.message})
    }
}

const getHostPostByIdHandler = async (req, res) => {
    try {
        const response = await getHostPostById(req.params)
        res.status(200).json(response)
    } catch (error) {
        res.status(400).json({error: error.message})
    }
}

module.exports = {
    hostPostCreateHandler,
    getAllHostPostHandler,
    getHostPostByIdHandler
}