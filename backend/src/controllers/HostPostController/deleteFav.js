const getUserById = require('../UserController/getUserById');
const getHostPostById = require('./getHostPostById');

const deleteFav = async ({userId, hostPostId}) => {
    if(!(userId?.length || hostPostId?.length)) throw Error("Invalid or missing ID");
    const findUser = await getUserById({id: userId})
    const findHostPost = await getHostPostById({id: hostPostId})
    await findUser.removeHostPost(findHostPost);
    const userFavorites = await findUser.getHostPosts();

    return userFavorites;
}

module.exports = deleteFav;