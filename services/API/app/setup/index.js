const mongoose = require('mongoose'),
    UserModel = require('@BudgModels/user');

const  models = {
    User: mongoose.model('User')
};
module.exports = models;