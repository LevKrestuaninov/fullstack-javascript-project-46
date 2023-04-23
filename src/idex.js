// import _ from 'lodash';
import getFile from './getFile.js';
import genDiff from './genDiff.js';
import makeStylish from './formatters/stylish.js';

export default (filepath1, filepath2) => {
  const file1 = getFile(filepath1);
  const file2 = getFile(filepath2);
  const format = makeStylish(genDiff(file1, file2));
  return format;
};
