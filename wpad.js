const vm = require('vm');
const fs = require('fs');
const extend = require('util')._extend;
const utils = require('./utils.js');

const wpad = fs.readFileSync('wpad.dat', 'utf8');
const wpad_pac = new vm.Script(wpad);
const sandbox = {};
extend(sandbox, utils);
wpad_pac.runInNewContext(sandbox);

module.exports.FindProxyForURL = sandbox.FindProxyForURL;
