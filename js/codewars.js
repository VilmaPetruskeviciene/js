const arr = [5, 2, 's', -3, 2, 1];
function positiveSum(arr) {
    let sum2 = 0;
    for (let i = 0; i < arr.length; i++) {
        if (typeof arr[i] === 'number' && arr[i]>0) {
            sum2 += arr[i];
        } 
    } 
    return sum2; 
  }
console.log(positiveSum(arr));

console.log('--------------------');
const a1 = [4, 5, 6];
const b1 = [1, 2, 3];

function arrayMadness(a1, b1) {
    let suma1 = 0;
    for (let i = 0; i < a1.length; i++) {
        suma1 += a1[i] ** 2;
    };
    console.log(suma1);
    let sumb1 = 0;
    for (let i = 0; i < b1.length; i++) {
        sumb1 += b1[i] ** 3;
    };
    console.log(sumb1);
    if (suma1 > sumb1) {
        return true;
    } else {
        return false;
    }
  }
console.log(arrayMadness(a1, b1)); 

console.log('--------------------');

const string = 'Jędrzej Błądziński';

function correctPolishLetters (string) {
    const str = string.split('');
    const letters = {
    'ą':'a', 'ć':'c', 'ę': 'e', 'ł':'l', 'ń':'n', 'ó':'o', 'ś':'s', 'ź':'z', 'ż':'z'
  }
  
  return str.map((i) => letters[i] ? letters[i] : i).join('');
}

console.log(correctPolishLetters (string));

console.log('--------------------');

const str1 = 'Hello';
const letter = 'o';
function strCount(str1, letter){  
    const sp = str1.split('');
    return sp.filter((i) => letter === i).length;
  }
console.log(strCount(str1, letter));

console.log('--------------------');

