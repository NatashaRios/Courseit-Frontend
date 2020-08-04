var express = require('express');
var router = express.Router();
const movies = require('../data/movies.json')

/* GET home page. */
router.get('/', (req, res, next) => {
  const person = {
    name: 'Natasha',
    surname: 'Rios',
    age: 26
  };

  return res.json(person);
});



  router.get('/movies', (req, res) => {
  
  return res.json(movies);
})   
module.exports = router;
