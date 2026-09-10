/* 1.mostra un alert 3 secondi dopo il caricamento della pagina
 */


/* setTimeout(() => {
    alert("ciao world");
}, 3000);
 */

/* 2.l click su un elemento, cambia il colore dello sfondo del body dopo un ritardo di 3 secondi */



const colorBtn = document.querySelector(".colorBtn");                                     // seleziona l'elemento colorBtn
const backgroundColorBtn = document.querySelector(".backgroundColorBtn");              // seleziona l'elemento backgroundColorBtn

colorBtn.addEventListener("click", function () {                                      // aggiunge un event listener al click
    const arrayColors = ["black", "green", "blue", "yellow", "purple", "orange"];   // array di colori
    const randomColor = Math.floor(Math.random() * arrayColors.length);           // genera un colore casuale

    setTimeout(function () {                                                      // imposta un timeout di 3 secondi
        document.body.style.backgroundColor = arrayColors[randomColor];                              // cambia il colore dello sfondo del body
    }, 3000);                                                                     // 3000 millisecondi = 3 secondi


});


/* 3.rendi visibile un elemento nascosto dopo alcuni secondi dal caricamento */

setTimeout(function () {                                                      // imposta un timeout di 3 secondi
    colorBtn.style.display = "block";                                         // mostra l'elemento colorBtn
}, 3600);


/* 4. mostra l'orario corrente aggiornandolo ogni secondo */

const time = document.querySelector(".timer");                              // seleziona l'elemento timer


function displayTime() {
    const timerDate = new Date();                                             // crea un oggetto data
    const hours = timerDate.getHours().toString().padStart(2, '0');           // estrae le ore e le formatta
    const minutes = timerDate.getMinutes().toString().padStart(2, '0');       // estrae i minuti e li formatta
    const seconds = timerDate.getSeconds().toString().padStart(2, '0');       // estrae i secondi e li formatta
    time.textContent = `${hours}:${minutes}:${seconds}`;                      // mostra l'orario

}

const clock = setInterval(displayTime, 1000);                                 // aggiorna l'orologio ogni secondo

/*fai lampeggiare un titolo alternandone il colore ogni mezzo secondo*/

function changeColor() {
    const arrayColors = ["red", "green", "blue", "yellow", "purple", "orange"];   // array di colori
    const randomColor = Math.floor(Math.random() * arrayColors.length);           // genera un colore casuale

    const text = document.querySelector(".title");                                // seleziona l'elemento title
    text.style.color = arrayColors[randomColor];                                  // cambia il colore del titolo

}

setInterval(changeColor, 500);                                                    // aggiorna il colore del titolo ogni 500 millisecondi



function startLoading(durationMs) {
    const bar = document.getElementById("progress-bar");
    const label = document.getElementById("progress-label");


    const tickRate = 20;
    let elapsed = 0;

    const timer = setInterval(() => {
        elapsed += tickRate;

        const progress = Math.min(elapsed / durationMs, 1);
        const percentage = Math.round(progress * 100);

        bar.style.width = percentage + "%";
        label.textContent = percentage + "%";

        if (progress >= 1) {
            clearInterval(timer);
        }


    }, tickRate);
}

startLoading(3000); // 5 secondi


addEventListener("click", function () {
    const progressContainer = document.querySelector(".progress-container");
    progressContainer.style.display = "none";

})








