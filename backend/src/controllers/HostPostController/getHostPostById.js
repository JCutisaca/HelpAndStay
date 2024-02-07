const { HostPost, User } = require('../../database')

const getHostPostById = async ({ id }) => {
    if (!id?.length) throw Error("Invalid or missing ID")
    const findHostPost = await HostPost.findOne({
        where: { id },
        include: [{
            model: User,
            attributes: ['id', 'name', 'lastname', 'age', 'aboutMe', 'image', 'languages'],
            as: 'OwnedHostPost',
        }],
    })
    if (!findHostPost) throw Error('Post not found')
    return findHostPost;
}

module.exports = getHostPostById;