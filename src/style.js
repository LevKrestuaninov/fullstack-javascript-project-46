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
    return 'getDiffChange err';
  };

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
    return acc;
  }, '');
  return `{${res}\n}`;
};

export default writeOut;
