'use strict';

module.exports = {
  up: async function (queryInterface, Sequelize) {
    return queryInterface.sequelize.transaction(async (transaction) => {
      await queryInterface.addColumn(
        'tbl_book_rate',
        'influenceScore',
        { type: Sequelize.INTEGER, defaultValue: 1 }
      )
      
    });
  },

  down: async function (queryInterface, Sequelize) {
    return queryInterface.sequelize.transaction(async (transaction) => {
      await queryInterface.removeColumn(
        'tbl_book_rate',
        'influenceScore'
      )
      
    });
  }
};
