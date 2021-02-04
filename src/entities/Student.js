module.exports = class Student {
  constructor(student) {
    this.id = student._id || student.id || null;
    this.firstName = student.firstName;
    this.lastName = student.lastName;
    this.fullName = `${student.firstName} ${student.lastName}`;
    this.email = student.email;
    this.enrollments = student.enrollments;
  }
};
