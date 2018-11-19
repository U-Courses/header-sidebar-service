const mongoose = require('mongoose');
const fs = require('fs');
const parse = require('csv-parse');
const destroy = require('destroy');
const { performance } = require('perf_hooks');
const db = require('./index.js');

mongoose.Promise = global.Promise;


const courseSchema = new mongoose.Schema({
  _id: Number,
  title: String,
  description: String,
  tag: String,
  avgRating: Number,
  totalRatings: Number,
  enrollment: Number,
  createdBy: String,
  lastUpdated: Date,
  language: String,
  ccOptions: String,
  imgURL: String,
  listPrice: String,
  discountPrice: String,
  videoHrs: Number,
  totalArticles: Number,
  totalDownloads: Number,
  activeCoupon: String,
});

const Course = mongoose.model('Course', courseSchema);

// const csvData = [];
// const readStream = fs.createReadStream('./textfiles/seedFile3.csv');
// const csvObjects = [];

// const t0 = performance.now();
// readStream
//   .pipe(parse({ delimiter: ',' }))
//   .on('data', (csvrow) => {
//     // console.log(csvrow);
//     csvData.push(csvrow);
//     // destroy(readStream);
//   })
//   .on('end', () => {
//     // destroy(readStream);
//     for (let i = 0; i < csvData.length; i++) {
//       const obj = {
//         _id: null,
//         title: null,
//         description: null,
//         tag: null,
//         avgRating: null,
//         totalRatings: null,
//         enrollment: null,
//         createdBy: null,
//         lastUpdated: null,
//         language: null,
//         ccOptions: null,
//         imgURL: null,
//         listPrice: null,
//         discountPrice: null,
//         videoHrs: null,
//         totalArticles: null,
//         totalDownloads: null,
//         activeCoupon: null,
//       };
//       for (let j = 0; j < csvData[i].length; j++) {
//         // finding object key same as currently looping index
//         const currentKey = Object.keys(obj);
//         // return console.log(currentKey[j]);
//         if (currentKey[j] === '_id' || currentKey[j] === 'avgRating' || currentKey[j] === 'totalRatings' || currentKey[j] === 'enrollment' || currentKey[j] === 'videoHrs' || currentKey[j] === 'totalArticles' || currentKey[j] === 'totalDownloads') {
//           // console.log('test');
//           obj[currentKey[j]] = Number(csvData[i][j]);
//         } else if (currentKey[j] === 'lastUpdated') {
//           obj[currentKey[j]] = new Date(csvData[i][j]);
//         } else {
//           obj[currentKey[j]] = csvData[i][j];
//         }
//       }
//       csvObjects.push(obj);
//     }
//     // console.log(csvObjects);
//     Course.insertMany(csvObjects, (err) => {
//       if (err) {
//         console.log(err);
//       }
//       const t1 = performance.now();
//       console.log('Database seeding ended...');
//       console.log("Time taken: " + (t1 - t0) + " milliseconds.");
//     });
//   });
// const fromCSV = [];


// module.exports = Course;
