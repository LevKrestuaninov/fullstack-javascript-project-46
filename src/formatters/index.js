import plain from './plain.js';
import stylish from './stylish.js';
import json from './json.js';

const getFormat = (formatName) => {
  if (!formatName) {
    return stylish;
  }

  const { format } = formatName;

  switch (format) {
    case 'stylish':
      return stylish;
    case 'plain':
      return plain;
    case 'json':
      return json;
    default:
      console.log(`${format}Wrong formatter! Selected stylish bu default`);
      return stylish;
  }
};

export default getFormat;
