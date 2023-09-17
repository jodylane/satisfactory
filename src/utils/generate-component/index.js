#!/usr/bin/env node

const fs = require('fs-extra');
const path = require('path');
const pluralize = require('pluralize');
const replace = require('replace-in-file');
const yargs = require('yargs');

const copyDir = (type, name) => {
  const srcDir = path.join(__dirname, `.ComponentStarter`);
  const destDir = path.join(__dirname, `../../../src/components/${pluralize(type)}/${name}`);
  const replaceConfig = {
    files: [`${destDir}/*`],
    from: /Component/g,
    to: `${name}`,
  };

  fs.copySync(srcDir, destDir, { recursive: true });
  fs.rename(`${destDir}/Component.js`, `${destDir}/${name}.js`);
  fs.rename(`${destDir}/Component.styled.js`, `${destDir}/${name}.styled.js`);
  fs.rename(`${destDir}/Component.stories.js`, `${destDir}/${name}.stories.js`);
  fs.rename(`${destDir}/Component.test.js`, `${destDir}/${name}.test.js`);
  replace(replaceConfig);
};

const argv = yargs
  .command(['atom <name>', 'a'], 'Generate a new atom', {}, (argv) => copyDir('atom', argv.name))
  .command(['template <name>', 't'], 'Generate a new template', {}, (argv) =>
    copyDir('template', argv.name)
  )
  .command(['organism <name>', 'o'], 'Generate a new organism', {}, (argv) =>
    copyDir('organism', argv.name)
  )
  .command(['molecule <name>', 'm'], 'Generate a new molecule', {}, (argv) =>
    copyDir('molecule', argv.name)
  )
  .command(['screen <name>', 's'], 'Generate a new screen', {}, (argv) =>
    copyDir('screen', argv.name)
  )
  .demandCommand(2, 'You must specify type and name').argv;

const validCommands = [
  'a',
  'atom',
  't',
  'template',
  'o',
  'organism',
  'm',
  'molecule',
  's',
  'screen',
];

if (!validCommands.includes(argv._[0])) console.error('Command not valid');

console.log('Done.');
