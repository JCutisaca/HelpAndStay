const { DataTypes } = require('sequelize')

module.exports = (sequelize) => {
    sequelize.define('HostPost', {
        id: {
            type: DataTypes.UUID,
            primaryKey: true,
            defaultValue: DataTypes.UUIDV4
        },
        address: {
            type: DataTypes.STRING,
            allownull: false,
        },
        quantityPeople: {
            type: DataTypes.INTEGER,
            allownull: false,
        },
        aboutHome: {
            type: DataTypes.TEXT,
            allownull: false,
        },
        aboutWork: {
            type: DataTypes.TEXT,
            allownull: false,
        },
        pictures: {
            type: DataTypes.ARRAY(DataTypes.STRING),
            allownull: false,
        },
        dateAvailable: {
            type: DataTypes.ARRAY(DataTypes.STRING),
            allownull: false,
        },
        reservations: {
            type: DataTypes.ARRAY(DataTypes.STRING),
            allownull: true,
        },
    }, {
        timestamps: true
    })
}