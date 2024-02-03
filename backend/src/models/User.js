const { DataTypes } = require('sequelize')

module.exports = (sequelize) => {
    sequelize.define('User', {
        id: {
            type: DataTypes.UUID,
            primaryKey: true,
            defaultValue: DataTypes.UUIDV4
        },
        name: {
            type: DataTypes.STRING,
            allownull: false,
        },
        lastname: {
            type: DataTypes.STRING,
            allownull: false,
        },
        email: {
            type: DataTypes.STRING,
            allownull: false
        },
        emailVerified: {
            type: DataTypes.BOOLEAN,
            allownull: false,
            defaultValue: false
        },
        password: {
            type: DataTypes.STRING,
            allownull: false
        },
        recoveryCode: {
            type: DataTypes.STRING,
            allownull: true
        },
        image: {
            type: DataTypes.STRING,
            allownull: true,
            unique: true
        },
        age: {
            type: DataTypes.INTEGER,
            allownull: true
        },
        status: {
            type: DataTypes.ENUM(
                'Single',
                'In a relationship',
                'Engaged',
                'Married',
                'Divorced',
                'Widowed',
                'Open relationship',
                'Separated'
            ),
            allownull: false
        },
        quote: {
            type: DataTypes.STRING,
            allownull: false
        },
        aboutMe: {
            type: DataTypes.STRING,
            allownull: false
        },
        facebook: {
            type: DataTypes.STRING,
            allownull: true
        },
        instagram: {
            type: DataTypes.STRING,
            allownull: true
        },
        whatsApp: {
            type: DataTypes.STRING,
            allownull: true
        },
        coreNeeds: {
            type: DataTypes.TEXT,
            allownull: true
        },
        frustrations: {
            type: DataTypes.TEXT,
            allownull: true
        },
        languages: {
            type: DataTypes.DATE,
            allownull: true
        }
    }, {
        timestamps: true
    })
}