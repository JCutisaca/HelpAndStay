const { Reservation } = require("../../database");
const getUserById = require("../UserController/getUserById");
const getHostPostById = require("../HostPostController/getHostPostById");

const deleteReservation = async ({ userId, hostPostId, reservationId }) => {
    const findUser = await getUserById({ id: userId });
    const findHostPost = await getHostPostById({ id: hostPostId });

    if (!reservationId) throw Error('Please provide a valid reservation ID.');

    const findReservation = await Reservation.findByPk(reservationId);

    if (!findReservation) throw Error('Reservation not found.');

    await findReservation.destroy();
    await findUser.removeReservation(findReservation);
    await findHostPost.removeReservation(findReservation);

    return { success: true, message: 'Reservation canceled successfully.' };
};

module.exports = deleteReservation;
