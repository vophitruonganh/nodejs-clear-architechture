const express = require('express');
const ClassController = require('../../../controllers/class/ClassController.js');

// address - api/students
// load dependencies
const studentsRouter = (dependencies) => {
  const router = express.Router();

  // load controller with dependencies
  const controller = ClassController(dependencies);

  router
    .route('/')
    .get(controller.getAllClass)
  return router;
};

module.exports = studentsRouter;
