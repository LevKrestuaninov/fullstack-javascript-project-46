import { Command } from 'commander';

const program = new Command();

program
  .name('gendiff ')
  .description(' Compares two configuration files and shows a difference.')
  .version('0.8.0')
  .argument('<filepath1>')
  .argument('<filepath2>')
  .option('-f, --format <type>', 'output format');
/*
  program
  .option('-d, --debug', 'output extra debugging')
  .option('-s, --small', 'small pizza size') */

program.parse(process.argv);
/*
const options = program.opts();
if (options.debug) console.log(options);
// https://github.com/tj/commander.js/#options
*/

export default program;
