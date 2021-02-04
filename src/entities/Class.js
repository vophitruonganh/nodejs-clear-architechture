module.exports = class {
  constructor(object) {
    this.id = object._id || object.id || null;
    this.name = object.name;
  }
};
