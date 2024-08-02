const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Ingrese una frase: ', (frase) => {
    const palabras = frase.split(' ').length;

    const numeroDePalabras = palabras === 1 && frase.trim() === '' ? 0 : palabras;

    console.log(`Número de palabras en la frase: ${numeroDePalabras}`);

    rl.close();
});
