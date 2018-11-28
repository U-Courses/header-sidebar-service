require('newrelic');
require('dotenv').config();
const bodyParser = require('body-parser');
const path = require('path');
const express = require('express');
const course = require('../Db/course.js');

const PORT = 3003;
const app = express();
app.listen(PORT, () => {
  console.log(`listening on http://localhost:${PORT}/`);
});
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use('/courses/:courseId', express.static(path.join(__dirname, '/../public/dist')));

app.get('/courses/:courseId/header', (req, res) => {
  const id = req.params.courseId;
  course.getCourseData(id, (err, results) => {
    if (err) {
      res.status(500).send(err);
    } else {
      console.log('Server results: ', results);
      res.status(200).send(results);
    }
  });
});
