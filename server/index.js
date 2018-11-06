const bodyParser = require('body-parser');
const path = require('path');
const express = require('express');
const models = require('./models/model.js');

const PORT = 3003;
const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
// app.use('/courses/*/header', express.static(path.join(__dirname, '/../public/dist')));
app.use(express.static(path.join(__dirname, '/../public/dist')));
app.listen(PORT, () => {
  console.log(`listening on http://localhost:${PORT}/`);
});

app.get('/courses/:courseId/header', (req, res) => {
  const id = req.params.courseId;
  models.Course.getCourseData(id)
    .then((courseData) => {
      const resData = courseData[0][0];
      models.CourseCC.getCCOptions(id)
        .then((ccData) => {
          const [rawData] = ccData;
          const ccOptions = rawData.map(data => data.cc_option);
          resData.ccOptions = ccOptions;
          res.json(resData);
        })
        .catch((err) => {
          res.status(500).send(err);
        });
    })
    .catch((err) => {
      res.status(500).send(err);
    });
});
