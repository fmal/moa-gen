'use strict';

const doctype = '<?xml version="1.0" encoding="UTF-8"?>';

const RATIO = 4 / 3;
const MAX_SIZE = 1024;
const DIGITS_REG = /^\d+$/;

const getHeight = (width, ratio = RATIO) => Math.round(width / ratio);

const parseSize = size => {
  if (size && size.match(DIGITS_REG) && size <= MAX_SIZE) {
    return parseInt(size, 10);
  }

  return 600;
};

module.exports = function generateSVG({
  size,
  name = 'Approval',
  receiver = 'Unknown'
} = {}) {
  size = parseSize(size);
  const width = size;
  const height = getHeight(size);

  return `${doctype}
<svg width="${width}" height="${height}" viewBox="0 0 960 720" xmlns="http://www.w3.org/2000/svg">
  <pattern id="texture" height="4" patternUnits="userSpaceOnUse" width="4">
    <path d="M1 3h1v1H1zm2-2h1v1H3z" fill="#9c92ac" opacity=".5"/>
  </pattern>
  <g fill="none" stroke="#9c92ac" stroke-width="6" transform="translate(10 10)">
    <circle cx="10" cy="10" r="10"/>
    <circle cx="930" cy="10" r="10"/>
    <circle cx="10" cy="690" r="10"/>
    <circle cx="930" cy="690" r="10"/>
  </g>
  <path d="M50 0h840a50 50 0 0 0 50 50v600a50 50 0 0 0-50 50H50a50 50 0 0 0-50-50V50A50 50 0 0 0 50 0z" fill="url(#texture)" stroke="#9c92ac" stroke-width="8" transform="translate(10 10)"/>
  <text fill="#3d3847" font-family="monospace" font-size="52" text-anchor="middle" word-spacing="-10" x="50%" y="178">
    Certificate <tspan font-family="Georgia, serif" font-size="40" font-style="italic">of</tspan> ${name}
  </text>
  <text fill="#3d3847" font-family="monospace" text-anchor="middle" x="50%" y="266">
    <tspan font-size="32">AWARDED TO</tspan><tspan dy="84" font-size="48" font-weight="bold" x="50%">${receiver}</tspan>
  </text>
  <path d="M270 390h420" stroke="#9c92ac" stroke-dasharray="2 8" stroke-linecap="round" stroke-width="6"/>
  <path d="M480 616.1L450.7 630l-15.4-28-32.1-5.6 4.5-31.5L385 542l22.7-23-4.5-31.4 32.1-5.6 15.4-28 29.3 13.9 29.3-13.9 15.4 28 32.1 5.6-4.5 31.5L575 542l-22.7 23 4.5 31.4-32.1 5.6-15.4 28z" stroke="#9C92AC" stroke-width="8" fill="none" opacity=".9" stroke-linejoin="round"/>
  <path d="M462 576h-17.6c-2.4 0-4.4-2-4.4-4.5v-40c0-2.5 2-4.5 4.4-4.5H462v49zm58-17.8c0 9.8-8 17.8-17.7 17.8H467v-48.9c4.9 0 8.8-4 8.8-8.9v-17.8c0-2.4 2-4.4 4.5-4.4h4.4c4.8 0 8.8 4 8.8 8.9v17.8h17.7c4.8 0 8.8 4 8.8 8.9v26.6z" fill="#9c92ac"/>
</svg>`;
};
