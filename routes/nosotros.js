var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
    res.send('Hola, soy la seccion nosotros');
});

module.exports = router;