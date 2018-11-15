const mysql = require('mysql');
const Promise = require('bluebird');
const seeds = require('./seed.js');
require('dotenv').config();

// use below to run locally
const connection = mysql.createConnection({ user: 'root' });

// use below to run from aws
// const connection = mysql.createConnection({
//   host: process.env.DB_HOST,
//   user: process.env.DB_USER,
//   password: process.env.DB_PASS,
//   database: process.env.DB_DATABASE,
//   port: process.env.DB_PORT,
// });

const db = Promise.promisifyAll(connection, { multiArgs: true });

const createTables = () => (
  // creates course table
  db.queryAsync(`
    CREATE TABLE IF NOT EXISTS Course (
      id INTEGER NOT NULL AUTO_INCREMENT PRIMARY KEY,
      title VARCHAR(70),
      description VARCHAR(255),
      tag VARCHAR(13),
      avg_rating DECIMAL(2, 1),
      total_ratings INTEGER(3),
      enrollment INTEGER(3),
      created_by VARCHAR(40),
      last_updated VARCHAR(7),
      language VARCHAR(25),
      img_url VARCHAR(100),
      list_price VARCHAR(7),
      discount_price VARCHAR(7),
      video_hrs DECIMAL(3, 1),
      total_articles INTEGER(3),
      total_downloads INTEGER(3),
      active_coupon VARCHAR(11)
    );`)
    // creates CC table
    .then(() => {
      db.queryAsync(`
        CREATE TABLE IF NOT EXISTS CC (
          id INTEGER NOT NULL AUTO_INCREMENT PRIMARY KEY,
          cc_option VARCHAR(27)
      );`);
    })
    .then(() => {
      db.queryAsync(`
        CREATE TABLE IF NOT EXISTS Course_CC (
          course_id INTEGER(3),
          cc_id INTEGER(1)     
      );`);
    })
    .then(() => {
      db.queryAsync(`
        ALTER TABLE Course_CC ADD FOREIGN KEY (course_id) REFERENCES Course (id);
      `);
    })
    .then(() => {
      db.queryAsync(`
        ALTER TABLE Course_CC ADD FOREIGN KEY (cc_id) REFERENCES CC (id);
      `);
    })
);

const populateCourseData = () => {
  const { courseSeeds } = seeds;
  const queryStr = 'INSERT INTO Course SET ?';
  const promises = courseSeeds.map(seed => db.queryAsync(queryStr, seed));
  return Promise.all(promises);
};

const populateCCData = () => {
  const { ccSeeds } = seeds;
  const queryStr = 'INSERT INTO CC SET ?';
  const promises = ccSeeds.map(seed => db.queryAsync(queryStr, seed));
  return Promise.all(promises);
};

const populateCourseCCData = () => {
  const { courseCCSeeds } = seeds;
  const queryStr = 'INSERT INTO Course_CC SET ?';
  const promises = courseCCSeeds.map(seed => db.queryAsync(queryStr, seed));
  return Promise.all(promises);
};

db.queryAsync('DROP DATABASE IF EXISTS headerSidebar')
  .then(() => db.queryAsync('CREATE DATABASE IF NOT EXISTS headerSidebar'))
  .then(() => console.log(`Connected to CheckoutData database as ID ${db.threadId}`))
  .then(() => db.queryAsync('USE headerSidebar'))
  .then(() => createTables(db))
  .then(() => populateCourseData())
  .then(() => populateCCData())
  .then(() => populateCourseCCData())
  .then(() => db.end())
  .then(() => process.exit())
  .catch((err) => {
    throw new Error(err);
  });

module.exports = db;
