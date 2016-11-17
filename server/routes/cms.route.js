'use strict'

const express = require('express');
const router = express.Router();
const Controller = require('../controllers/cms.controller')

// Get all cms data
router.get('/cms', Controller.list)

//  Post a single CMS
router.post('/cms', Controller.generate)

//  Update a single CMS
router.put('/cms/:cms_id', Controller.update)

//  Delete a single CMS
router.delete('/cms/:cms_id', Controller.destroy)

module.exports = router
