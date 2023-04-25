// import _ from 'lodash';
import getFile from './getFile.js';
import genDiff from './genDiff.js';
import getFormat from './formatters/index.js';

export default (filepath1, filepath2, formatName) => {
  const file1 = getFile(filepath1);
  const file2 = getFile(filepath2);

  const format = getFormat(formatName);
  const result = format(genDiff(file1, file2));

  // const result = makePlain(genDiff(file1, file2))
  return result;
};
