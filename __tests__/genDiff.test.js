import genDiff from "../src/genDiff";
import getFile from "../src/getFile";

const filepath1 ='../__fixtures__/file1.json';
const filepath2 ='../__fixtures__/file2.json';

const expect1 = {
    follow: { value: false, diff_status: 'deleted' },
    host: { value: 'hexlet.io', diff_status: 'equal' },
    proxy: { value: '123.234.53.22', diff_status: 'deleted' },
    timeout: { value: 50, value2: 20, diff_status: 'changed' },
    verbose: { value: true, diff_status: 'added' }
}

test ('genDiff1', () => {
    const f1 = getFile(filepath1);
    const f2 = getFile(filepath2);
    const diff = genDiff(f1,f2);
    expect(diff).toEqual(expect1);
})
