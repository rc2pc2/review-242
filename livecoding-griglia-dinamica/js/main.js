
/**
 *  Arrow function, non necessaria e  implementabile anche come standard function, che crea e restituisce un div con classe "square" sotto forma di elemento del DOM
 * @returns Un nuovo DOM Element div.square
 */
const createGridSquare = () => {
    const currentElement = document.createElement('div');
    // inseriamo tutto il necessario per ogni square
    currentElement.classList.add('square');
    return currentElement;
}

// prendo l'elemento principale
const gridElement = document.getElementById('grid');

// creo la lista dei numeri per vedere quali numeri ho già inserito, ovvero la nostra "blacklist"
const numBlacklist = [];

// ciclo for per 64 volte (visto che voglio 64 numeri)
for (let i = 0 ; i < 64 ; i++){
    // creo un singolo quadrato
    const currentSquare = createGridSquare();

    // aggiungo l'evento di click e i suoi effetti
    currentSquare.addEventListener('click', function() {
        // | dove this sta per currentSquare;
        this.classList.toggle('clicked');
    })

    // infine lo aggiungo al parent
    gridElement.appendChild(currentSquare);
}
