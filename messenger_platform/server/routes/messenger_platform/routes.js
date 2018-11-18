const express = require('express');
const router = express.Router();

const messenger_platform = require('./messenger_platform')

router.get('/webhook', messenger_platform.validate_webhook);
router.post('/webhook', messenger_platform.webhook);

router.get('/authorize', messenger_platform.authorize);

module.exports = router;