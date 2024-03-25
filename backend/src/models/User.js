const { DataTypes } = require('sequelize')

module.exports = (sequelize) => {
    sequelize.define('User', {
        id: {
            type: DataTypes.UUID,
            primaryKey: true,
            defaultValue: DataTypes.UUIDV4
        },
        firstName: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        lastName: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
        },
        emailVerified: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: false
        },
        emailCode: {
            type: DataTypes.STRING,
            allowNull: true
        },
        password: {
            type: DataTypes.STRING,
            allowNull: true
        },
        recoveryCode: {
            type: DataTypes.STRING,
            allowNull: true
        },
        image: {
            type: DataTypes.STRING,
            allowNull: true
        },
        birthday: {
            type: DataTypes.STRING,
            allowNull: false
        },
        codeNumber: {
            type: DataTypes.STRING,
            allowNull: true
        },
        phoneNumber: {
            type: DataTypes.STRING,
            allowNull: true
        },
        country: {
            type: DataTypes.STRING,
            allowNull: true
        },
        city: {
            type: DataTypes.STRING,
            allowNull: true
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
            allowNull: true
        },
        quote: {
            type: DataTypes.STRING,
            allowNull: true
        },
        aboutMe: {
            type: DataTypes.STRING,
            allowNull: true
        },
        facebook: {
            type: DataTypes.STRING,
            allowNull: true
        },
        instagram: {
            type: DataTypes.STRING,
            allowNull: true
        },
        whatsApp: {
            type: DataTypes.STRING,
            allowNull: true
        },
        coreNeeds: {
            type: DataTypes.TEXT,
            allowNull: true
        },
        frustrations: {
            type: DataTypes.TEXT,
            allowNull: true
        },
        languages: {
            type: DataTypes.ARRAY(DataTypes.STRING),
            allowNull: true
        },
        provider: {
            type: DataTypes.ENUM("Google", "Facebook", "System"),
            allowNull: false
        }
    }, {
        timestamps: true
    })
}