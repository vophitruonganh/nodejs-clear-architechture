const Student = require('../../entities/Student');

module.exports = (Repository) => {

  async function Execute(...params) {
    return Repository.getAll();
  }

  return {
    Execute
  };
};
