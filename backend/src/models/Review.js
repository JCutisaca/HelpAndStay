const { DataTypes } = require('sequelize')

module.exports = (sequelize) => {
    sequelize.define('Review', {
        id: {
            type: DataTypes.UUID,
            primaryKey: true,
            defaultValue: DataTypes.UUIDV4
        },
        rating: {
            type: DataTypes.ENUM('1', '2', '3', '4', '5'),
            allowNull: false,
        },
        reviewText: {
            type: DataTypes.TEXT,
            allowNull: true,
        },
    }, {
        timestamps: true
    })
}