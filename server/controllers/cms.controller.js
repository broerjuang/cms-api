'use strict'

const CMS = require('../models/cms.model');

let list = (req, res) => {
  CMS
    .find()
    .then((data) => res.json(data))
    .catch((err) => res.json(err))
}

let generate = (req, res) => {
  CMS
    .create(req.body)
    .then((data) => res.json(data))
    .catch((err) => res.json(err))
}

let update = (req, res) => {
  CMS
    .findOneAndUpdate({cms_id: req.params.cms_id})
    .then((data) => res.json(data))
    .catch((err) => res.json(err))
}

let destroy = (req, res) => {
  CMS
    .findOneAndRemove({cms_id: req.params.cms_id})
    .then((data) => res.json(data))
    .catch((err) => res.json(err))
}

let findById = (req, res) => {
  CMS
    .findOne({cms_id: req.params.cms_id})
    .then((data) => res.json(data))
    .catch((err) => res.json(err))
}

module.exports = {
  list,
  generate,
  update,
  destroy,
  findById
}
