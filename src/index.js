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
  let res2 = []; 
  let res3 = []; 
    let res4 = []; 
      let result = []; 
let arr = expr.split('');
let a = [];
let b = []
 while(arr.length > 0) {
 a.push(arr.splice(0, 10));
 }

 for (let i = 0; i < a.length; i++) {
   for (let j = 0; j < a[i].length;  j++) {
    a[i][j] += a[i][j + 1];
     b.push(a[i][j])
     res2 = b.filter((e,i)=>!(i%2));   
   }
}
 while(res2.length > 0) {
 res3.push(res2.splice(0, 5));
 }

     for(let q = 0; q < res3.length; q++)
     {
       res3[q].push(' ')
     }


 for (let k = 0; k < res3.length; k++) {
     for (let l = 0; l < res3[k].length; l++) { 
   if (res3[k][l] !== '00' && res3[k][l] === '10') {
     res4.push('.')
   }
   else if (res3[k][l] !== '00' &&  res3[k][l] === '11') {
      res4.push('-')
   }
   else if ( res3[k][l] !== '00' &&  res3[k][l] === '**') {
      res4.push(' ')
   }    

           else if ( res3[k][l] !== '00' &&  res3[k][l] === ' ') {
      res4.push(' ')
   }  
       
 }
 }
  result = res4.join('')

 
 return result.replace(/([.-]+[-.]*)/g, (x, y) =>MORSE_TABLE[y]).split('    ').map(a => a.split(' ').join('')).join(' ').trim();

}

module.exports = {
    decode
}