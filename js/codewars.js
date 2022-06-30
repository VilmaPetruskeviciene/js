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

const blueStart = 5;
const redStart = 5;
const bluePulled = 2;
const redPulled = 3;
function guessBlue(blueStart, redStart, bluePulled, redPulled) {
  return (blueStart - bluePulled) / (redStart - redPulled + blueStart - bluePulled);
}
console.log(guessBlue(blueStart, redStart, bluePulled, redPulled));

/*function guessBlue(blueStart, redStart, bluePulled, redPulled) {
  var blueLeft = blueStart - bluePulled;
  var redLeft = redStart - redPulled;
  var allLeft = blueLeft + redLeft;
  
  return blueLeft/allLeft;
}*/

console.log('--------------------');

const time = 2.4;
function litres(time) {
  let drink1 = time / 2;
  let drink2 = Math.trunc(drink1);
  return drink2;
}
console.log(litres(time));

console.log('--------------------');

const year = 1756;
function century(year) {
  let cent = Math.floor(year / 100);
  if (year % 100 === 0) {
    return cent;
  } else {
    return cent + 1;
  }
}
console.log(century(year));

// const century = year => Math.ceil(year/100)

console.log('--------------------');

const a = 'f';
const b = 3;
sameCase = (a, b) => /[a-z]/i.test(a) && /[a-z]/i.test(b) ? Number(/[a-z]/.test(a) == /[a-z]/.test(b)) : -1; 
console.log(sameCase(a, b));

/* function sameCase(a, b){
  if (/[a-zA-Z]/.test(a) === false || /[a-zA-Z]/.test(b) === false) return -1;
  if (a === a.toUpperCase() && b !== b.toUpperCase()) return 0;
  if (a !== a.toUpperCase() && b === b.toUpperCase()) return 0;
  return 1;
} */

console.log('--------------------');

const number1 = 5;
function even_or_odd(number1) {
  if (number1 % 2 === 0) {
    return 'Even';
  } else {
    return 'Odd';
  }
}
console.log(even_or_odd(number1));

console.log('--------------------');

const num1 = 2.2;
function makeNegative(num1) {
  return (-Math.abs(num1))
}
console.log(makeNegative(num1));

console.log('--------------------');

const str = 'world';
function solution(str){
  let cv = '';
  let word = '';
  for (let i = str.length - 1; i >= 0; i--) {
    cv = str[i];
    word += cv;
  }
  return word;
}
console.log(solution(str));

console.log('--------------------');

const str2 = 'obuolys';
function removeChar(str2){
  let word1 = str2.substring(1);
  let word2 = word1.substring(0, word1.length - 1);
  return word2;
 }
console.log(removeChar(str2));

console.log('--------------------');

const bool = false;
function boolToWord( bool ){
  if (bool === true) {
    return 'Yes';
  } else {
    return 'No';
  }
}
console.log(boolToWord( bool ));

console.log('--------------------');

const num3 = 554;
function numberToString(num3) {
  let wr = num3.toString();
  return wr;
}
console.log(numberToString(num3));

console.log('--------------------');

const n1 = 3;
const s1 = 'Hello';
function repeatStr (n1, s1) {
  return s1.repeat(n1);
}
console.log(repeatStr (n1, s1));

console.log('--------------------');

const x = 'sfdg fgfh   dggh      fggj246 6768';
function noSpace(x){
  const words = x.split('').filter(e => e.trim().length).join('');
  return words;
}
console.log(noSpace(x));

console.log('--------------------');

const numbers = [1, 2, 2];
function squareSum(numbers){
  let el = 0;
  for (let i = 0; i < numbers.length; i++) {
    el += numbers[i] ** 2; 
  } 
  return el;
}
console.log(squareSum(numbers));

console.log('--------------------');

const args = [34, -15, 88, 2];
function findSmallestInt(args) {
  let min = Math.min(...args);
  return min; 
}
console.log(findSmallestInt(args));

class SmallestIntegerFinder {
  findSmallestInt(args) {
    let min = Math.min(...args);
    return min; 
  }
}
console.log(findSmallestInt(args));

