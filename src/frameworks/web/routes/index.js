const express = require('express');
const studentsRouting = require('./students');
const classRoting = require('./class');

const apiRouter = (dependencies) => {
  const routes = express.Router();

  const studentsRouter = studentsRouting(dependencies);
  const classRouter = classRoting(dependencies);

  routes.use('/students', studentsRouter);
  routes.use('/class', classRouter);
  return routes;
};

module.exports = apiRouter;
