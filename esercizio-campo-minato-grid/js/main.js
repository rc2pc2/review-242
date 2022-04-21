/******************************************
 * CAMPO MINATO DOM - I PARTE: GRIGLIA
 ******************************************/
// In questa versione utilizziamo solo array e funzioni.
// Racchiudiamo il core del gioco in una funzione play()
// sfruttando gli scope innestati per non complicare l'esempio
// con passaggi di parametri tra le varie funzioni.

// Nella prima parte creiamo solo il campo di gioco,
// dando la possibilità all'utente di generare un numero
// di celle corrispondente al livello di gioco prescelto

// il campo di gioco si rigenera cliccando sul pulsante 'play'
document.getElementById("play").addEventListener("click", function () {
  createNewGame();
});

function createNewGame() {
  // Reset generale per il contenitore interno della grid
  document.querySelector("main").innerHTML = "";

  // prima di tutto recuperiamo il livello selezionato dall'utente
  // stabilisco le condizioni date dal livello selezionato
  const levelSelector = document.getElementById("level");
  const level = parseInt(levelSelector.value, 10);

  // GENERAZIONE DELLA GRIGLIA
  // stabilire il numero delle caselle che devono apparire:
  //    prendere il valore in base alla difficoltà
  //    due valori : numero di celle per riga e numero di celle totali

  let cellsNumber;
  let cellsPerSide;

  // Lo switch non è la struttura perfetta, perché ci impedisce di
  // usare delle costanti per i valori definiti di seguito.
  // ma in questo momento del corso è la soluzione più semplice.
  switch (level) {
    case 1:
    default:
      cellsNumber = 100;
      // qui potremmo sostituire questi numeri fissi
      // con l'operazione Math.sqrt(cellsNumber), spostando il calcolo
      // nella funzione che genera il campo di gioco;
      cellsPerSide = 10;
      break;

    case 2:
      cellsNumber = 81;
      cellsPerSide = 9;
      break;

    case 3:
      cellsNumber = 49;
      cellsPerSide = 7;
      break;
  }

  // possiamo prima implementare inline la logica di creazione della griglia
  // e poi rifattorizzare in una funzione
  generatePlayground();

  function generatePlayground() {
    const grid = document.createElement("div");
    grid.classList.add("grid");
    for (let i = 1; i <= cellsNumber; i++) {
      const cell = createGridItem(i);
      cell.addEventListener("click", function () {
        this.classList.toggle("selected");
      });
      grid.appendChild(cell);
    }
    // Un'altra tra le possibili sintassi per selezionare
    // l'elemento <main>
    document.getElementsByTagName("main")[0].appendChild(grid);
  }

  // anche questa funzione può essere conseguenza di un refactoring
  function createGridItem(num) {
    const cell = document.createElement("div");
    cell.classList.add("square");
    const sideLength = `calc(100% / ${cellsPerSide})`;
    cell.style.width = sideLength;
    cell.style.height = sideLength;
    cell.innerHTML = `<span class="cell-number">${num}</span>`;
    return cell;
  }
} // END play()
