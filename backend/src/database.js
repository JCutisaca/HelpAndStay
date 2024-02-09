require("dotenv").config();
const { Sequelize } = require("sequelize");

const fs = require('fs');
const path = require('path');
const { DB_USER, DB_PASSWORD, DB_HOST } = process.env;
const { DB_DEPLOY } = process.env;


// const sequelize = new Sequelize(DB_DEPLOY, {
const sequelize = new Sequelize(`postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/help_and_stay`, {
    logging: false,
    native: false,
});

const basename = path.basename(__filename);

const modelDefiners = [];

fs.readdirSync(path.join(__dirname, '/models'))
    .filter((file) => (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js'))
    .forEach((file) => {
        modelDefiners.push(require(path.join(__dirname, '/models', file)));
    });


modelDefiners.forEach(model => model(sequelize));

let entries = Object.entries(sequelize.models);
let capsEntries = entries.map((entry) => [entry[0][0].toUpperCase() + entry[0].slice(1), entry[1]]);
sequelize.models = Object.fromEntries(capsEntries);


const { User, Personality, Friendship, HostPost, Review, Reservation } = sequelize.models;

User.belongsToMany(User, {
    as: 'friends',
    through: Friendship,
    foreignKey: 'userId',
    otherKey: 'friendId'
});

Friendship.belongsTo(User, { foreignKey: 'userId', as: 'user' });
Friendship.belongsTo(User, { foreignKey: 'friendId', as: 'friend' });

User.belongsToMany(Personality, { through: "UserPersonality", timestamps: false });
Personality.belongsToMany(User, { through: "UserPersonality", timestamps: false });

User.belongsToMany(HostPost, { through: "UserFavorites", timestamps: true });
HostPost.belongsToMany(User, { through: "UserFavorites", timestamps: true });

User.hasMany(Review);
Review.belongsTo(User);

User.hasOne(HostPost, { foreignKey: 'ownerId', as: 'OwnedHostPost' });
HostPost.belongsTo(User, { foreignKey: 'ownerId', as: 'OwnedHostPost' });

HostPost.hasMany(Review);
Review.belongsTo(HostPost);

User.hasMany(Reservation);
HostPost.hasMany(Reservation);

Reservation.belongsTo(User);
Reservation.belongsTo(HostPost);

module.exports = {
    ...sequelize.models,
    conn: sequelize,
};