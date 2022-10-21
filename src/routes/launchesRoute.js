const express = require('express');

const router = express.Router();

router.get('/next', (req, res) => { res.status(200).send('oiii'); });

module.exports = router;
