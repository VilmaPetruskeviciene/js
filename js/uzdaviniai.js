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

/* 2. Išvesti teksto tipo kintamųjų ilgius */

const ilgis = 'katinelis';
console.log(ilgis.length);

/* 3.Tarpusavyje palyginti teksto tipo kintamųjų ilgius:
a-kuris didesnis
b-kuris mažesnis
c-ar jie lygūs
d-ar jie nelygūs
e-kuris didesnis arba lygus
f-kuris mažesnis arba lygus */

const vs = 'obuolys';
const md = 'pusis';

if (vs.length > md.length) {
    console.log('Ilgesnis');
} else {
    console.log('Neatspejai');
}

if (vs.length < md.length) {
    console.log('Ilgesnis');
} else {
    console.log('Neatspejai');
}

if (vs.length === md.length) {
    console.log('Ilgesnis');
} else {
    console.log('Neatspejai');
}

if (vs.length !== md.length) {
    console.log('Ilgesnis');
} else {
    console.log('Neatspejai');
}

if (vs.length >= md.length) {
    console.log('Ilgesnis');
} else {
    console.log('Neatspejai');
}

if (vs.length <= md.length) {
    console.log('Ilgesnis');
} else {
    console.log('Neatspejai');
}

/* 4. Išvesti sąrašo tipo kintamųjų ilgius */

const sv = ['obuolys', 'slyva', 'ananasas'];
console.log(sv[0].length, sv[1].length, sv[2].length);

/* 5. Tarpusavyje palyginti sąrašo tipo kintamųjų ilgius:
a-kuris didesnis
b-kuris mažesnis
c-ar jie lygūs
d-ar jie nelygūs
e-kuris didesnis arba lygus
f-kuris mažesnis arba lygus */

const vais = ['ananasas', 'mandarinas', 'obuolys'];

if (vais[0].length > vais[1].length && vais[0].length > vais[2].length) {
    console.log( `${vais[0]} didesnis` );
} else {
    if (vais[1].length > vais[2].length) {
        console.log( `${vais[1]} didesnis` );
    } else {
        console.log( `${vais[2]} didesnis` );
    }
};

if (vais[0].length < vais[1].length && vais[0].length < vais[2].length) {
    console.log( `${vais[0]} mazesnis` );
} else {
    if (vais[1].length < vais[2].length) {
        console.log( `${vais[1]} mazesnis` );
    } else {
        console.log( `${vais[2]} mazesnis` );
    }
};

if (vais[0].length === vais[1].length && vais[0].length === vais[2].length) {
    console.log( `Visi vaisiai lygus.` );
} else {
    if (vais[0].length === vais[1].length || vais[0].length === vais[2].length) {
        console.log( `${vais[0]} lygus kitam vaisiui` );
    }  else {
        if (vais[1].length === vais[2].length) {
            console.log( `${vais[1]} lygus ${vais[2]}` );
        } else {
            console.log( `Vaisiai nelygus.` );
        }
    }
};

if (vais[0].length !== vais[1].length && vais[0].length !== vais[2].length) {
    console.log( `Visi vaisiai nelygus.` );
} else {
    if (vais[0].length !== vais[1].length || vais[0].length !== vais[2].length) {
        console.log( `${vais[0]} nelygus kitam vaisiui` );
    }  else {
        if (vais[1].length !== vais[2].length) {
            console.log( `${vais[1]} nelygus ${vais[2]}` );
        } else {
            console.log( `Vaisiai lygus.` );
        }
    }
};

if (vais[0].length >= vais[1].length && vais[0].length >= vais[2].length) {
    console.log( `${vais[0]} didesnis arba lygus` );
} else {
    if (vais[1].length >= vais[2].length) {
        console.log( `${vais[1]} didesnis arba lygus ${vais[2]} ir ${vais[0]}` );
    } else {
        console.log( `${vais[2]} didesnis` );
    }
};

if (vais[0].length <= vais[1].length && vais[0].length <= vais[2].length) {
    console.log( `${vais[0]} mazesnis arba lygus` );
} else {
    if (vais[1].length <= vais[2].length) {
        console.log( `${vais[1]} mazesnis arba lygus ${vais[2]}` );
    } else {
        console.log( `${vais[2]} mazesnis` );
    }
};

console.log('---------------------');

/* Ciklo for panaudojimas */

/*1. Suskaičiuoti ką gausime susumavus skaičius intervale tarp (imtinai):
a- 0 … 0
b- 0 … 4
c- 0 … 100
d- 574 … 815
e- -50 … 50
f- -70 … 30 */

let cikl1 = null;
for (let i = 0; i <= 0; i++) {
    cikl1 += i;
}
console.log(cikl1);

let cikl2 = null;
for (let i = 0; i <= 4; i++) {
    cikl2 += i;
}
console.log(cikl2);

