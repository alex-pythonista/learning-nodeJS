// dependencies
const startupDebugger = require('debug')('app:startup');
const dbDebugger = require('debug')('app:db');
const config = require('config');
const Joi = require('joi');
const logger = require('./middleware/logger');
const courses = require('./routes/courses');
const home = require('./routes/home');
const express = require('express');
const helmet = require('helmet');
const morgan = require('morgan');
const app = express();

// Template engine
app.set('view engine', 'pug');
app.set('views', './views');

// Middlewares
app.use(express.json());
app.use(express.urlencoded({extended: true})); 
app.use(express.static('public'));
app.use(helmet());
app.use(logger);
app.use('/api/courses', courses);
app.use('/', home);

// Configuration
console.log('Application Name: ' + config.get('name'));
console.log('Mail server: ' + config.get('mail.host'));
console.log('Mail password: ' + config.get('mail.password'));

// ENV
if (app.get('env') === 'development') {
    app.use(morgan('tiny'));
    startupDebugger('Morgan enabled...');
}

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}...`));
