const mongoose = require('mongoose');

const schema = mongoose.Schema({
  name: String,
  email: String,
  phone: String
});

const Model = mongoose.model('Model', schema, 'models');

module.exports = Model;
