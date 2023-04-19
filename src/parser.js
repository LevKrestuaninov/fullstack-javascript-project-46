import { load } from 'js-yaml';

const getJSONData = (file) => JSON.parse(file);
const getYAMLData = (file) => load(file);

const getParser = (type) => {
  switch (type) {
    case '.json':
      return getJSONData;
    case '.yaml':
      return getYAMLData;
    case '.yml':
      return getYAMLData;
    default:
      return 'getParser err';
  }
};
export default getParser;
