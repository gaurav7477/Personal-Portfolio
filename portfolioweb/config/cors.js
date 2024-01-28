// config/cors.js
export const origin = process.env.NODE_ENV === 'development' ? ['http://localhost:3000'] : ['your-production-url'];
export const credentials = true;
