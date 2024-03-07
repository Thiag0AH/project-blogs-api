'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('users', {
        id: {
            // autoIncrement: true,
            allowNull: false,
            primaryKey: true,
            type: Sequelize.INTEGER,
        },
        displayName: {
            allowNull: false,
            field: 'display_name',
            type: Sequelize.STRING,
        },
        email: {
            allowNull: false,
            type: Sequelize.STRING,
        },
        password: {
            allowNull: false,
            type: Sequelize.STRING,
        },
        image: {
            type: Sequelize.STRING
        }
    })
  },

  async down (queryInterface, Sequelize) {
  
     await queryInterface.dropTable('users');
  }
};