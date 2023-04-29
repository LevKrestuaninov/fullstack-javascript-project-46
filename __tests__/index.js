import path from 'path';
import fs from 'fs';
import { fileURLToPath } from 'url';
import genDiff from '../src/index.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const getFixturePath = (filepath) => path.join(__dirname, '..', '__fixtures__', filepath);

const readFixture = (filepath) => fs.readFileSync(getFixturePath(filepath), 'utf-8').trim();

const stylishResult = readFixture('stylish.expected.txt');
const plainResult = readFixture('plain.expected.txt');
const jsonResult = readFixture('json.expected.txt');

const extensions = ['json', 'yml'];

test.each(extensions)('genDiff %s', (format) => {
  const filepath1 = getFixturePath(`file1.${format}`);
  const filepath2 = getFixturePath(`file2.${format}`);
  expect(genDiff((filepath1), (filepath2))).toBe(stylishResult);
  expect(genDiff((filepath1), (filepath2), 'stylish')).toBe(stylishResult);
  expect(genDiff((filepath1), (filepath2), 'plain')).toBe(plainResult);
  expect(genDiff((filepath1), (filepath2), 'json')).toBe(jsonResult);
});
