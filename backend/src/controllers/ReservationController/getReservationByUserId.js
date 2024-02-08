const { Reservation } = require('../../database')

const getReservationByUserId = async ({ userId }) => {
    if (!userId?.length) throw Error("Invalid or missing user ID")
    const allReserve = await Reservation.findAll({ where: { UserId: userId } })
    return allReserve
}

module.exports = getReservationByUserId;