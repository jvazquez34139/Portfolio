const express = require('express');
const router = express.Router();

const data = require('../data.json');
const { projects } = data;
// console.dir(projects);

router.get('/', (req, res) => {
  res.render('index', {projects});
})

router.get('/about', (req, res) => {
  res.render('about');
})
module.exports = router;
