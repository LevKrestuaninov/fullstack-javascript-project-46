// import _ from 'lodash';
import getFile from './getFile.js';
import genDiff from './genDiff.js';
import writeOut from './style.js';

export default (filepath1, filepath2) => {
  const file1 = getFile(filepath1);
  const file2 = getFile(filepath2);
  const a = genDiff(file1, file2);
  return writeOut(a);
};
