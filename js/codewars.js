const ms = require("ms");

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

const n = 4;
function testEven(n) {
    if (n % 2 === 0) {
        return true;
    } else {
        return false;
    }
}
console.log(testEven(n));

console.log('--------------------');

const bullets = 11;
const dragons = 5;
function hero(bullets, dragons){
    if (bullets / 2 >= dragons) {
        return true;
    } else {
        return false;
    }
    }
console.log(hero(bullets, dragons));

console.log('--------------------');

const i = 2;
function doubleInteger(i) {
  return i * 2;
}
console.log(doubleInteger(i));

console.log('--------------------');

const h = 0;
const m = 1;
const s = 1;

function past(h, m, s){
    const hours = h * 60 * 60 * 1000;
    const minutes = m * 60 * 1000;
    const seconds = s * 1000;
    return hours + minutes + seconds;
  }
console.log(past(h, m, s));

console.log('--------------------');

const num = 3;
const summation = function (num) {
    let suma = 0;
    for (let i = 0; i <= num; i++) {
        suma += i;
    }
    return suma;
  }
console.log(summation(num));

console.log('--------------------');
/*
const number = 1;
function opposite(number) {
    if (number < 0) {
        const number1 = number.toString().split('-');
        const number2 = number1.splice(1) * 1;
        return number2;
    } else  {
        return '-' + number;
    } 
  }
console.log(opposite(number));
*/
const number = -3;
function opposite(number) {
  return -number;
}   
console.log(opposite(number));

console.log('--------------------');

const l = 5;
const w = 3;
const areaOrPerimeter = function(l, w) {
    if (l === w) {
        return l * w;
    } else {
        return l * 2 + w * 2;
    }
  };
console.log(areaOrPerimeter(l, w));

console.log('--------------------');

const cap = 20;
const on = 14;
const wait = 8;
function enough(cap, on, wait) {
    if ((cap - on) > wait) {
        return 0;
    } else {
        return wait - (cap - on);
    }
  }
console.log(enough(cap, on, wait));

console.log('--------------------');

const info = ["PT92", 6];
function magNumber(info){
  const bulletCount = {
    PT92: 17,   
    M4A1: 30,
    M16A2: 30,
    PSG1: 5,
  }
  let bullet = info[1] * 3;
  let gun = info[0];
  return (Math.ceil(bullet / bulletCount[gun]));
}
console.log(magNumber(info));

console.log('--------------------');

const distanceToPump = 100;
const mpg = 50;
const fuelLeft = 1;
const zeroFuel = (distanceToPump, mpg, fuelLeft) => {
  if (distanceToPump <= mpg * fuelLeft) {
    return true;
  } else {
    return false;
  }
};
console.log(zeroFuel(distanceToPump, mpg, fuelLeft));

console.log('--------------------');

const ages = [82, 15, 6, 38, 35];
let ages2 = [];
function differenceInAges(ages){
  ages2 = [Math.min(...ages), Math.max(...ages), Math.max(...ages) - Math.min(...ages)];
  return ages2;
}
console.log(differenceInAges(ages));

console.log('--------------------');

const param = 'jabrOni';
function getDrinkByProfession(param) {
  let person = param.toLowerCase();
  let professions = {  
    'jabroni': function() {
      return 'Patron Tequila';
    },
    'school counselor': function() {
      return 'Anything with Alcohol';
    },
    'programmer': function() {
      return 'Hipster Craft Beer';
    },
    'bike gang member': function() {
      return 'Moonshine';
    },
    'politician': function() {
      return 'Your tax dollars';
    },
    'rapper': function() {
      return 'Cristal';
    }
  }  
  if (typeof professions[person] !== 'function') {
    return 'Beer';
  }
  
  return professions[person]();
}
console.log(getDrinkByProfession(param));

/* function getDrinkByProfession(param) {
  param = param.toLowerCase();
  
  switch(param) {
    case "jabroni": return "Patron Tequila";
    case "school counselor": return "Anything with Alcohol";
    case "programmer": return "Hipster Craft Beer";
    case "bike gang member": return "Moonshine";
    case "politician": return "Your tax dollars";
    case "rapper": return "Cristal";
    default: return "Beer";
  }
}*/

console.log('--------------------');

const one = 'aaa';
const two = 'bbb';
const three = 'ccc';
function tripleTrouble(one, two, three){
  let result = '';
  const letters1 = one.split('');
  const letters2 = two.split('');
  const letters3 = three.split('');
  for (let i = 0; i < one.length; i++) {
    result += one[i] + two[i] + three[i];
  }
  return result;  
 }
console.log(tripleTrouble(one, two, three));

console.log('--------------------');

const arrayOfSheep = [true,  true,  true,  false,
                      true,  true,  true,  true ,
                      true,  false, true,  false,
                      true,  false, false, true ,
                      true,  true,  true,  true ,
                      false, false, true,  true];

function countSheeps(arrayOfSheep) {
  const sheep = arrayOfSheep.filter(value => value === true).length; 
  return sheep;  
}
console.log(countSheeps(arrayOfSheep));

console.log('--------------------');

