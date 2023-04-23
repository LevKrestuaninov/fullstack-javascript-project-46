#!/usr/bin/env node
import { Command } from 'commander';
import genDiff from '../src/idex.js';

const program = new Command();

program
  .name('gendiff ')
  .description(' Compares two configuration files and shows a difference.')
  .version('0.8.0')
  .option('-f, --format <type>', 'output format')
  .argument('<filepath1>', 'path to file 1')
  .argument('<filepath2>', 'path to file 1')
  .action((filepath1, filepath2) => {
    console.log(genDiff(filepath1, filepath2,  program.opts()));
  });

  /*
  .option('-f, --format <string>', 'output format', 'stylish')
  .parse(process.argv);
  const options = program.opts();
  const [arg1, arg2] = program.args;
  console.log(getDifference(arg1, arg2, options.format));
  */
program.parse();
