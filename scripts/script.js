//1. Selezionare il bottone registra gallino e metterlo sotto event listener
const saveUserBtn = document.getElementById('save-user-btn')
const nameField = document.getElementById('name')
const surnameField = document.getElementById('surname')
const monthSubField = document.getElementById('subscription-months')
const expirationDate = document.getElementById('expiration-date')
//2. Quando il bottone viene cliccato:
saveUserBtn.addEventListener('click',function(event){
event.preventDefault()  
//2.a) Leggo il valore dei vari input
let nameValue = nameField.value
let surnameValue = surnameField.value
let subscriptionMonths = monthSubField.value
let expirationDeadline = expirationDate.value
// 3) creo l'oggetto con i dati del nuovo cliente
const newClient = {
  name : nameValue,
  surname : surnameValue,
  submonths : subscriptionMonths,
  expirationDate : expirationDeadline 
}
// 4) controllo se esiste un array clienti in localstorage
const clientList = localStorage.getItem('listaClienti')
// 4a.) se non esiste creo l'array e ci aggiungo il singolo oggetto all'array clienti

let listaClienti 

if (clientList===null){
  listaClienti =[]
  listaClienti.push(newClient)
}else{
  listaClienti = JSON.parse(clientList)
  listaClienti.push(newClient)
}

//4b.) se esiste inserisco solo l'oggetto cliente all'interno dell'array
//5) salvo l'array aggiornato in localstorage con setItem
localStorage.setItem('listaClienti',JSON.stringify(listaClienti))
//6) resetto i campi del form
nameField.value = ""
surnameField.value =""
monthSubField.value=""
expirationDate.value=""
})

//pseudo codice per creazione programma
// 1.dichiaro tutti gli elementi che andranno a costruire il programma come variabile
// settimana, allenamento, esercizio
// 2.aggiungo un event listener sul bottone aggiungi settimana 
// 3. al click del bottone se la variabile settimana è minore di cinque modifico il css con add class list 
//4. aggiungo un event listener su aggiungi allenamento
//anche qui se allenamento è minore di cinque coloro il pallino con add class list 
// aggiungo event listener su salva programma 
//. 5. quando questo viene cliccato settimane diventa settimaneprogramma e allenamento invece diventa sedute settimanali
// 6. creo un ciclo for e per ogni settimana costruisco un oggetto 
// 7. l'oggetto avrà chiave settimane e valore settimane +1
//8.annido un altro ciclo dove creo per ogni giorno un oggetto con chiave giorno: valore i+1 esercizi =[];

