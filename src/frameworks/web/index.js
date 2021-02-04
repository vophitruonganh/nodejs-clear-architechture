const express = require('express');
const bodyParser = require('body-parser');
const routes = require('./routes');
const ErrorHandler = require('../common/ErrorHandler');
const app = express();

const port = process.env.PORT || 9999;

module.exports =  (projectDependencies) => {
    // load middlewares
    app.use(bodyParser.urlencoded({ extended: true }));
    app.use(bodyParser.json());

    // load routes
    app.use('/api', routes(projectDependencies));

    // generic error handler
    app.use(ErrorHandler);

    // eslint-disable-next-line arrow-body-style
    app.listen(port, () => console.log(`Application start with port ${port}`));
    return app;
}

