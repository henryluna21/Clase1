const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Ingrese un texto: ', (texto) => {
    rl.question('Ingrese la palabra que desea reemplazar: ', (textoOriginal) => {
        rl.question('Ingrese la nueva palabra: ', (textoNuevo) => {
            const textoModificado = texto.replace(new RegExp(textoOriginal, 'gi'), textoNuevo);

            console.log(`Texto modificado: ${textoModificado}`);

            rl.close();
        });
    });
});
