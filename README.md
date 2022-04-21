# review-242

Tre cartelle consistenti in:
- livecoding-griglia-dinamica
- livecoding-griglia-dinamica-pari-e-dispari
- esercizio-campo-minato-grid

Per i primi due è stato rivisto il codice e semplificato moltissimo, specialmente nella prima iterazione, mentre per il terzo è cambiata solo qualche nome di variabile e commento insieme alla consegna, inserita in fondo a questo readme.

Nota bene: ho lasciato il toggle al posto dell'add sull'evento di click perché ho notato che piace moltissimo ai ragazzi, qualora non dovesse essere un concetto chiaro o non amato basterà cambiare la funzione classList.toggle() con una funzione standard di classList.add().



Non riesco a stilizzare decentemente i markdown qui su github come riuscirei a fare altrove, non prende neanche gli "a capo"...
# Consegna esercizio js-campominato-grid

> @here
Ciao ragazzi,
Esercizio di oggi: **Griglia Campo Minato**
nome repo: js-campominato-grid

**Consegna**
L'utente clicca su un bottone che genererà una griglia di gioco quadrata, in cui ogni cella contiene un numero tra quelli compresi in un range tra 1 e 100, divise in 10 caselle per 10 righe.

Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro.

**Bonus**
Aggiungere una select accanto al bottone di generazione, che fornisca una scelta tra tre diversi livelli di difficoltà:
    - con difficoltà 1 => 100 caselle, con un numero compreso tra 1 e 100, divise in 10 caselle per 10 righe;
    - con difficoltà 2 => 81 caselle, con un numero compreso tra 1 e 81, divise in 9 caselle per 9 righe;
    - con difficoltà 3 => 49 caselle, con un numero compreso tra 1 e 49, divise in 7 caselle per 7 righe;


**Consigli del giorno:** :party_wizard:
****Scriviamo prima cosa vogliamo fare passo passo in italiano, dividiamo il lavoro in micro problemi.
Ad esempio:
Di cosa ho bisogno per generare i numeri?
Proviamo sempre prima con dei console.log() per capire se stiamo ricevendo i dati giusti.
Le validazioni e i controlli possiamo farli anche in un secondo momento.
>
