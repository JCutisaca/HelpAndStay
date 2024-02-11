const { Personality } = require('../../database');

const deletePersonality = async ({ personalityId }) => {
    if (!personalityId?.length) throw Error('Invalid or missing ID')
    const findPersonality = await Personality.findOne({ where: { id: personalityId } })
    if (!findPersonality) throw Error('Personality not found.');
    await findPersonality.destroy();
    return "Personality deleted successfully"
}

module.exports = deletePersonality;