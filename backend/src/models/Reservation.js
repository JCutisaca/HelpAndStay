const { DataTypes } = require('sequelize')

module.exports = (sequelize) => {
    sequelize.define('Reservation', {
        id: {
            type: DataTypes.UUID,
            primaryKey: true,
            defaultValue: DataTypes.UUIDV4
        },
        reservationDate: {
            type: DataTypes.JSONB,
            allownull: false,
        }
    }, {
        timestamps: true
    })
}