const mysql = require('mysql');
const Promise = require('bluebird');

const connection = mysql.createConnection({
  user: 'root',
});

const db = Promise.promisifyAll(connection, { multiArgs: true });

const createTables = () => {
  // creates course table
  return db.queryAsync(`
    CREATE TABLE IF NOT EXISTS Course (
      id INTEGER NULL AUTO_INCREMENT DEFAULT NULL,
      title VARCHAR(50) NULL DEFAULT NULL,
      description VARCHAR(150) NULL DEFAULT NULL,
      tag VARCHAR(13) NULL DEFAULT NULL,
      avg_rating DECIMAL(2, 1) NULL DEFAULT NULL,
      total_ratings INTEGER(5) NULL DEFAULT NULL,
      enrollment INTEGER(5) NULL DEFAULT NULL,
      created_by VARCHAR(25) NULL DEFAULT NULL,
      last_updated TIMESTAMP NULL DEFAULT NULL,
      language VARCHAR(15) NULL DEFAULT NULL,
      img_url VARCHAR(50) NULL DEFAULT NULL,
      list_price VARCHAR(7) NULL DEFAULT NULL,
      discount_price VARCHAR(7) NULL DEFAULT NULL,
      video_hrs DECIMAL(3, 1) NULL DEFAULT NULL,
      total_articles INTEGER(3) NULL DEFAULT NULL,
      total_downloads INTEGER(3) NULL DEFAULT NULL,
      active_coupon VARCHAR(10) NULL DEFAULT NULL,
      PRIMARY KEY (id)
    );`)
    // creates CC table
    .then(() => {
      db.queryAsync(`
      CREATE TABLE IF NOT EXISTS CC (
        id INTEGER NULL AUTO_INCREMENT DEFAULT NULL,
        option VARCHAR(15) NULL DEFAULT NULL,
        PRIMARY KEY (id)
      );`);
    })
    .then(() => {
      db.queryAsync(`
      CREATE TABLE Course_CC (
        course_id INTEGER NULL DEFAULT NULL,
        cc_id INTEGER NULL DEFAULT NULL
        FOREIGN KEY (course_id) 
          REFERENCES Course (id)
          ON DELETE CASCADE ON UPDATE CASCADE,
        FOREIGN KEY (cc_id) 
          REFERENCES CC (id)
          ON DELETE CASCADE ON UPDATE CASCADE
      );`);
    });
};

db.queryAsync('CREATE DATABASE IF NOT EXISTS headerSidebar')
  .then(() => console.log(`Connected to CheckoutData database as ID ${db.threadId}`))
  .then(() => db.queryAsync('USE headerSidebar'))
  .then(() => createTables(db));
