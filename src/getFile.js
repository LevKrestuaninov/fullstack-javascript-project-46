import { extname } from 'node:path';
import getParser from './parser.js';
import getData from './getData.js';

const getFile = (filePath) => {
  const absolutePath = getData(filePath);
  const parser = getParser(extname(filePath));
  return parser(absolutePath);
};
export default getFile;
