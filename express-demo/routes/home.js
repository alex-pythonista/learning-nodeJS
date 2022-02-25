const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.render('index', { title: 'Home', message: 'Hello there'});
});

module.exports = router;