const mongoose = require('mongoose');

const mongoUri = process.env.DB_URI;
mongoose.connect(mongoUri, { useNewUrlParser: true, useCreateIndex: true });
const db = mongoose.connection;

const redisClient = require('redis').createClient;

// const redis = redisClient(6379, 'localhost');

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
  console.log('Connected to mongo');
});

// module.exports.redis = redis;
