var express = require('express');
var router = express.Router();

var skillsCtrl = require('../controllers/skills');

//GET /
router.get('/', skillsCtrl.index);
//Get /skills/new
router.get('/new', skillsCtrl.new);
//GET /:id
router.get('/:id', skillsCtrl.show);
//Get /
router.post('/', skillsCtrl.create);

router.delete('/:id')

module.exports = router;
