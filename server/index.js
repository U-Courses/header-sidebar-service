const bodyParser = require('body-parser');
const path = require('path');
const express = require('express');

const PORT = 3001;
const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, '/../public/dist')));
app.listen(PORT, () => {
  console.log(`listening on http://localhost:${PORT}/`);
});

app.get('/course/:courseId', (req, res) => {
  const course = req.params.courseId;
});
