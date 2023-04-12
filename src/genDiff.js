/*import _ from 'lodash';

export default (dataParce1, dataParce2) => {
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