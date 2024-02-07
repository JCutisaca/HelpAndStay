const { HostPost } = require('../../database')
const getUserById = require('../UserController/getUserById')

const hostPostCreate = async ({ userId, address, quantityPeople, aboutHome, aboutWork, pictures, dateAvailable, reservations }) => {
    if (!(userId?.length || address?.length?.trim() || quantityPeople?.length || aboutHome?.length.trim() || aboutWork?.length.trim() || pictures?.length || dateAvailable?.length || reservations?.length)) throw Error("Required data is missing. Please provide the fields")
    const user = await getUserById({ id: userId });
    const existingHostPost = await HostPost.findOne({ where: { ownerId: userId } });
    if (existingHostPost) throw Error("You already have a published post. Only one post per user is allowed.")
    const hostPost = await HostPost.create({
        address: address.trim(),
        quantityPeople,
        aboutHome: aboutHome.trim(),
        aboutWork: aboutWork.trim(),
        pictures,
        dateAvailable,
        reservations,
    });
    await user.setOwnedHostPost(hostPost);
    return hostPost;
}

module.exports = hostPostCreate;