console.log('--------------------');

const n3 = 14;
const x3 = 2;
const y3 = 6;
function isDivisible(n3, x3, y3) {
  if (n3 % x3 === 0 && n3 % y3 === 0) {
    return true;
  } else {
    return false;
  }
}
console.log(isDivisible(n3, x3, y3));

console.log('--------------------');

const value1 = 6;
const value2 = 2;
const operation = '+';
function basicOp(operation, value1, value2) {
  if (operation === '+') {
    return value1 + value2;
  } else if (operation === '-') {
    return value1 - value2;
  } else if (operation === '*') {
    return value1 * value2;
  } else if (operation === '/') {
    return value1 / value2;
  }
}
console.log(basicOp(operation, value1, value2));

console.log('--------------------');

const name = 'Sam Harris';
function abbrevName(name){
  const name1 = name.split(' ').map(w => w[0]).join('.').toUpperCase();
  return name1;
}
console.log(abbrevName(name));

console.log('--------------------');

const n4 = 348597;
function digitize(n4) {
  return [...String(n4)].map(Number).reverse()
}
console.log(digitize(n4));
/* .match(/\d+/g)  // give an array of all continuos strings of digits. ['1','2','3','4']

.map(Number)  // Calls Number on each value in the array (casting it to a number)
              // and returns the array of results. [1,2,3,4]
              //
              // Keep in mind Number(val) attempts to create a Number from 
              // what ever is passed to it. If it is a string itll
              // try to convert the string to a numerical value. */

console.log('--------------------');

const str3 = '1234';
const stringToNumber = function(str3){ 
  return Number(str3);
}
console.log(stringToNumber(str3));

console.log('--------------------');

const haystack = ["hay", "junk", "hay", "hay", "moreJunk", "needle", "randomJunk"];
function findNeedle(haystack) {
  for (let i = 0; i < haystack.length; i++) {
    const element = haystack[i];
    if (element === 'needle') {
      return `found the needle at position ${i}`;
    }
    
  }
}
console.log(findNeedle(haystack));

console.log('--------------------');

const x1 = [1, 2, 9];
function maps(x1){
  return x1.map(i => i*2);
}
console.log(maps(x1));
/*function maps(x){
  //return x.map(el => el * 2);
  let arr = [];
  for(let i = 0; i < x.length; i++){
  arr.push(x[i] * 2);
  }
  return arr;
  }*/

  console.log('--------------------');

const str4 = '1a2b3c4d5eHELLOworld';
String.prototype.toAlternatingCase = function () {
  let str = '';
    for(let i = 0; i< this.length; i++){
      if (this[i] == this[i].toLowerCase()){ 
        str += this[i].toUpperCase();
      } else {
        str += this[i].toLowerCase();
      }
    }
    return str;
  }

  console.log('--------------------');

const name3 = 'Peter';
function greet(name3){
    return 'Hello, ' + name3 + ' how are you doing today?';
}
console.log(greet(name3));

console.log('--------------------');

const greet1 = () => 'hello world!';
console.log(greet1());

console.log('--------------------');
const input = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15];
function countPositivesSumNegatives(input) {
  if (input === null || input.length < 1) {
      return [];
  }
  let array = [0, 0];

  for(var i = 0; i < input.length; i++) {
      if(input[i] <= 0) {
          array[1] += input[i];
    } else {
          array[0] += 1;
    }
  }
  return array;
}
console.log(countPositivesSumNegatives(input));

console.log('--------------------');

const array = [1, -2, 3, -4, 0];
function invert(array) {
  el1 = array.map(i => i * -1);
  return el1;
}
console.log(invert(array));

console.log('--------------------');

const b2 = false;
function booleanToString(b2){
  if (b2 === true) {
    return 'true';
  } else {
    return 'false';
  }
}
console.log(booleanToString(b2));

console.log('--------------------');

