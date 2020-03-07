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
    '     ': ' '
};
function decode(expr) {
    let arr1 = [];
    let arr2 = [];

    for(let i = 0 ; i < expr.length; i += 10){
        arr1.push(expr.slice(i, i + 10));
    }
    if(arr1[arr1.length-1].length < 10){
        let lastEl = 10 - arr1[arr1.length-1].length;
         while(lastEl !== 0) {
            arr1[arr1.length-1] += '0';
            lastEl--;
         }
    }

    let regExp = /.{2}/g; 
    for(let j = 0 ; j < arr1.length; j++){
        arr2.push(arr1[j].match(regExp));
    }

    for(let i = 0; i < arr2.length; i++){    
        for(let k = 0; k < 5; k++){
            if(arr2[i][k] === '**') arr2[i][k]=' ';
            if(arr2[i][k] === '00') arr2[i][k]='';
            if(arr2[i][k] === '10') arr2[i][k]='.';
            if(arr2[i][k] === '11') arr2[i][k]='-';
        }
    }
    for(let i = 0; i < arr2.length; i++){
        arr2[i] = arr2[i].join('');
    }
    //console.log('arr2 after join: ', arr2)

    for(let i = 0; i < arr2.length; i++){
        arr2[i] = MORSE_TABLE[arr2[i]];
    }
    return arr2.join('');
}
module.exports = {
    decode
}