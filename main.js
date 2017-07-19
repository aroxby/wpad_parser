const wpad = require('./wpad');

if(process.argv.length <= 2) {
    console.log('Usage: node main.js HOST');
} else {
    const proxy = wpad.FindProxyForURL(undefined, process.argv[2]);
    console.log(proxy);
}
