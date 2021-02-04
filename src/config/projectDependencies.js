const MongoDbStudentRepository = require('../frameworks/persistance/MongoDb/MongoDbDatabaseServices.js');
const UniversityCrmServices = require('../frameworks/externalServices/UniversityCrmServices');

module.exports = (() => {
  return {
    DatabaseService: new MongoDbStudentRepository(),
    CrmServices: new UniversityCrmServices()
  };
})();
