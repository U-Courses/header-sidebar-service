const mysql = require('mysql');
const Promise = require('bluebird');
require('dotenv').config();

// use below to run locally
const connection = mysql.createConnection({
  user: 'root',
  database: 'headerSidebar',
});

// use below to run from aws
// const connection = mysql.createConnection({
//   host: process.env.DB_HOST,
//   user: process.env.DB_USER,
//   password: process.env.DB_PASS,
//   database: process.env.DB_DATABASE,
//   port: process.env.DB_PORT,
// });

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

  setCourseData(data) {
    const params = [data.title, data.description, data.tag, data.avg_rating, data.total_ratings, data.enrollment,
      data.created_by, data.last_updated, data.language, data.img_url, data.list_price,
      data.discount_price, data.video_hrs, data.total_articles, data.total_downloads, 
      data.active_coupon, data.ccOptions];
    const queryStr = `
    INSERT INTO ${this.tablename} 
    (title, description, tag, avg_rating, total_ratings, enrollment, created_by, last_updated,
    language, img_url, list_price, discount_price, video_hrs, total_articles, total_downloads,
    active_coupon, ccOptions) 
    VALUES (? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ?);
    `;
    return executeQuery(queryStr, params);
  }

  updateCourseData(data) {
    const queryStr = `
      UPDATE ${this.tablename} 
      SET ${data.rowToUpdate} = ${data.newContent}
      WHERE ${data.fieldToUpdate} = ${data.rowValue};
    `;
    return executeQuery(queryStr);
  }

  deleteCourseData(data) {
    const queryStr = `
      DELETE FROM ${this.tablename}
      WHERE id=${data.id};
    `;
    return executeQuery(queryStr);
  }
}

module.exports.Course = new Model('Course');
module.exports.CourseCC = new Model('Course_CC');