let cikl3 = null;
for (let i = 0; i <= 100; i++) {
    cikl3 += i;
}
console.log(cikl3);

let cikl4 = null;
for (let i = 574; i <= 815; i++) {
    cikl4 += i;
}
console.log(cikl4);

let cikl5 = null;
for (let i = -50; i <= 50; i++) {
    cikl5 += i;
}
console.log(cikl5);

let cikl6 = null;
for (let i = -70; i <= 30; i++) {
    cikl6 += i;
}
console.log(cikl6);

/* 2. panaudojant ciklą perrašyti tekstinio tipo kintamųjų reikšmes iš kito galo:
pvz.: “abcdef” -> “fedcba” */

const tekst = 'pavasaris';
let cv = '';
let word = '';

for (let i = tekst.length - 1; i >= 0; i--) {
    cv = tekst[i];
    word += cv;
};
console.log(word);

/* 3. Suskaičiuoti, kiek nurodytame intervale yra skaičių, kurie dalijasi be liekanos iš 3, 5 ir 7 atskirai:
a- 0 - 11
b- 8 - 31
c- -18 - 18
d- rezultatą pateikti tokiu formatu:
Skaičių intervale tarp 0 ir 11, besidalijančių be liekanos iš 3 yra 4 vienetai.
Skaičių intervale tarp 0 ir 11, besidalijančių be liekanos iš 5 yra 3 vienetai.
Skaičių intervale tarp 0 ir 11, besidalijančių be liekanos iš 7 yra 2 vienetai. */

console.log('----------------------------');
let sk11 = '';
let sk12 = '';
let sk13 = '';
let sum11 = '';
let sum12 = '';
let sum13 = '';
for (let i = 0; i <= 11; i++) {
    if (i % 3 === 0) {
        sk11 += [i];
        sum11 = sk11.toString();
    } else if (i % 5 === 0) {
        sk12 += [i];
        sum12 = sk12.toString();
    } else if (i % 7 === 0) {
        sk13 += [i];
        sum13 = sk13.toString();
    }
        
}
console.log('Skaičių intervale tarp 0 ir 11, besidalijančių be liekanos iš 3 yra ' + sum11.length + ' vienetai.');
console.log('Skaičių intervale tarp 0 ir 11, besidalijančių be liekanos iš 5 yra ' + sum12.length + ' vienetai.');
console.log('Skaičių intervale tarp 0 ir 11, besidalijančių be liekanos iš 7 yra ' + sum13.length + ' vienetai.');

console.log('----------------------------');

let sk21 = '';
let sk22 = '';
let sk23 = '';
let sum21 = '';
let sum22 = '';
let sum23 = '';
for (let i = 8; i <= 31; i++) {
    if (i % 3 === 0) {
        sk21 += [i];
        sum21 = sk21.toString();
    } else if (i % 5 === 0) {
        sk22 += [i];
        sum22 = sk22.toString();
    } else if (i % 7 === 0) {
        sk23 += [i];
        sum23 = sk23.toString();
    }
        
}
console.log('Skaičių intervale tarp 8 ir 31, besidalijančių be liekanos iš 3 yra ' + sum21.length + ' vienetai.');
console.log('Skaičių intervale tarp 8 ir 31, besidalijančių be liekanos iš 5 yra ' + sum22.length + ' vienetai.');
console.log('Skaičių intervale tarp 8 ir 31, besidalijančių be liekanos iš 7 yra ' + sum23.length + ' vienetai.');

console.log('----------------------------');

let sk31 = '';
let sk32 = '';
let sk33 = '';
let sum31 = '';
let sum32 = '';
let sum33 = '';
for (let i = -18; i <= 18; i++) {
    if (i % 3 === 0) {
        sk31 += [i];
        sum31 = sk31.toString();
    } else if (i % 5 === 0) {
        sk32 += [i];
        sum32 = sk32.toString();
    } else if (i % 7 === 0) {
        sk33 += [i];
        sum33 = sk33.toString();
    }
        
}
console.log('Skaičių intervale tarp -18 ir 18, besidalijančių be liekanos iš 3 yra ' + sum31.length + ' vienetai.');
console.log('Skaičių intervale tarp -18 ir 18, besidalijančių be liekanos iš 5 yra ' + sum32.length + ' vienetai.');
console.log('Skaičių intervale tarp -18 ir 18, besidalijančių be liekanos iš 7 yra ' + sum33.length + ' vienetai.');

console.log('----------------------------');

/* Funkcijos */

/* Parašyti funkcijas, kurios atitinka pateiktus reikalavimus, jei įvykdo reikiamus testus */

/* 1. Funkcija pavadinimu “tusciaFunkcija”:
a-nepriima jokių kintamųjų
b-neatlieka jokios vidinės logikos
c-gražina boolean tipo reikšmę “false”
d-TESTAS:
     console.log( tusciaFunkcija() );
      rezultatas: false  */

