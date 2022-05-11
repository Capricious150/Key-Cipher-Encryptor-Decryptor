const encryptor = require('../utils/encryptor')


console.log(encryptor().setKey("samwise"));
console.log(encryptor().encrypt("This is an example of a longer string, with some special characters. It has proper capitilization"))