const str5 = 'HELLO';
String.prototype.isUpperCase = function(str5) {
  let chr = this.charAt(str5);
    return /[A-Z]|[\u0080-\u024F]/.test(chr) && chr === chr.toUpperCase();
}
console.log(String.prototype.isUpperCase(str5));

console.log('--------------------');

const array1 = [1, 2, 3, 4];
function find_average(array1) {
  let sum = 0;
  for (const i of array1) {
      sum += i;
  }
  if (sum == []) {
    return 0;
  } else {
    return sum / array1.length;
  }
}
console.log(find_average(array1));

console.log('--------------------');

const input3 = '3526094646346314522020049459831460229797719503514427021325895049023219811244751093901673163164276237398890044129912975171535073127347822122923162933564008998';

const splited = input3.match(/.{1,2}/g)
//console.log(splited);
function counter(bl) {
  const skaiciai = {};

      for(const Symbol of bl) {
          if(skaiciai[Symbol]) {
              skaiciai[Symbol]++;
          } else {
         skaiciai[Symbol] = 1;
          }
      }
      let arr = Object.values(skaiciai);
      let max = Math.max(...arr);
      let zaeb = Object.keys(skaiciai).find(key => skaiciai[key] === max)
    //console.log(max);
    return `Skaicius ${zaeb} pasikartoja ${max} kartus.`
  }
  console.log(counter(splited));

console.log('--------------------');
/*
function oldest(list) {
let age = -1;
let name = ''
for (const person of list) {
if (person.age > age) {
age = person.age;
name= person.name;
}
if (person.children && person.children.length > 0) {
const oldestChild = oldest(person.children);
if (oldestChild > age) {
age = oldestChild.age;
name = oldestChild.name;
}
}
}
console.log(`${name} is ${age} years`)
}
//console.log(oldest(family)); // Styvas is 105 years old.
*/

console.log('--------------------');

const str6 = "hello I AM DONALD";
String.prototype.isUpperCase = function() {
  return this == this.toUpperCase();
}
console.log(str6.isUpperCase());

console.log('--------------------');

const x5 = '45385593107843568';
function fakeBin(x5){
let x4 = '';
for (let i = 0; i < x5.length; i++) {
  if (x5[i] < '5') {
    x4 += '0';
  } else if (x5[i] >= '5') {
    x4 += '1';
  }
}
  return x4;
}
console.log(fakeBin(x5));

console.log('--------------------');

const n2 = 1050;
function noBoringZeros(n2) {
  while (n2 % 10 === 0 && n2 !== 0) {
    n2 = n2 / 10;
  }
  return n2;
}
console.log(noBoringZeros(n2));

console.log('--------------------');

const classPoints = [100, 40, 34, 57, 29, 72, 57, 88];
const yourPoints = 75;
function betterThanAverage(classPoints, yourPoints) {
  const yours = [yourPoints];
  const allPoints = [...classPoints, ...yours];
  const sortedList = allPoints.sort((a, b) => a - b);
  const size = allPoints.length;
    let med2 = sortedList[Math.floor(size / 2)];
    return yourPoints > med2;
}
console.log(betterThanAverage(classPoints, yourPoints));

console.log('--------------------');

const x2 = [9, 3, '7', '3'];
function sumMix(x2){
  let x3 = x2.map(i => +i);
  let sum = 0;
  for (let i = 0; i < x3.length; i++) {
    sum += x3[i]; 
  }
  return sum;
}
console.log(sumMix(x2));

console.log('--------------------');

const n5 = 5;
const reverseSeq = n5 => {
  let n6 = [];
  for (let i = n5; i > 0; i--) {
    n6.push(i);
  }
  return n6;
}
console.log(reverseSeq(n5));

console.log('--------------------');

const a3 = 2;
const b3 = 8;
function between(a3, b3) {
  let c3 = [];
  for (let i = a3; i <= b3; i++) {
    c3.push(i);
  }
  return c3;
}
console.log(between(a3, b3));

console.log('--------------------');

