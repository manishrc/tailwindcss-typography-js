#!/usr/bin/env node
'use strict';
const meow = require('meow');
const tailwindcssTypographyJs = require('.');

const cli = meow(`
	Usage
	  $ tailwindcss-typography-js [input]

	Options
	  --foo  Lorem ipsum [Default: false]

	Examples
	  $ tailwindcss-typography-js
	  unicorns & rainbows
	  $ tailwindcss-typography-js ponies
	  ponies & rainbows
`);

console.log(tailwindcssTypographyJs(cli.input[0] || 'unicorns'));
