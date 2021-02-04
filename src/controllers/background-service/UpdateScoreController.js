const GetAllClass = require('../../application/use_cases/GetAllClass');

module.exports = (dependecies) => {
  const { classRepository, studentRepository, scoreRepository } = dependecies.DatabaseService;


  async function addScore(userId) {
    return scoreRepository.add({
      userId: userId,
      score: 10
    });
  }

  return {
    getAllClass: getAllClass,
  };
};
