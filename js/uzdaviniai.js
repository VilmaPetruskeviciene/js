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

