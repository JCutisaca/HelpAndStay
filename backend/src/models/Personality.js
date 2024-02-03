const { DataTypes } = require('sequelize')

module.exports = (sequelize) => {
    sequelize.define('Personality', {
        id: {
            type: DataTypes.UUID,
            primaryKey: true,
            defaultValue: DataTypes.UUIDV4
        },
        name: {
            type: DataTypes.ENUM(
                'Responsible',
                'Loyal',
                'Creative',
                'Caring',
                'Multitasking',
                'Kindly',
                'Industrious',
                'Sociable',
                'Adventurous',
                'Optimistic',
                'Analytical',
                'Empathetic',
                'Ambitious',
                'Easygoing',
                'Charismatic',
                'Patient',
                'Organized',
                'Enthusiastic',
                'Resilient',
                'OpenMinded',
                'Assertive',
                'Humble',
                'Decisive',
                'Resourceful',
                'Perceptive',
                'Punctual',
                'Tenacious',
                'Reliable'
            ),
            allownull: false,
        }
    }, {
        timestamps: true
    })
}