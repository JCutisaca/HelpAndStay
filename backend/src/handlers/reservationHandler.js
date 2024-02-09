const deleteReservation = require("../controllers/ReservationController/deleteReservation");
const getReservationByUserId = require("../controllers/ReservationController/getReservationByUserId");
const postReservation = require("../controllers/ReservationController/postReservation");


const getReservationByUserIdHandler = async (req, res) => {
    try {
        const response = await getReservationByUserId(req.params);
        res.status(200).json(response)
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}

const postReservationHandler = async (req, res) => {
    try {
        const response = await postReservation(req.body)
        res.status(201).json(response)
    } catch (error) {
        res.status(400).json({error: error.message})
    }
}

const deleteReservationHandler = async (req, res) => {
    try {
        const response = await deleteReservation(req.body)
        res.status(200).json(response)
    } catch (error) {
        res.status(400).json({error: error.message})
    }
}

module.exports = {
    getReservationByUserIdHandler,
    postReservationHandler,
    deleteReservationHandler
}