const getUserById = require('../UserController/getUserById');
const getHostPostById = require('./getHostPostById');

const postFav = async ({userId, hostPostId}) => {
    if(!(userId?.length || hostPostId?.length)) throw Error("Invalid or missing ID");
    const findUser = await getUserById({id: userId})
    const findHostPost = await getHostPostById({id: hostPostId})
    await findUser.addHostPost(findHostPost);
    const userFavorites = await findUser.getHostPosts();

    return userFavorites;
}

module.exports = postFav;