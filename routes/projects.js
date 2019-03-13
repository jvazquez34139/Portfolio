const express = require('express');
const router = express.Router();

const data = require('../data.json');
const { projects } = data;

router.get('/:id', (req, res) => {
  const {id} = req.params;
  const project = projects[id];



  res.render('project', {project});
  // console.log(projects[id]);
})

module.exports = router;
