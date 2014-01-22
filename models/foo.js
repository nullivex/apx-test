'use strict';
var mongoose = require('mongoose').mongoose
  , schema

//load plugins
mongoose.plugin(require('mongoose-merge-plugin'))
mongoose.plugin(require('mongoose-list'))

schema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  }
})

//export model now
exports.name = 'foo'
exports.description = 'Foo test model'
exports.schema = schema
exports.model = mongoose.model('Foo',schema)