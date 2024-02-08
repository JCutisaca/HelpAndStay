const getReservationByUserId = require("../controllers/ReservationController/getReservationByUserId")


const getReservationByUserIdHandler = async (req, res) => {
    try {
        const response = await getReservationByUserId(req.params);
        res.status(201).json(response)
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}

module.exports = {
    getReservationByUserIdHandler
}