let key = "";
const alphabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
let keyAlphabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];

const encryptor = () => {
    
    return {
        setKey: async function(keystr){
        try {
            if (!keystr){
                keyAlphabet = [...alphabet];
                return console.log("keyAlphabet reset");
            };

            if (typeof keystr !== "string"){
                return console.log("Key is not a string");
            };

            let lower = keystr.toLowerCase();
            console.log(lower);
            
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
            console.log(keyAlphabet)
            } catch {
                console.log("I guess something went wrong")
            } finally {
                return "complete"
            }
        }, 

        printKey: function(){
            return key;
        },

        printKeyAlpha: function(){
            return keyAlphabet;
        },

        ecrypt: function(str){

        },

        decrypt: function(str){

        }
    }
}

console.log(encryptor().printKey());
console.log(encryptor().setKey("samwise"));
console.log(encryptor().printKey());
console.log(encryptor().printKeyAlpha());

module.exports = encryptor