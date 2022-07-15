const Skill = require('../models/skill');

module.exports = {
      index,
      show
    };
    
    function index(req, res) {
        const skills = Skill.getAll();
        res.render('skills/index', { skills });
    };
    
    function show(req, res) {
        res.render('skills/show', {
          skill: skill.getOne(req.params.id),
        });
      }
      
    