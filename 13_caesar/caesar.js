const caesar = function(phrase, shift) {
    while (shift < 0) {
        shift = shift + 26;
    }

    let cipher = '';
    let charcode;
    for (let i = 0; i < phrase.length; i++) {
        if (phrase[i] <= 'z' && phrase[i] >= 'a' ) {
            charcode = phrase[i].charCodeAt() + shift;
            while (charcode > 'z'.charCodeAt()) {
                charcode -= 26;
            } 
        } else if (phrase[i] <= 'Z' && phrase[i] >= 'A') {
            charcode = phrase[i].charCodeAt() + shift;
            while (charcode > 'Z'.charCodeAt()) {
                charcode -= 26;
            }
        } else {
            charcode = phrase[i].charCodeAt();
        }
        cipher += (String.fromCharCode(charcode)); 
    }
    return cipher;
};

// Do not edit below this line
module.exports = caesar;
