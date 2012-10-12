certgen
=======

A wrapper around the openssl utility for programatically generating signed certificates. All underlying I/O operations are asynchronous, so this is safe to use in a latency-sensitive server program.

The main function is `generate_cert_buf`. Given a signing key and cert, and an 'info' object containing the desired subject distinguished name information, the function creates a certificate, signs it, and opens buffers to the certificate. The buffers can then be supplied to https.createServer().

The 'info' object is required to contain a 'subject' property that is an object containing the distinguised name information. This object may contain properties with the following key names:
* 'C' (Country)
* 'ST' (State)
* 'L' (Locality)
* 'O' (Organization)
* 'OU' (Organization Unit)
* 'CN' (Common Name)

Additionally, the 'info' object can optionally contain a string property named 'subjectaltname' containing alternate names for the subject common name.

Function prototype:

```
/*
 * Generate a signed certificate from supplied information.
 * 
 * prefix: Temporary file prefix. 
 * keepFiles: Whether to keep generated files upon process exit.
 * info: Object containing a required 'subject' property containing subject's 
 *       distinguished name information, and an optional 'subjectaltname' string property
 *       listing the alternate subject names, if any. 
 * caKeyPath: the signer's key
 * caCertPath: the signer's certificate
 * cb: a callback of the form cb(err, keyBuf, certBuf)
 */
exports.generate_cert_buf = function (prefix, keepFiles, hash, caKeyPath, caCertPath, cb) {
}
```