const amount = 26.95;
const rating = 'GOOd';
function calculateTip(amount, rating) {
  const rating1 = rating.toLowerCase();
  if (rating1 === 'terrible') {
    return 0;
  } else if (rating1 === 'poor') {
    return Math.ceil(amount * (5 / 100));
  } else if (rating1 === 'good') {
    return Math.ceil(amount * (10 / 100));
  } else if (rating1 === 'great') {
    return Math.ceil(amount * (15 / 100));
  } else if (rating1 === 'excellent') {
    return Math.ceil(amount * (20 / 100));
  } else {
    return 'Rating not recognised';
  }
}
console.log(calculateTip(amount, rating));

console.log('--------------------');

const exam = 100;
const projects = 12;
function finalGrade (exam, projects) {
  if (exam > 90 || projects > 10) {
    return 100;
  } else if (exam > 75 && projects >= 5) {
    return 90;
  } else if (exam > 50 && projects >= 2) {
    return 75;
  } else {
    return 0;
  }
}
console.log(finalGrade (exam, projects));

console.log('--------------------');

const arr1 = ['Hello', 'Goodbye', 'Hello Again'];
function removeEveryOther(arr1){
  let arr2 = [];
  for (let i = 0; i < arr1.length; i+=2) {
    arr2.push(arr1[i]);
  }
  return arr2;
}
console.log(removeEveryOther(arr1));

console.log('--------------------');

const n7 = 9;
function monkeyCount(n7) {
  let count = [];
  for (let i = 1; i <= n7; i++) {
    count.push(i); 
  }
  return count;
}
console.log(monkeyCount(n7));

console.log('--------------------');

const nbPetals = 7;
function howMuchILoveYou(nbPetals) {
  const ptArr = ['I love you', 'a little', 'a lot', 'passionately', 'madly', 'not at all'];
  for (let i = 0; i <= nbPetals-1; i++) {
    if (i === nbPetals - 1) {
      return ptArr[i % 6];
    } 
  }
}
console.log(howMuchILoveYou(nbPetals));

console.log('--------------------');

const s2 = 'Your girlscout cookies are ready to ship. Your total comes to tree fiddy';
function isLockNessMonster(s2) {
  return /tree fiddy|3.50|three fifty/.test(s2); 
}
console.log(isLockNessMonster(s2));

console.log('--------------------');

const arr3 = ['tail', 'body', 'head'];
function fixTheMeerkat(arr3) {
  let end = arr3.shift();  //istrina pirma elementa
  let begin = arr3.pop();  //istrina paskutini elementa
  arr3.push(end);          //ideda elementa gale
  arr3.unshift(begin);     //ideda nauja elementa pradzioje
  return arr3;
}
console.log(fixTheMeerkat(arr3));

console.log('--------------------');

const a4 = 123;
const a5 = a4.toString();
console.log(a5);

console.log('--------------------');

const str7 = 'hello world!';
function reverseWords(str7){
  return str7.split(' ').reverse().join(' ');
}
console.log(reverseWords(str7));

console.log('--------------------');

const text = 'abracadabra';
const orderedCount = function (text) {
  const splitText = text.split('');
  const text1 = [...new Set(splitText)];
  let result = [];
  for (let i = 0; i <= text1.length - 1; i++) {
    result.push([text1[i], splitText.filter((t) => t === text1[i]).length]);
  }
  return result;
}
console.log(orderedCount(text));

console.log('--------------------');

const s3 = 'supercalifragilisticexpialidocious';
const partLength = 3;
var splitInParts = function(s3, partLength){
  let parts = [];
  for (let i = 0; i < s3.length; i += partLength) {
    parts.push(s3.slice(i, i + partLength)); 
  }
  return parts.join(' ');
}
console.log(splitInParts(s3, partLength));

console.log('--------------------');

const n8 = 5;
const m8 = 5;
function paperwork(n8, m8) {
  if (n8 < 0 || m8 < 0) {
    return 0;
  } else {
    return n8 * m8;
  }
}
console.log(paperwork(n8, m8));

console.log('--------------------');

