const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    let words = expr.split("**********");
    console.log(words);
    let result = '';

    for(let word of words){
        let morseCode = ''; // coded sign from morse to binary
        let decoded = '';

        for(let i = word.length - 1; i >= 0; i -= 2){
            let sign = `${word[i - 1]}${word[i]}`; // for reading every sign separately

            if(sign ==='00' || ((i - 1) % 10) === 0) { // if only 00 left or reached the start of sign's binary code
                if(sign === '10') morseCode = '.' + morseCode;
                else if(sign === '11') morseCode = '-' + morseCode;
                
                decoded = decodeMorseToLatin(morseCode) + decoded;
                i = (Math.floor(i / 10) * 10 - 1) + 2; // end position of the next coded sign plus 2
                morseCode = '';
            }
            else if(sign === '10') morseCode = '.' + morseCode;
            else if(sign === '11') morseCode = '-' + morseCode;
        }
        result += ' ' + decoded;
    }
    return result.trim();
}

//Function decoding sign in Morse Code to Latin
function decodeMorseToLatin(sign){
    for(let key in MORSE_TABLE){
        if(key === sign){
            return MORSE_TABLE[key];
        }
    }
    return -1;
}

module.exports = {
  decode
}