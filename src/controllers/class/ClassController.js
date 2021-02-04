const GetAllClass = require('../../application/use_cases/GetAllClass');

module.exports = (dependecies) => {
  const { classRepository } = dependecies.DatabaseService;
  // const { CrmServices } = dependecies;

  return {
    getAllClass: (req, res, next) => {
      // init use case
      const GetAllClassQuery = GetAllClass(classRepository);

      GetAllClassQuery.Execute()
        .then((data) => res.json(data))
        .catch(error => next(error));
    },
  };
};
