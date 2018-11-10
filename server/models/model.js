const mysql = require('mysql');
const Promise = require('bluebird');
require('dotenv').config();

// use below to run locally
// const connection = mysql.createConnection({
//   user: 'root',
//   database: 'headerSidebar',
// });

// use below to run from aws
const connection = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_DATABASE,
  port: process.env.DB_PORT,
});

const db = Promise.promisifyAll(connection, { multiArgs: true });

const executeQuery = query => db.queryAsync(query);

class Model {
  constructor(tablename) {
    this.tablename = tablename;
  }

  getCourseData(courseId) {
    const queryStr = `SELECT * FROM ${this.tablename} WHERE id = ${courseId}`;
    return executeQuery(queryStr);
  }

  getCCOptions(courseId) {
    const queryStr = `SELECT cc_option FROM CC WHERE id IN (SELECT cc_id FROM ${this.tablename} WHERE course_id = ${courseId})`;
    return executeQuery(queryStr);
  }
}

module.exports.Course = new Model('Course');
module.exports.CourseCC = new Model('Course_CC');
