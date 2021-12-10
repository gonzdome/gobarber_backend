module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable('users', {
        id: {
            type: Sequelize.INTEGER,
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
        },
        name: {
            type: Sequelize.STRING,
            allowNull:false,
        },
        email: {
            type: Sequelize.STRING,
            allowNull:false,
            unique: true,
        },
        password_hash: {
            type: Sequelize.STRING,
            allowNull:false,
        },
        provider: {
            type: Sequelize.BOOLEAN,
            defaultValue: false,
            allowNull:false,
        },
        created_at:{
            allowNull: false,
            type: Sequelize.DATE,
        },
        updated_at:{
            allowNull: false,
            type: Sequelize.DATE,
        },
    });
  },

  down: async (queryInterface) => {
    return queryInterface.dropTable('users');
  }
};
