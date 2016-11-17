'use strict'

const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Increment = require('mongoose-sequence')

const cmsSchema = new Schema({
  cms_id: {type: Number},
  letter: {type: String},
  frequency: {type: Number},
  coming: {type: Date, default: Date.now}
})

cmsSchema.plugin(Increment, {inc_field: 'cms_id'})
module.exports = mongoose.model('CMS', cmsSchema)
