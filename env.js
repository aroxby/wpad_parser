const wpad = require('./wpad');

if(process.argv.length <= 2) {
    console.log('Usage: node env.js HOST');
} else {
    const proxy = wpad.FindProxyForURL(undefined, process.argv[2]);
    if(!proxy.startsWith('PROXY ')) {
        console.log('Unexpected proxy format: ' + proxy);
    } else {
      ['http_proxy', 'https_proxy'].forEach(function(env_var){
          console.log('export ' + env_var + '=' + proxy.substring(6));
          console.log('export ' + env_var.toUpperCase() + '=' + proxy.substring(6));
      });
    }
}
