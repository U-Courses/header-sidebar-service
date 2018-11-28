const mongoose = require('mongoose');
const db = require('./index.js');

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
},
{ collection: 'course' });

const Course = mongoose.model('Course', courseSchema);

const getCourseData = (courseId, callback) => Course.find({ _id: courseId }).exec(callback);

module.exports.getCourseData = getCourseData;
