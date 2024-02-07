const { HostPost, User } = require('../../database');

const getAllHostPost = async () => {
    const allHostPost = await HostPost.findAll({
        attributes: { exclude: ['aboutHome', 'pictures'] },
        include: [{
            model: User,
            attributes: ['id', 'name', 'lastname', 'age', 'aboutMe', 'image', 'languages'],
            as: 'OwnedHostPost',
        }],
    });
    return allHostPost;
}

module.exports = getAllHostPost;