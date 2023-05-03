import plain from './plain.js';
import stylish from './stylish.js';
import json from './json.js';

const getFormat = (formatName) => {
  if (!formatName) {
    return stylish;
  }

  switch (formatName) {
    case ('stylish'):
      return stylish;
    case ('plain'):
      return plain;
    case ('json'):
      return json;
    default:
      throw new Error(`Unsupported formatName - ${formatName} `);
  }
};

export default getFormat;
