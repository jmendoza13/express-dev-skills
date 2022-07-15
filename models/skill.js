const skills = [
    {id: 125223, skill: 'Get Matcha Powder', done: true},
    {id: 127904, skill: 'Make Matcha Latte', done: false},
    {id: 139608, skill: 'Repeat', done: false}
  ];
  
  module.exports = {
    getAll,
    getOne,
    create
  };
  
  function create(skill) {
    skill.id = Date.now() %1000000;
    skill.done = false;
    skills.push(skill);
  }

  
  function getAll() {
    return skills;
  }
  
  function getOne(id) {
    id = parseInt(id);
    return skills.find(skill => skill.id === id);
  }