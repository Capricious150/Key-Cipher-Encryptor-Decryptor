const encryptor = () => {
    let key = "";
    const alphabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
    let keyAlphabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];

    return {
        setKey: function(keystr){
            if (typeof keystr !== "string"){
                return console.log("Key is not a string")
            }
            keyAlphabet = [...alphabet]
            let lower = keystr.toLowerCase()
            console.log(lower)
            for (let i = 0; i < lower.length; i++) {
                if (alphabet.indexOf(lower[i]) === -1){
                    return console.log(`Key contains non alphabetical character ${lower[i]}`)
                }                
            }
            
            key = lower;
            
            const keySet = new Set(lower)
            
            for (let i = [...keySet].length; i > -1; i--) {
                console.log(i)
                console.log([...keySet][i])
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

console.log(encryptor().setKey("samwise"));