const skills = [
    {id: 125223, skill: 'Get Matcha Powder', done: true},
    {id: 127904, skill: 'Make Matcha Latte', done: false},
    {id: 139608, skill: 'Repeat', done: false}
  ];
  
  module.exports = {
    getAll,
    getOne,
    create,
    deleteOne
  };

  function deleteOne(id) {
    // All properties attached to req.params are strings!
    id = parseInt(id);
    // Find the index based on the id of the skill object
    const idx = skills.findIndex( skill => skill.id === id);
    skills.splice(idx, 1);
  }


  function create(skill) {
    skill.id = Date.now() %1000000;
    skill.done = false;
    skills.push(skill);
  }

  function getOne(id) {
    id = parseInt(id);
    return skills.find(skill => skill.id === id);
  }
  
  function getAll() {
    return skills;
  }
  