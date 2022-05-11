const encryptor = require('../utils/encryptor')

console.log(encryptor().printKey());
console.log(encryptor().setKey("samwise"));
console.log(encryptor().printKey());
console.log(encryptor().printKeyAlpha());