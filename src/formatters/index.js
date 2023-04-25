import plain from './plain.js';
import stylish from './stylish.js';

const getFormat = (formatName) => {
  if (!formatName) {
    return stylish;
  }

  const { format } = formatName;

  switch (format) {
    case ('stylish'):
      return stylish;
    case ('plain'):
      return plain;
    default:
      console.log(`${format}Wrong formatter! Selected stylish bu default`);
      return stylish;
  }
};

export default getFormat;
