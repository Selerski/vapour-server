const router = require('express').Router();
const { postMessage } = require('../controllers/messages');

router.post('/', postMessage);

module.exports = router;
