/* 1.mostra un alert 3 secondi dopo il caricamento della pagina
 */


/* setTimeout(() => {
    alert("ciao world");
}, 3000);
 */

/* 2.l click su un elemento, cambia il colore dello sfondo del body dopo un ritardo di 3 secondi */



const colorBtn = document.querySelector(".colorBtn");
const backgroundColorBtn = document.querySelector(".backgroundColorBtn");

colorBtn.addEventListener("click", function () {

    setTimeout(function () {
        backgroundColorBtn.style.backgroundColor = "Red";
    }, 3000); // 3000 millisecondi = 3 secondi

});


/* 3.rendi visibile un elemento nascosto dopo alcuni secondi dal caricamento */

setTimeout(function () {
    colorBtn.style.display = "block";
}, 3000);


/* 4. mostra l'orario corrente aggiornandolo ogni secondo */

const time = document.querySelector(".timer");


function displayTime() {
    const timerDate = new Date();
    const hours = timerDate.getHours().toString().padStart(2, '0');
    const minutes = timerDate.getMinutes().toString().padStart(2, '0');
    const seconds = timerDate.getSeconds().toString().padStart(2, '0');
    time.textContent = `${hours}:${minutes}:${seconds}`;

}

const clock = setInterval(displayTime, 1000);


