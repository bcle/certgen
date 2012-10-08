
var cg = require('certgen');
var hash = { C: 'FR', CN:'foo.bar.com', L:'San Jose' };

/*
var opts = { keep:true, prefix:'cgtest-', postfix:'.pem'}

cg.create_keypair(opts, function(err, keyPath) {
  if (err) throw (err);
  console.log('keypair: ' + keyPath);
  
  opts.postfix = '.cfg';
  cg.create_cert_request_config(opts, hash, function (err, cfgPath) {
    if (err) throw (err);
    console.log('request config: ' + cfgPath);
    opts.postfix = '.pem';
    opts.prefix = 'cgtest-csr-'     
    cg.create_cert_request(opts, keyPath, cfgPath, function (err, reqPath) {
      if (err) throw (err);
      console.log('request file: ' + reqPath);
      opts.prefix = 'cgtest-cert-';
      cg.create_cert(opts, reqPath, '/devel/tmp/leb-key.pem', '/devel/tmp/leb-cert.pem', function (err, certPath) {
        if (err) throw (err);
        console.log('cert path: ' + certPath);
      });
    });
  });  
});
*/

cg.generate_cert('mytest', true, hash,
                 '/devel/tmp/leb-key.pem',
                 '/devel/tmp/leb-cert.pem',
                 function (err, keyPath, certPath) {
  if (err) throw (err);
  console.log('key path: ' + keyPath);
  console.log('cert path: ' + certPath);
});

