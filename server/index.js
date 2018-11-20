const bodyParser = require('body-parser');
const path = require('path');
const express = require('express');
const models = require('./models/model.js');
const course = require('../Db/course.js');

const PORT = 3003;
const app = express();
app.listen(PORT, () => {
  console.log(`listening on http://localhost:${PORT}/`);
});
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
// cannot serve static files and data from the same API endpoints
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

// app.get('/courses/:courseId/header', (req, res) => {
//   const id = req.params.courseId;
//   models.Course.getCourseData(id)
//     .then((courseData) => {
//       const resData = courseData[0][0];
//       models.CourseCC.getCCOptions(id)
//         .then((ccData) => {
//           const [rawData] = ccData;
//           const ccOptions = rawData.map(data => data.cc_option);
//           resData.ccOptions = ccOptions;
//           res.json(resData);
//         })
//         .catch((err) => {
//           res.status(500).send(err);
//         });
//     })
//     .catch((err) => {
//       res.status(500).send(err);
//     });
// });

// app.put('/courses/:courseId', (req, res) => {
//   const obj = {
//     rowToUpdate: req.params.rowToUpdate,
//     newContent: req.params.newContent,
//     fieldToUpdate: req.params.fieldToUpdate,
//     rowValue: req.params.courseId,
//   };
//   models.Course.updateCourseData(obj)
//     .then(() => res.status(200).send())
//     .catch((err) => {
//       res.status(500).send(err);
//     });
// });

// app.post('/courses', (req, res) => {
//   const obj = {
//     title: req.params.title,
//     description: req.params.description,
//     tag: req.params.tag,
//     avg_rating: req.params.avg_rating,
//     total_ratings: req.params.total_ratings,
//     enrollment: req.params.enrollment,
//     created_by: req.params.created_by,
//     last_updated: req.params.last_updated,
//     language: req.params.language,
//     img_url: req.params.img_url,
//     list_price: req.params.list_price,
//     discount_price: req.params.discount_price,
//     video_hrs: req.params.video_hrs,
//     total_articles: req.params.total_articles,
//     total_downloads: req.params.total_downloads,
//     active_coupon: req.params.active_coupon,
//     ccOptions: req.params.ccOptions,
//   };
//   models.Course.setCourseData(obj)
//     .then(() => res.status(200).send())
//     .catch((err) => {
//       res.status(500).send(err);
//     });
// });

// app.delete('/courses/:courseId/', (req, res) => {
//   const obj = {
//     id: req.params.courseId,
//   };
//   models.Course.deleteCourseData(obj)
//     .then(() => res.status(200).send())
//     .catch((err) => {
//       res.status(500).send(err);
//     });
// });
