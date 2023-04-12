import _ from 'lodash';
import getFile from './getFile.js';

/*
const genDiff = (dataParce1, dataParce2) => {
    const keys1 = _.keys(dataParce1)
    const keys2 = _.keys(dataParce2)
    const keys = _.union(keys1, keys2);
    console.log(keys);
    const result = {}// keys.reduce((acc, ));
    keys.map((key) => {
        console.log(result);
        if (!_.has(dataParce1, key)) {
            result[key] = '-';
            console.log('1')
        } else if (!_.has(dataParce2, key)) {
            result[key] = '+';
        } else if (dataParce1[key] !== dataParce2[key]) {
            result[key] = '-';
        } else {
            result[key] = '';
        }
    })

    return result;
}
*/

export default (filepath1, filepath2) => { 
    const file1 = getFile(filepath1);
    const file2 = getFile(filepath2);
    console.log(file1)
    console.log(file2)

    const keys = _.union(Object.keys(file1), Object.keys(file2));
    const sorted = _.sortBy(keys);
    console.log(sorted);
    return;
}