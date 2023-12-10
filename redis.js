const Redis = require("ioredis");

const redis = new Redis({
  port: process.env.REDIS_PORT,
  host: process.env.REDIS_HOST,
  username: process.env.REDIS_USER,
  password: process.env.REDIS_PASSWORD,
});

redis.connect(() => console.log('Redis connected'))

module.exports = redis
