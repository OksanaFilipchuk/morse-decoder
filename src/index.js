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
    let coderResult = [];
    for(let i = 0; i < (expr.length); i = i+10){
      let elem = [];
            for(let k = 0; k <10; k = k+2){
              
                if(expr.slice(i+k, i+k+2) == "11"){
                    elem.push("-")
                } else 
                  if(expr.slice(i+k, i+k+2) == "10"){
                    elem.push(".")
                } else 
                  if(expr.slice(i+k, i+k+2) == "**"){
                    elem.push("**")
                
              }         
              
            }
           if(elem.join('') == "**********"){
                coderResult.push(' ')
              } else{                coderResult.push(MORSE_TABLE[elem.join('')]);
              }     
    }
  return coderResult.join("")
}

module.exports = {
    decode
}