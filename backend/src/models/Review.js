const { DataTypes } = require('sequelize')

module.exports = (sequelize) => {
    sequelize.define('Review', {
        id: {
            type: DataTypes.UUID,
            primaryKey: true,
            defaultValue: DataTypes.UUIDV4
        },
        rating: {
            type: DataTypes.INTEGER,
            allowNull: false,
            validate: {
                min: 1,
                max: 5,
            }
        },
        reviewText: {
            type: DataTypes.TEXT,
            allowNull: true,
        },
    }, {
        timestamps: true
    })
}