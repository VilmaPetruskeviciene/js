/* Kintamųjų inicijavimas */

/* 1. Sukurti 3 kintamuosius su skaičiaus tipo reikšmėmis
Po kiekvieno jų inicijavimo, išvesti į console */

const a = 5;
console.log(a);
const b = 8;
console.log(b);
const c = 3;
console.log(c);

/* 2. Sukurti 3 kintamuosius su teksto tipo reikšmėmis
Po kiekvieno jų inicijavimo, išvesti į console */

const username = 'Jonas';
console.log(username);
const miestas = 'Vilnius';
console.log(miestas);
const augintinis = 'kate';
console.log(augintinis);

/* 3. Sukurti 3 sąrašo tipo kintamuosius su penkiomis skaičių tipo reikšmėmis
Po kiekvieno jų inicijavimo, išvesti į console */

const n1 = [1, 2, 3, 4, 5];
console.log(n1);
const n2 = [12, 21, 33, 41, 54];
console.log(n2);
const n3 = [11, 32, 63, 14, 25];
console.log(n3);

/* 4. Sukurti 3 sąrašo tipo kintamuosius su penkiomis teksto tipo reikšmėmis
Po kiekvieno jų inicijavimo, išvesti į console */

const gyvunas = ['kate', 'suo', 'pele', 'gyvate', 'papuga'];
console.log(gyvunas);
const medis = ['berzas', 'pusis', 'egle', 'liepa', 'sermuksnis'];
console.log(medis);
const vaisius = ['obuolys', 'kriause', 'bananas', 'apelsinas', 'ananasas'];
console.log(vaisius);

/* Veiksmai su kintamaisiais */

/* 1. Susumuoti visus skaičiaus tipo kintamuosius
Rezultatą išvesti į console */

const suma = a + b + c;
console.log(suma);

/* 2. Sujungti visus teksto tipo kintamuosius taip, jog tarp jų būtų sudarytas tarpas
Rezultatą išvesti į console */

const duomenys = `${username} ${miestas} ${augintinis}`;
console.log(duomenys);

/* 3. Apskaičiuoti vertę iš sąrašų kurių verčių tipas yra skaičiai, pagal pateiktą logiką
1-2+3-4+5  
Rezultatą išvesti į console */

const vert1 = n1[0] - n1[1] + n1[2] - n1[3] + n1[4];
console.log(vert1);
const vert2 = n2[0] - n2[1] + n2[2] - n2[3] + n2[4];
console.log(vert2);
const vert3 = n3[0] - n3[1] + n3[2] - n3[3] + n3[4];
console.log(vert3);

/* 4. Sujungti sąrašų vertes, kurių tipas yra tekstai, nuo sąrašo galo iki pradžios taip, jog tarp jų būtų kablelis ir tarpas */

const sar1 = `${gyvunas[4]}, ${gyvunas[3]}, ${gyvunas[2]}, ${gyvunas[1]}, ${gyvunas[0]}`;
console.log(sar1);
const sar2 = `${medis[4]}, ${medis[3]}, ${medis[2]}, ${medis[1]}, ${medis[0]}`;
console.log(sar2);
const sar3 = `${vaisius[4]}, ${vaisius[3]}, ${vaisius[2]}, ${vaisius[1]}, ${vaisius[0]}`;
console.log(sar3);

/* Kintamųjų palyginimas */
/* Lyginant, jei rezultatas tenkina palyginimo sąlygą, tai į console išvesti žodį “Pomidoras”, o jei sąlyga nėra tenkinama, išvesti sakinį “Bandykite kitą kartą.”. */

/* 1. Tarpusavyje palyginti skaičiaus tipo kintamuosius:
a-kuris didesnis
b-kuris mažesnis
c-ar jie lygūs
d-ar jie nelygūs
e-kuris didesnis arba lygus
f-kuris mažesnis arba lygus */

const n = 5;
const m = 8;

if (n > m) {
    console.log('Pomidoras');
} else {
    console.log('Bandykite kitą kartą.');
}

if (n < m) {
    console.log('Pomidoras');
} else {
    console.log('Bandykite kitą kartą.');
}

if (n === m) {
    console.log('Pomidoras');
} else {
    console.log('Bandykite kitą kartą.');
}

if (n !== m) {
    console.log('Pomidoras');
} else {
    console.log('Bandykite kitą kartą.');
}

if (n >= m) {
    console.log('Pomidoras');
} else {
    console.log('Bandykite kitą kartą.');
}

if (n <= m) {
    console.log('Pomidoras');
} else {
    console.log('Bandykite kitą kartą.');
}
