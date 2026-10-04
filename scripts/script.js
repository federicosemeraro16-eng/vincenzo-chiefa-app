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
  id : crypto.randomUUID(),
  name : nameValue,
  surname : surnameValue,
  submonths : subscriptionMonths,
  expirationDate : expirationDeadline,
  programmi :[]
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

