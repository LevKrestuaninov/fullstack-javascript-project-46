import _ from 'lodash';
import getFile from './getFile.js';
import genDiff from './genDiff.js';

export default (filepath1, filepath2) => {
  const file1 = getFile(filepath1);
  const file2 = getFile(filepath2);

  const a = genDiff(file1, file2);
  // console.log(a);

  const writeOut = (diff) => {
    const getDiffChange = (obj) => {
      const stat = obj.diff_status;
      const diffSymbol = {
        added: '  + ',
        deleted: '  - ',
        equal: '    ',
      };
      switch (stat) {
        case 'deleted':
          return diffSymbol.deleted;
        case 'added':
          return diffSymbol.added;
        case 'equal':
          return diffSymbol.equal;
        case 'changed':
          return diffSymbol.equal;
        default:
          break;
      }
      return '';
    };

    // const getCountVal = (strObj) => strObj.match('value')//.length

    console.log('{');
    const copyDiff = _.cloneDeep(diff);
    const entries = Object.entries(copyDiff);
    const res = entries.map(([key, obj]) => {
      if (Object.hasOwn(obj, 'value2')) {
        const k1 = `  - ${key}`;
        console.log(`${k1} : ${obj.value}`);
        const k2 = `  + ${key}`;
        console.log(`${k2} : ${obj.value2}`);
      } else {
        const k = `${getDiffChange(obj)}${key}`;
        console.log(`${k} : ${obj.value}`);
      }
      return '';
    });
    console.log('}');
    /*
        for (let [k, obj] of entries) {
            //console.log('k: ' + k )

            if (obj.diff_status === 'deleted') {
                k = `${diffSymbol.deleted}${k}`;
            }
            if (obj.diff_status === 'added') {
                k = `${diffSymbol.added}${k}`;
            }
            if (obj.diff_status === 'equal') {
                k = `${diffSymbol.equal}${k}`;
            }
            if (obj.diff_status === 'changed') {
                k = `${diffSymbol.equal}${k}`;
            }
            res[k] = obj;

            console.log(k + ' : ' + obj.value);
        } */
    // console.log(res)
    // console.log(`${Object.entries(res).join()}`)
  };
  writeOut(a);
};
