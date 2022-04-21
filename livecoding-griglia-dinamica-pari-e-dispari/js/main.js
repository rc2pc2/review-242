/**
 *  Arrow function, non necessaria e  implementabile anche come standard function, che crea e restituisce un div con classe "square" sotto forma di elemento del DOM con un numero a suo interno.
 * @returns Un nuovo DOM Element div.square con un numero all'interno
 */
const createGridSquareWithNumber = (number) => {
    const currentElement = document.createElement('div');
    // inseriamo tutto il necessario per ogni square
    currentElement.classList.add('square');

    if( number % 2 === 0){   //se il numero è pari
        currentElement.classList.add('square-even');
    } else {    // se invece è dispari
        currentElement.classList.add('square-odd');
    }

    //  aggiungo lo span con il numero all'interno del div appena creato
    currentElement.innerHTML = `
    <span class="square-number">${number}</span>`

    return currentElement;
}


// prendo l'elemento principale
const gridElement = document.getElementById('grid');

// creo la lista dei numeri per vedere quali numeri ho già inserito, ovvero la nostra "blacklist"
const numBlacklist = [];

// ciclo for per 64 volte (visto che voglio 64 numeri)
for (let i = 0 ; i < 64 ; i++){

    // mi genero un nuovo numero randomico assente nella blacklist
    let newValidInteger = generateUniqueRandomNumber( numBlacklist, 1, 64);

    // lo inserisco in blacklist
    numBlacklist.push(newValidInteger);

    // creo un singolo quadrato
    const currentSquare = createGridSquareWithNumber(newValidInteger);

    // aggiungo l'evento di click e i suoi effetti
    currentSquare.addEventListener('click', function() {
        // | dove this sta per currentSquare;
        this.classList.toggle('clicked');
    })

    // infine lo aggiungo al parent
    gridElement.appendChild(currentSquare);
}


/**
 *  ******************************* FUNCTIONS *************************************
 */

/**
 * Function that returns a random numer between two values (both included).
 *
 * @param {*} minimumValue The minimum value of the random number to be generated
 * @param {*} maximumValue The maximum value of the random number to be generated
 * @returns The randon generated number.
 */
function randomInteger(minimumValue, maximumValue){
    if ( isNaN(parseInt(minimumValue)) || isNaN(parseInt(maximumValue)) ){
        console.error('randomInteger(min, max) needs two numbers as argument');
    }

    return ( Math.floor(Math.random() * ((maximumValue + 1) - minimumValue) + minimumValue));
}

/**
 * Function that generates a random number between two included values, which is not already present in the given blacklist.
 *
 * @param {*} numsBlacklist The blacklist to check.
 * @param {*} min The minimum value of the random generated integer.
 * @param {*} max The maximum value of the random generated integer.
 * @returns A random generated integer which is not present in the blacklist.
 */
function generateUniqueRandomNumber( numsBlacklist, min, max){
    // mi creo una variabile inizializzata a false, che mi controlla se ho generato un numero
    // valido oppure no
    let isNumValid = false;
    let randomInt;

    // creo un ciclo che continua finché non ho trovato un numero valido (assente in blacklist)
    while ( !isNumValid ){
        //  genero randomicamente un numero intero tra il min e il max passati come argomenti
        randomInt  = randomInteger(min, max);
        // se il numero non è presente nella blacklist allora
        if ( !numsBlacklist.includes(randomInt)  ){
            // informo il resto della funzione che il numero è stato trovato ed è valido
            // pertanto esco dal ciclo while
            isNumValid = true;
        }
    }

    // restituisco il numero valido che ho trovato
    return randomInt;
}
