const DatabaseServices = require("../../../application/contracts/DatabaseServices.js");

const StudentRepository = require("../MongoDb/MongoDbStudentRepository");
const ClassRepository = require("../MongoDb/MongoDbClassRepository");
const ScoreRepository = require("../MongoDb/MongoDbScoreRepository");

const MongoClient = require("mongodb").MongoClient;

module.exports = class MongoDbDatabaseServices extends (
  DatabaseServices
) {
  constructor() {
    super();
    this.studentRepository = new StudentRepository();
    this.classRepository = new ClassRepository();
    this.scoreRepository = new ScoreRepository();
  }

  async initDatabase() {
    const conn = await MongoClient.connect("mongodb://localhost:27017/school", {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    });

    try {
      await this.studentRepository.addCollection(
        conn.db().collection("Student")
      );
      await this.classRepository.addCollection(conn.db().collection("Class"));
      await this.scoreRepository.addCollection(conn.db().collection("Score"));
    } catch (error) {
      console.error("Cannot inject collection to repository");
    }
  }
};
