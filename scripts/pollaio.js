//pseudo codice per la funzione per mostrare la lista clienti una volta che viene aggiunto al pollaio
const cardContainer = document.getElementById('card-general-container')
//1. al caricamento della pagina 
window.onload = function(){
  //2. leggo la lista clienti da localstorage con localstorage.getitem lista clienti
const listaClienti = JSON.parse(localStorage.getItem('listaClienti')) 
//3.se la lista clienti non è vuota
if (listaClienti && listaClienti.length !==0){
  //4. creo un ciclo for per creare una card per ogni clitente presente nell'array lista clienti
  for (let cliente of listaClienti){
    let card = `<div class="card-container">
        <div class="card-info-container">
          <p>Gallino:</p>
          <p>${cliente.name}</p>
        </div>
        <div class="card-info-container">
          <p>Scadenza abbonamento:</p>
          <p>${cliente.expirationDate}</p>
        </div>
        <div class="card-info-container" id="program-btn-container">
          <button type="button" class="button" id="program-btn">
            Crea Programma
          </button>
        </div>
`
cardContainer.innerHTML += card

  }
//5. mostro le card all'interno del DOM tramite +=innerHtml
}

}

//
