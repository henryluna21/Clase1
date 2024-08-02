const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
rl.question('Ingrese una palabra: ', (palabra) => {

    let palabraNormalizada = '';
    for (const char of palabra) {
        if (char !== ' ') {
            palabraNormalizada += char.toLowerCase();
        }
    }

    const palabraInvertida = palabraNormalizada.split('').reverse().join('');

    if (palabraNormalizada === palabraInvertida) {
        console.log('La palabra es un palíndromo.');
    } else {
        console.log('La palabra no es un palíndromo.');
    }

    rl.close();
});
