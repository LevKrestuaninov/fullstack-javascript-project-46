import { readFileSync } from 'node:fs';
import path from 'node:path';

const getData = (filePath) => readFileSync(path.resolve(process.cwd(), filePath));
export default getData;
