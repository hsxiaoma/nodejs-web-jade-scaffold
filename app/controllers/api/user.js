'use strict';

const Model = require('../../models/user');
const Crud = require('web-crud');

Crud.model(Model);

module.exports = class User extends Crud {
};