'use strict';

const generateSVG = require('../src/generateSVG');

describe('generateSVG', () => {
  it('generates default SVG markup', () => {
    const defaultMarkup = generateSVG();

    expect(defaultMarkup).toMatchSnapshot();
  });

  it('handles custom parameters', () => {
    const customizedMarkup = generateSVG({
      size: '500',
      name: 'excellence',
      receiver: 'test'
    });

    expect(customizedMarkup.includes('width="500"')).toBeTruthy();
    expect(customizedMarkup.includes('height="667"')).toBeTruthy();
    expect(customizedMarkup).toMatchSnapshot();
  });
});
