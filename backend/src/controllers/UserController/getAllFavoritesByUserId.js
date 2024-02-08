const { User, HostPost } = require('../../database');


const getAllFavoritesByUserId = async ({ id }) => {
    if (!id?.length) throw Error('Missing data');
    const findUser = await User.findOne({
        include: [
            {
              model: HostPost,
              through: 'UserFavorites',
            },
          ]
    })
    return findUser;
}

module.exports = getAllFavoritesByUserId;