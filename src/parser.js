import { load } from 'js-yaml';

const getJSONData = (file) => JSON.parse(file);
const getYAMLData = (file) => load(file);

const getParser = (type) => {
  switch (type) {
    case '.json':
      return getJSONData;
    case '.yaml':
      return getYAMLData;
    default:
      console.log('def');
      break;
  }
  return 'parser err';
};

export default getParser;