const k = 5;
const l = 3;

function tusciaFunkcija() {
    
}

function tusciaFunkcija(k, l) {
    
}

function tusciaFunkcija(k, l) {
    if (k < l) {
        return (true);
} else {
    return (false);

    }
}
console.log( tusciaFunkcija() );

/* 2. Funkcija pavadinimu “daugyba”:
a-priima du skaičiaus tipo kintamuosius
b-atskirame kintamajame įsimena sandaugos reikšmę
c-gražina saudaugos rezultatą
d-TESTAI:
    console.log( daugyba( skaicius1, skaicius2 ) );
    console.log( daugyba( skaicius3, skaicius2 ) );
    console.log( daugyba( skaicius1, skaicius3 ) );
    rezultatas: teisingos reikšmės; */

    function daugyba(skaicius1, skaicius2) {
        const dg = skaicius1 * skaicius2;
        return dg;
    };

    const skaicius1 = 11;
    const skaicius2 = 8;  
    const skaicius3 = 4;

    console.log( daugyba( skaicius1, skaicius2 ) );
    console.log( daugyba( skaicius3, skaicius2 ) );
    console.log( daugyba( skaicius1, skaicius3 ) );

/* 3. Funkcija pavadinimu “skaitmenuKiekisSkaiciuje”:
a-priima vieną kintamąjį
b-jei perduotas kintamasis nėra skaičiaus tipo, tai išveda pranešimą “Pateikta netinkamo tipo reikšmė.”
c-priešingu atveju, funkcija tęsia darbą
d-į atskirą kintamąjį įsimena skaičių sudarančių skaitmenų kiekį
e-gražina skaitmenų kiekį
f-TESTAI:
    console.log( skaitmenuKiekisSkaiciuje( 5 ) );
        rezultatas: 1
    console.log( skaitmenuKiekisSkaiciuje( 781 ) );
        rezultatas: 3
    console.log( skaitmenuKiekisSkaiciuje( 37060123456 ) );
        rezultatas: 11
    console.log( skaitmenuKiekisSkaiciuje( true ) );
        rezultatas: “Pateikta netinkamo tipo reikšmė.”
    console.log( skaitmenuKiekisSkaiciuje( “asd” ) );
        rezultatas: “Pateikta netinkamo tipo reikšmė.”
    console.log( skaitmenuKiekisSkaiciuje( NaN ) );
        rezultatas: “Pateikta netinkamo tipo reikšmė.” */


function skaitmenuKiekisSkaiciuje(g) {
        if (typeof g !== 'number') {
            return ('Pateikta netinkamo tipo reikšmė.');
        } else {
            const sk = Math.ceil(Math.log10(g + 1));
            return sk;
        }
};

const g = 545;

console.log( skaitmenuKiekisSkaiciuje( 5 ) );
console.log( skaitmenuKiekisSkaiciuje( 781 ) );
console.log( skaitmenuKiekisSkaiciuje( 37060123456 ) );
console.log( skaitmenuKiekisSkaiciuje( true ) );
console.log( skaitmenuKiekisSkaiciuje( "asd" ) );
console.log( skaitmenuKiekisSkaiciuje( NaN ) );

/* 4. Funkcija pavadinimu “didziausiasSkaiciusSarase”:
a-priima vieną kintamąjį
b-jei perduotas kintamasis nėra sąrašo tipo, tai išveda pranešimą “Pateikta netinkamo tipo reikšmė.”
c-jei sąrašas yra tuščias, tai išveda pranešimą “Pateiktas sąrašas negali būti tuščias.”
d-priešingu atveju, funkcija tęsia darbą
e-pereina per visą pateiktą sąrašą ir į atskirą kintamąjį įsimena skaičių, kuris tuo metu yra didžiausias
f-gražina didžiausią surastą skaičių
g-TESTAI:
console.log( didziausiasSkaiciusSarase( [ 1 ] ) );
rezultatas: 1
console.log( didziausiasSkaiciusSarase( [ 1, 2, 3 ] ) );
rezultatas: 3
console.log( didziausiasSkaiciusSarase( [ -5, 78, 14, 0, 18 ] ) );
rezultatas: 78
console.log( didziausiasSkaiciusSarase( [ 69, 69, 69, 69, 66 ] ) );
rezultatas: 69
console.log( didziausiasSkaiciusSarase( [ -1, -2, -3, -4, -5, -6, -7, -8 ] ) );
rezultatas: -1
console.log( didziausiasSkaiciusSarase( “pomidoras” ) );
rezultatas: “Pateikta netinkamo tipo reikšmė.”
console.log( didziausiasSkaiciusSarase( [] ) );
rezultatas: “Pateiktas sąrašas negali būti tuščias.” */

console.log('-------------------------------------------');

console.log('---------codewars-------------------------');

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

