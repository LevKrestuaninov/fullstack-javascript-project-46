#!/usr/bin/env node
import { Command } from 'commander';
import genDiff from '../index.js';

const program = new Command();

program
  .name('gendiff ')
  .description(' Compares two configuration files and shows a difference.')
  .version('0.8.0')
  
  .argument('<filepath1>', 'path to file 1')
  .argument('<filepath2>', 'path to file 1')
  .option('-f, --format <type>', 'output format', 'stylish')
  .parse(process.argv);

  const options = program.opts();
  const [arg1, arg2] = program.args;
  
  console.log(genDiff(arg1, arg2, options.format));
  
  export default genDiff;


  /*
  .action((filepath1, filepath2) => {
    const diff = genDiff(filepath1, filepath2, program.opts());
    console.log(diff);
  });


*/