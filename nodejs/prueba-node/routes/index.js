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
  const getMovies = movies.filter( (movie) => {
    return movie.type == "movie"
  })
  return res.json(getMovies);
})   

router.get('/series', (req, res) => {
  const getSeries = movies.filter( (serie) => {
    return serie.type == "serie"
  })
  return res.json(getSeries);
})   

router.get("/movies/:id", (req, res) => {
  const id = req.params.id;
  
  const getMovie = movies.filter((movie) => {
    return movie.id == id;
  })

  
  if(getMovie.length > 0 ){
    const [first] = getMovie;
    return res.json(first);
  } else {
    return res.sendStatus(404);
  }  
});


router.post("/contact", (req, res) => {
  const body = req.body;
  const {name, mail, contact} = body;

  if(name && mail && contact){
    return res.sendStatus(201);
  }else {
    return res.sendStatus(400);
  }
  return res.sendStatus(201);
});

module.exports = router;
