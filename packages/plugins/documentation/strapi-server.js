'use strict';

const bootstrap = require('./server/bootstrap');
const services = require('./server/services');
const routes = require('./server/routes');
const controllers = require('./server/controllers');
const register = require('./server/register');
const config = require('./server/config');

module.exports = () => {
  return {
    bootstrap,
    config,
    routes,
    controllers,
    register,
    services,
  };
};
