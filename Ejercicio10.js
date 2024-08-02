const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Ingrese una frase: ', (frase) => {
    const capitalizarPrimeraLetra = (texto) => {
        return texto
            .split(' ') 
            .map(palabra => 
                palabra.charAt(0).toUpperCase() + palabra.slice(1).toLowerCase() 
            )
            .join(' '); 
    };

    const fraseCapitalizada = capitalizarPrimeraLetra(frase);

    console.log(`Frase con las primeras letras capitalizadas: ${fraseCapitalizada}`);

    rl.close();
});
