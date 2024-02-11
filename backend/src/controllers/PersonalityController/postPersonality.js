const { Personality } = require('../../database');

const postPersonalities = async ({ personalities }) => {
    if (!Array.isArray(personalities) || personalities.length === 0) throw Error('Invalid input. Provide an array of personality names.');

    const createdPersonalities = await Promise.all(
        personalities.map(async (name) => {
            if (!name?.trim()) throw  Error('Personality name is required.');

            const [newPersonality, created] = await Personality.findOrCreate({
                where: { name: name.trim() }
            });

            if (!created) throw new Error(`Personality '${name}' already exists.`);

            return newPersonality;
        })
    );

    return { success: true, personalities: createdPersonalities };
};

module.exports = postPersonalities;
