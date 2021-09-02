

// Tramite una funzione javascript disegnare in pagina la griglia con massimo 10 celle per riga.

function creaCampo(numberSquare) {
    for( var i = 1; i <= numberSquare; i++ ) {
        document.getElementById( "campo" ).innerHTML += "<div class=\"quadrato\">" + i + "</div>";
    }
}

// Al click su una cella dovrà essere mostrato con un alert il numero della cella e il suo background diventerà rosso.

document.getElementById( "campo" ).addEventListener("click",
    function(evento) {
        evento.target.classList.toggle("cliccato");
        alert(evento.target.innerHTML);
    }
);

// Chiedere all'utente di inserire il numero di celle di cui sarà composto il campo da gioco.

var numeroCelle = parseInt(prompt( "Inserisci un mumero di celle"));
creaCampo(numeroCelle);
