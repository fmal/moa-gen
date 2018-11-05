'use strict';

const qs = require('query-string');
const { createError } = require('micro');

const generateSVG = require('./generateSVG');

module.exports = (req, res) => {
  const { url, query } = qs.parseUrl(req.url);
  const { size, name, receiver } = query;

  if (url !== '/') {
    throw createError(400, 'Bad Request');
  }

  res.setHeader('Content-Type', 'image/svg+xml');
  res.setHeader('Cache-Control', 'public,s-maxage=3600');

  return generateSVG({ size, name, receiver });
};
