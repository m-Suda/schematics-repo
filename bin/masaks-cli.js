#! /usr/bin/env node
const cli = require('commander');
const child = require('child_process');

cli.usage('--name <project-name>').option('--name <value>', 'project name').parse(process.argv);

child.execSync(`npx schematics .:ts-new-clarc --name=${cli.name}`);
