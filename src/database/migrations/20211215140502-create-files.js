module.exports = {
    up: async (queryInterface, Sequelize) =>
        queryInterface.createTable('files', {
            id: {
                type: Sequelize.INTEGER,
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
            },
            name: {
                type: Sequelize.STRING,
                allowNull: false,
            },
            path: {
                type: Sequelize.STRING,
                allowNull: false,
                unique: true,
            },
            created_at: {
                allowNull: false,
                type: Sequelize.DATE,
            },
            updated_at: {
                allowNull: false,
                type: Sequelize.DATE,
            },
        }),

    down: async (queryInterface) => queryInterface.dropTable('files'),
};
