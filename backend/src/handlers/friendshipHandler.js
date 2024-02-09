const getRequestsByUserId = require("../controllers/FriendShipController/getRequestsByUserId")


const getRequestsByUserIdHandler = async (req, res) => {
    try {
        const response = await getRequestsByUserId(req.params);
        res.status(200).json(response);
    } catch (error) {
        res.status(400).json({error: error.message});
    }
}

module.exports = {
    getRequestsByUserIdHandler
}