const flower1 = 2;
const flower2 = 7;
function lovefunc(flower1, flower2){
  if (flower1 % 2 === 0 && flower2 % 2 !== 0) {
    return true;
  } else if (flower2 % 2 === 0 && flower1 % 2 !== 0) {
    return true;
  } else {
    return false;
  }
}
console.log(lovefunc(flower1, flower2));

console.log('--------------------');

const name2 = 'Tomas';
function greet(name2){
  if (name2 === "Johnny") {
    return "Hello, my love!";
  } else {
  return "Hello, " + name2 + "!";
  }
}
console.log(greet(name2));

console.log('--------------------');

const weight = 80;
const height = 1.80;
function bmi(weight, height) {
  const total = weight / (height * height);
  if (total <= 18.5) {
    return 'Underweight';
  } else if (total <= 25.0) {
    return 'Normal';
  } else if (total <= 30.0) {
    return 'Overweight';
  } else if (total > 30) {
    return 'Obese';
  } 
}
console.log(bmi(weight, height));

console.log('--------------------');

const marks = [1,2,3,4,5,];
function getAverage(marks){
  let total = 0;
  for (let i = 0; i < marks.length; i++) {
    total += marks[i];    
  }
  let aver = total / marks.length;
  return Math.floor(aver);
}
console.log(getAverage(marks));

console.log('--------------------');

const name4 = 'Paul';
function areYouPlayingBanjo(name4) {
  if (name4.charAt(0) === 'R' || name4.charAt(0) === 'r') {
    return name4 + ' plays banjo';
  } else {
    return name4 + ' does not play banjo';
  }
}
console.log(areYouPlayingBanjo(name4));

console.log('--------------------');

const x6 = [4, 1, 1, 1, 4];
function grow(x6){
  let count = 1;
  for (let i = 0; i < x6.length; i++) {
    count *= x6[i]; 
  }
  return count;
}
console.log(grow(x6));

console.log('--------------------');

const str8 = 'hello';
function makeUpperCase(str8) {
  return str8.toUpperCase();
}
console.log(makeUpperCase(str8));

console.log('--------------------');

const number3 = 5;
function simpleMultiplication(number3) {
  if (number3 % 2 === 0) {
    return number3 * 8;
  } else {
    return number3 * 9;
  }
}
console.log(simpleMultiplication(number3));

console.log('--------------------');

const arr4 = [1, 2, 3];
const arr5 = [4, 5, 6];
function arrayPlusArray(arr4, arr5) {
  const arr6 = [...arr4, ...arr5];
  let total = 0;
  for (let i = 0; i < arr6.length; i++) {
    total += arr6[i];
  }
  return total;
}
console.log(arrayPlusArray(arr4, arr5));

console.log('--------------------');

const dna = 'GCAT';
function DNAtoRNA(dna) {
  return dna.split('').map(letter => letter === 'T' ? 'U' : letter).join('');
}
console.log(DNAtoRNA(dna));

console.log('--------------------');

const numbers1 = [1, 5.2, 4, 0, -1];
function sum(numbers1) {
  let total = 0;
  for (let i = 0; i < numbers1.length; i++) {
    total += numbers1[i]; 
  }
  return total;
}
console.log(sum(numbers1));

console.log('--------------------');

const list = [4,6,2,1,9,63,-134,566];
const min = function(list){
  return Math.min(...list);
}
console.log(min(list));

const max = function(list){
  return Math.max(...list);
}
console.log(max(list));

console.log('--------------------');

const array2 = [6, 2, 1, 8, 10];
function sumArray(array2) {
  if (array2 == null) {
    return 0;
  } else if (array2 < 2) {
    return 0;
  } else {
    const minMaxList = [...array2].sort((a, b) => a - b);
    let total = 0;
    for (let i = 1; i < minMaxList.length - 1; i++) {
      total += minMaxList[i]; 
    }
    return total;
  }
}
console.log(sumArray(array2));

console.log('--------------------');

const num2 = 3;
const countSheep = function (num2){
  let number = '';
  for (let i = 1; i <= num2; i++) {
    number += i + ' sheep...'; 
  }
  return number;
}
console.log(countSheep(num2));

console.log('--------------------');

