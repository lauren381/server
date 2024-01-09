const express = require('express');
const { createDailyComplete } = require('../controllers/dailycomplete');
const routeDailyComplete = express.Router();

routeDailyComplete.post('/createdailycomplete',createDailyComplete)



module.exports = routeDailyComplete