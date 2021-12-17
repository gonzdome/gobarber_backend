module.exports = {
    dialect: 'postgres',
    username: 'postgres',
    host: 'localhost',
    database: 'gobarber',
    password: 'docker',
    define: {
        timestamps: true,
        underscored: true,
        underscoredAll: true,
    },
};
