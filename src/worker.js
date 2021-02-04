const projectDependencies = require('./config/projectDependencies');
const backgroundJob = require('./frameworks/background-job');

projectDependencies.DatabaseService.initDatabase()
module.exports = backgroundJob(projectDependencies);
