import _ from 'lodash';

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

  const copyDiff = _.cloneDeep(diff);
  const entries = Object.entries(copyDiff);
  const res = entries.reduce((acc, [key, obj]) => {
    if (Object.hasOwn(obj, 'value2')) {
      const k1 = `  - ${key}`;
      acc += (`\n${k1} : ${obj.value}`);
      const k2 = `  + ${key}`;
      acc += (`\n${k2} : ${obj.value2}`);
    } else {
      const k = `${getDiffChange(obj)}${key}`;
      acc += (`\n${k} : ${obj.value}`);
    }
    // console.log(acc)
    return acc;
  }, '');
  return `{${res}\n}`;
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

export default writeOut;
