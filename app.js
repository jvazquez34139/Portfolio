const express = require('express');

const mainRoutes = require('./routes');
const projectRoutes = require('./routes/projects');

const app = express();

const port1 = 3000;

app.set('view engine', 'pug');

//gives access to the public directory
app.use('/static', express.static('public'));

app.use(mainRoutes);
app.use('/project', projectRoutes);

//error handler
app.use((req, res, next) => {
  const err = new Error('Not Found');
  err.status = 404;
  next(err);
});
app.use((err, req, res, next) => {
  res.status(err.status || 500);
  res.render('error', { error: err });
});

app.listen(port1, () => {
  console.log("listening on localhost:3000!");
});
