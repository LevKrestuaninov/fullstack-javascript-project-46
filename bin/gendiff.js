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
  .action((filepath1, filepath2) => {
    const options = program.opts();
    console.log(genDiff(filepath1, filepath2, options.format));
  });

program.parse();

export default genDiff;
