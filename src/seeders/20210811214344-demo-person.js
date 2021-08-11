'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    
    await queryInterface.bulkInsert('People', [
      {
        firstName: 'Marcos Paulo',
        lastName: 'Ribeiro',
        email: 'M_P_R@example.com',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        firstName: 'Diana',
        lastName: 'Sousa',
        email: 'DiannaSousaR@example.com',
        createdAt: new Date(),
        updatedAt: new Date()
      },
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
