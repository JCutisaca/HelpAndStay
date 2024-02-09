const { DataTypes } = require('sequelize')

module.exports = (sequelize) => {
    sequelize.define('Friendship', {
        id: {
            type: DataTypes.UUID,
            primaryKey: true,
            defaultValue: DataTypes.UUIDV4
        },
        status: {
            type: DataTypes.ENUM('pending', 'accepted'),
            allowNull: true,
        }
    }, {
        timestamps: true
    })
}