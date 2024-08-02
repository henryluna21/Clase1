const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const obtenerNumero = (pregunta, callback) => {
    rl.question(pregunta, (respuesta) => {
        const numero = parseInt(respuesta, 10);
        if (isNaN(numero) || numero < 0) {
            console.log('Por favor, ingrese un número entero positivo.');
            obtenerNumero(pregunta, callback); 
        } else {
            callback(numero);
        }
    });
};

rl.question('Ingrese una cadena de texto: ', (cadena) => {
    obtenerNumero('Ingrese el índice inicial de la subcadena: ', (inicio) => {
        obtenerNumero('Ingrese la longitud de la subcadena: ', (longitud) => {
            if (inicio >= cadena.length) {
                console.log('El índice inicial está fuera del rango de la cadena.');
            } else {
                const subcadena = cadena.substring(inicio, inicio + longitud);

                console.log(`La subcadena extraída es: ${subcadena}`);
            }
            rl.close();
        });
    });
});

