const { Reservation } = require("../../database");
const getUserById = require("../../controllers/UserController/getUserById");
const getHostPostById = require("../HostPostController/getHostPostById");

const postReservation = async ({ userId, hostPostId, reservation }) => {
    const findUser = await getUserById({ id: userId });
    const findHostPost = await getHostPostById({ id: hostPostId });

    if (!reservation?.length) {
        throw new Error('Please provide valid dates.');
    }
    if(findHostPost.ownerId === userId) throw Error("Owners cannot reserve their own property.")
    const newReservation = await Reservation.create({ reservationDate: reservation });
    await findUser.addReservation(newReservation);
    await findHostPost.addReservation(newReservation);

    return { success: true, message: 'Reservation successful.' };
};

module.exports = postReservation;
