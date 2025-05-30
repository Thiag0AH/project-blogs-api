'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('blog_posts', {
      id: {
          autoIncrement: true,
          allowNull: false,
          primaryKey: true,
          type: Sequelize.INTEGER,
      },
     title: {
          allowNull: false,
          type: Sequelize.STRING,
     },
     content: {
          allowNull: false,
          type: Sequelize.STRING,
     },
     userId: {
          allowNull: false,
          type: Sequelize.INTEGER,
          field: 'user_id',
          references: {
            model: 'users',
            key: 'id',
          }
     },
     published: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.NOW,
     },
     updated: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.NOW,
     }
  })
  },

  async down (queryInterface, Sequelize) {
   
    await queryInterface.dropTable('blog_posts');
  }
};
