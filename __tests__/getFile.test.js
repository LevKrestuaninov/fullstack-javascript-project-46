import getFile from '../src/getFile.js';

const filepath1 ='../__fixtures__/file1.json';
const filepath2 ='../__fixtures__/file2.json';

const expect1 =  {
    host: 'hexlet.io',
    timeout: 50,
    proxy: '123.234.53.22',
    follow: false
};

const expect2 =  { 
    timeout: 20, 
    verbose: true, 
    host: 'hexlet.io' 
};

test ('getFile1', () => {
    const f1 = getFile(filepath1);
    expect(f1).toEqual(expect1);
})

test ('getFile2', () => {
    const f2 = getFile(filepath2);
    expect(f2).toEqual(expect2);
})
