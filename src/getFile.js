import { extname } from 'node:path';
import getExtension from './parser.js';
import getData from './getData.js';

const getFile = (filePath) => {
  const absolutePath = getData(filePath);
  const parser = getExtension(extname(filePath));
  return parser(absolutePath);
};
export default getFile;
