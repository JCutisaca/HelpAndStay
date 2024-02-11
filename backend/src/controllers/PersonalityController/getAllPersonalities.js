const { Personality } = require('../../database');

const getAllPersonalities = async () => {
    const findPersonalities = await Personality.findAll();
    return findPersonalities;
}

module.exports = getAllPersonalities;