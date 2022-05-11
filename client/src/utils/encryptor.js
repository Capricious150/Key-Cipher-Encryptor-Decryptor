let key = "";
const alphabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
let keyAlphabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];

const encryptor = () => {
    
    return {
        setKey: function(keystr){
            if (!keystr){
                keyAlphabet = [...alphabet];
                return console.log("keyAlphabet reset");
            };

            if (typeof keystr !== "string"){
                return console.log("Key is not a string");
            };

            let lower = keystr.toLowerCase();
            
            for (let i = 0; i < lower.length; i++) {
                if (alphabet.indexOf(lower[i]) === -1){
                    return console.log(`Key contains non alphabetical character ${lower[i]}`);
                };                
            };
            
            key = lower;
            keyAlphabet = [...alphabet];
            
            const keySet = new Set(lower)
            
            for (let i = [...keySet].length - 1; i > -1; i--) {
                let alphaIndex = keyAlphabet.indexOf([...keySet][i]);
                keyAlphabet.splice(alphaIndex, 1)
                keyAlphabet.unshift([...keySet][i])
            }
            return "Passkey updated"
        }, 

        printKey: function(){
            return key;
        },

        printKeyAlpha: function(){
            return keyAlphabet;
        },

        encrypt: function(str){
            if (typeof str !== "string"){
                return console.log("Phrase is not a string")
            }

            let lower = str.toLowerCase()
            lowerArray = lower.split('')
                for (let i = 0; i < lowerArray.length; i++) {
                    if (alphabet.indexOf(lowerArray[i]) !== -1){
                        let alphaIndex = alphabet.indexOf(lower[i])
                        lowerArray[i] = keyAlphabet[alphaIndex]
                    }
                }
                lower = lowerArray.join('')
                return lower
        },

        decrypt: function(str){
            if (typeof str !== "string"){
                return console.log("Phrase is not a string")
            }

            let lower = str.toLowerCase()
            lowerArray = lower.split('')
                for (let i = 0; i < lowerArray.length; i++) {
                    if (keyAlphabet.indexOf(lowerArray[i]) !== -1){
                        let alphaIndex = keyAlphabet.indexOf(lower[i])
                        lowerArray[i] = alphabet[alphaIndex]
                    }
                }
                lower = lowerArray.join('')
                return lower
        }
    }
}

// console.log(encryptor().setKey("samwise"));
// console.log(encryptor().encrypt("This is an example of a longer string, with some special characters. It has proper capitilization"))
// console.log(encryptor().decrypt('rcdq dq sk ixsjnhi le s hlkbip qrpdkb, vdrc qlji qnimdsh mcspsmripq. dr csq nplnip msndrdhdzsrdlk'))

module.exports = encryptor