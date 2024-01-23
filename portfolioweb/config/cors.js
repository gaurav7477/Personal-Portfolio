// config/cors.js
module.exports = {
  origin: process.env.NODE_ENV === 'development' ? ['http://localhost:3000'] : ['your-production-url'],
  credentials: true,
};
