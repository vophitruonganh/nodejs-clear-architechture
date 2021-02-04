const projectDependencies = require('./config/projectDependencies');
const webServer = require('./frameworks/web');

projectDependencies.DatabaseService.initDatabase()
module.exports = webServer(projectDependencies);
