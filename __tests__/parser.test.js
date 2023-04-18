import getParser from '../src/parser.js'
import getData from '../src/getData.js';
import { extname } from 'node:path';

const filepath1 ='../__fixtures__/file1.json';
const filepath2 ='../__fixtures__/file2.json';

test ('parser1', () => {
    const data1 = getData(filepath1);
    const parser1 = getParser(extname(filepath1));
    expect(parser1(data1)).toEqual(JSON.parse(data1));
})

test ('parser2', () => {
    const data2 = getData(filepath2);
    const parser2 = getParser(extname(filepath2));
    expect(parser2(data2)).toEqual(JSON.parse(data2));
})