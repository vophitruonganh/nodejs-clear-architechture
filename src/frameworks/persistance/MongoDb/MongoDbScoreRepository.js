/* eslint-disable no-param-reassign */
/* eslint-disable arrow-body-style */
const ClassRepository = require('../../../application/contracts/ClassRepository');
const ClassEntities = require('../../../entities/Class');

module.exports = class MongoDbStudentRepository extends ClassRepository {
  constructor() {
    super();
    this.students = [];
    this.currentId = 1;

  }

  addCollection(collection) {
    this.collection = collection;
  }

  async add(score) {
    try {
      return this.collection.insert(score);
    } catch (error) {
      throw new Error('Error Occurred');
    }
  }
};
