const StudentRepository = require('../../../application/contracts/StudentRepository.js');
const Student = require('../../../entities/Student');

module.exports = class MongoDbStudentRepository extends StudentRepository {
  constructor() {
    super();
    this.students = [];
    this.currentId = 1;
    this.collection = undefined;
  }

  /**
   *
   * @param collection
   */
  addCollection(collection) {
    this.collection = collection;
  }

  async add(studentInstance) {
    try {
      this.currentId = this.currentId + 1;
      studentInstance.id = this.currentId;
      this.students.push(studentInstance);
    } catch (error) {
      throw new Error('Error Occurred');
    }

    return studentInstance;
  }

  async update(studentInstance) {
    let student;
    try {
      student = this.students.find(x => x.id === studentInstance.id);
      if (student) {
        Object.assign(student, { studentInstance });
      }

    } catch (error) {
      throw new Error('Error Occurred');
    }

    return student;
  }

  async delete(studentId) {
    try {
      const studentIndex = this.students.findIndex(x => x.id === studentId);
      if (studentIndex !== -1) {
        this.students.splice(studentIndex, 1);
      }
    } catch (error) {
      throw new Error('Error Occurred');
    }

    return true;
  }

  async getById(studentId) {
    let student;
    try {
      const id = parseInt(studentId);
      student = this.students.find(x => x.id === id);
    } catch (err) {
      throw new Error('Error Occurred');
    }

    return student;
  }

  async getByEmail(studentEmail) {
    let student;
    try {
      student = this.students.find(x => x.email === studentEmail);
    } catch (err) {
      throw new Error('Error Occurred');
    }

    return student;
  }

  async getAll() {
    try {
      const students = await this.collection.find()
        .toArray();
      return students.map(student => new Student(student));
    } catch (error) {
      throw new Error(`=====================================`, error);
    }
  }

  async addEnrollment(studentId, enrollment) {
    const id = parseInt(studentId);
    const student = this.students.find(x => x.id === id);

    if (!student) {
      throw new Error('student does not exist');
    }

    if (!student.enrollments) {
      student.enrollments = [];
    }
    student.enrollments.push(enrollment);

    return student;
  }
};
