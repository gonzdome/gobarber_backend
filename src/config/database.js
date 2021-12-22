require('dotenv/config');

module.exports = {
    dialect: 'postgres',
    username: process.env.DB_USER,
    host: process.env.DB_HOST,
    database: process.env.DB_NAME,
    password: process.env.DB_PASS,
    define: {
        timestamps: true,
        underscored: true,
        underscoredAll: true,
    },
};
